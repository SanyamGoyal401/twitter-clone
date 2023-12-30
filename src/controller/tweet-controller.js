const {TweetService} = require('../services');


const tweetService = new TweetService();
/*
* POST /tweet
* @body {}
*/
async function createTweet(req, res){
    try {
        const data = req.body;
        const response = await tweetService.create(data);
        return res.status(200)
                    .json({
                        success: true,
                        message: "Successfully created tweet",
                        data : response,
                    })
    } catch (error) {
        console.log(error);
        return res.status(500)
                    .json({
                        success: false,
                        message: "Error creating tweet",
                        data : {},
                        error: error
                    })
    }
}

/*
* GET /tweet
* @param {String}
*/
async function getTweet(req, res){
    try {
        const id = req.query.id;
        const response = await tweetService.getTweet(id);
        return res.status(200)
                    .json({
                        success: true,
                        message: "Successfully retrieved tweet",
                        data : response,
                    })
    } catch (error) {
        return res.status(500)
                    .json({
                        success: false,
                        message: "Error retrieving tweet",
                        data : {},
                        error: error
                    })
    }
}

module.exports = {
    createTweet,
    getTweet,
}