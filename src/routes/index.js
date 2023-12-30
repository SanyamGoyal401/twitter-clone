const express = require('express');
const router = express.Router();
const TweetRouter = require('./tweet-router');
const UserRouter = require('./user-routes');

router.use('/tweet', TweetRouter);
router.use('/user', UserRouter);

module.exports = router;