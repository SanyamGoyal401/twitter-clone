const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
    },
    likes : {
        type: Number,
    },
    noOfRetweets : {
        type: Number,
    },
    comment : {
        type: mongoose.Schema.Types.ObjectId,
    },

});


const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;