const mongoose = require('mongoose');
const {Schema, Types} = require('mongoose');

const todoSchema = new Schema({
    key: {type: Number, required: true, unique: true},
    label: {type: String, required: true, trim: true},
    important: {type: Boolean, required: true},
    done: {type: Boolean, required: true},
    todoCreatedAt: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: "User"}
}, {
    timestamps: true
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;