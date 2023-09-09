const {Hashtag} = require('../models');
const CrudRepository = require('./crud-repository')


class HashtagRepository extends CrudRepository{
    constructor(){
        super(Hashtag);
    }

    
    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            throw error;
        }
    }

    //get by name
    async getHashtagByName(name){
        try {
            const tag = await Hashtag.find({
                text: name
            });
            return tag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = HashtagRepository;