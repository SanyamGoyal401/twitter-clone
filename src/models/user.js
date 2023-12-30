const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    tweets: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
            }
        ]
    }
});

userSchema.pre('save', function(next){
    const user = this;
    const salt = bcrypt.genSaltSync(8);
    const encryptedPassword = bcrypt.hashSync(user.password, salt);
    user.password = encryptedPassword;
    next(); 
});

userSchema.methods.comparePassword = function comparePassword(password){
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User',userSchema);

module.exports = User;