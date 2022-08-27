const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: Boolean
    },
    password: {
        type: String,
        require: Boolean
    }
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;