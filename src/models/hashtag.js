const mongoose = require('mongoose')

const hashtagSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true
    },
    tweets: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
            }
        ]
    }
})

const HashTag = mongoose.model('Hashtag', hashtagSchema);

module.exports = HashTag;