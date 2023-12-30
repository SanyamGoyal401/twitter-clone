class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async findById(id){
        try{
            const response = await this.model.findById(id).exec();
            return response;

        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
    async findAll(){
        try{
            const response = await this.model.findAll({});
            return response;

        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async delete(id){
        try{
            const response = await this.model.findByIdAndDelete(id);
            return response;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async update(id, data){
        try{
            const response = await this.model.findByIdAndUpdate(id, data, {new: true});
            return response;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = CrudRepository;