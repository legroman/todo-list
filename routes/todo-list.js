const router = require('express').Router();
let Todo = require('../models/todo-list.model');
const {check, validationResult} = require('express-validator');
const auth = require('../middleware/auth.middleware');

router.route('/').get(auth, (req, res) => {
    Todo.find({owner: req.user.userId})
        .then(todoList => res.json(todoList))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route('/add').post(auth,
    [
        check('label', 'todo cannot be empty').isLength({min: 1}),
        check('label','should be less then 110 characters').isLength({max: 110})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(), message: errors.array()[0].msg})
        }

        const {label, important, done, todoCreatedAt, key} = req.body;
        const newTodo = new Todo({
            key,
            label,
            important,
            done,
            todoCreatedAt,
            owner: req.user.userId
        });

        await newTodo.save();
        res.status(201).json({message: "new todo added"});
    }catch (e) {
        res.status(500).json({message: "Something went wrong"});
    }
});

router.route('/:key').delete((req, res) => {
    Todo.findOneAndDelete({'key': req.params.key})
        .then(() => res.json("Todo deleted..."))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route('/update/label').post((req, res) => {
    Todo.findOneAndUpdate({'key': req.body.key}, {'label': req.body.label})
        .then(() => res.json({message: `updated ${req.body.label}`}))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route('/update/done').post((req, res) => {
    Todo.findOneAndUpdate({'key': req.body.key}, {'done': !req.body.done})
        .then(() => res.json({message: "updated"}))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route('/update/important').post((req, res) => {
    Todo.findOneAndUpdate({'key': req.body.key}, {'important': !req.body.important})
        .then(() => res.json({message: "updated"}))
        .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;