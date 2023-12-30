const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
    },
    likes : {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Like',
            }
        ],
    },
    noOfRetweets : {
        type: Number,
    },
    comment : {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ],
    },

});


const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;