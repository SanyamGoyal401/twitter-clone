const {TweetRepository, HashtagRepository} = require('../repositories')

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag)=> tag.substring(1).toLowerCase());
        
        //store tweet
        const tweet = await this.tweetRepository.create(data);

        //store hashtag
        const existingTags = await this.hashtagRepository.getHashtagByName(tags);
        const textOfPresentTags = existingTags.map(tags=>tags.text);
        let newTags = tags.filter(tag=> !textOfPresentTags.includes(tag));
        newTags = newTags.map(tag=>{
            return {
                text : tag, 
                tweets : [tweet._id]
            }
        })

        await this.hashtagRepository.bulkCreate(newTags);
        existingTags.forEach((tag)=>{
            tag.tweet.push()
            tag.save();
        })
        return tweet;
    }
    async getTweet(tweetId){
        const tweet = await this.tweetRepository.findById(tweetId);
        return tweet;
    }
}

module.exports = TweetService;