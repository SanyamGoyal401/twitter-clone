const { LikeRepository, TweetRepository, CommentRepository } = require('../repositories');

class LikeService {

    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }


    async toggleLike(modelId, modelType, userId) {
        try {
            let likable;
            if (modelType === 'Tweet') {
                likable = await this.tweetRepository.findById(modelId);

            }
            else if (modelType === 'Comment') {
                likable = await this.commentRepository.findById(modelId);
            }
            else {
                throw new Error('Unknown model type');
            }
            const exists = await this.likeRepository.findByUserAndLikable({
                user: userId,
                onModel: modelType,
                likable: modelId,
            });
            if (exists) {
                likable.likes.pull(exists._id);
                await likable.save();
                await this.likeRepository.delete(exists._id);
            }
            else {
                const newLike = await this.likeRepository.create({
                    user: userId,
                    onModel: modelType,
                    likable: modelId,
                });
                likable.likes.push(newLike);
                await likable.save();
            }

        } catch (error) {
            throw error;
        }
    }
}

module.exports = LikeService;