const { LikeService } = require('../services');

const likeService = new LikeService();

/**
 * POST /api/tweet/like
 */
async function toggleLike(req, res) {
    try {
        const modelId = req.body.modelId;
        const modelType = req.body.modelType;
        const userId = req.body.userId;
        const response = await likeService.toggleLike(modelId, modelType, userId);
        return res.status(200)
            .json({
                success: true,
                message: "Successfully liked the tweet",
                data: response,
            })

    } catch (error) {
        console.log(error);
        return res.status(500)
            .json({
                success: false,
                message: "Error Occured while liking tweet",
                data: {},
                error: error
            })
    }
}

module.exports = {
    toggleLike,
}