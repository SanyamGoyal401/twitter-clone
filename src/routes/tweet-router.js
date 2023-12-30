const express = require('express');

const router = express.Router();
const {TweetController, LikeController} = require('../controller');

router.get('/', TweetController.getTweet);
router.post('/', TweetController.createTweet);
router.post('/like', LikeController.toggleLike);

module.exports = router;