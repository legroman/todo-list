const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator');
let User = require('../models/user.model');

router.route('/register').post(
    [
        check('username', 'should be more than 3 Latin characters').isLength({min: 3}),
        check('password', 'should be more than 4 Latin characters').isLength({min: 4}),
        check('confirmPassword', 'should be more than 4 Latin characters').isLength({min: 4}),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const err = `${errors.array()[0].param} ${errors.array()[0].msg}`;
                return res.status(400).json({errors: errors.array(), message: err})
            }

            const {username, password, confirmPassword} = req.body;
            const user = await User.findOne({username});
            if (user) {
                return res.status(403).json({message: "a user with this name already exists"})
            }

            if (password !== confirmPassword) {
                return res.status(400).json({message: "different passwords"})
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = new User({
                username,
                password: hashedPassword
            });

            await newUser.save();

            res.status(201).json({message: "new user created"})
        } catch (e) {
            res.status(500).json({message: "Something went wrong"})
        }
    });

router.route('/login').post(
    [
        check('username', 'username should be between 3-30 characters').isLength({min: 3, max: 30}),
        check('password', 'password should be between 4-30 characters').isLength({min: 4, max: 20})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const err = `${errors.array()[0].param} ${errors.array()[0].msg}`;
                return res.status(400).json({errors: errors.array(), message: err})
            }

            const {username, password} = req.body;
            const user = await User.findOne({username});

            if (!user) {
                return res.status(400).json({message: "a user with this name was not found"})
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({message: "the password is wrong"})
            }

            const token = jwt.sign(
                {userId: user.id},
                "secret-key",
                {expiresIn: "1h"}
            );

            res.status(200).json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: "Something went wrong... please tey again"})
        }
    });

module.exports = router;