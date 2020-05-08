const mongoose = require('mongoose');
const {Schema, Types} = require('mongoose');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true, trim: true, minlength: 3},
    password: {type: String, required: true, trim: true, minlength: 4},
    confirmPassword: {type: String, trim: true, minlength: 4},
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;