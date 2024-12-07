const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9._%+-]+@[a-z0-9._-]+\.[a-z]{2,4}/
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password'))
        return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;