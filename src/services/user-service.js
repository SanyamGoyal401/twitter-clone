const {UserRepository} = require('../repositories');
const bcrypt = require('bcrypt');

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }
    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signin(data){
        try {
            const email = data.email;
            const password = data.password;
            const user = await this.userRepository.findByEmail(email);
            if(!user){
                throw new Error('User not found');
            }
            if(!user.comparePassword(password)){
                throw new Error('incorrect credentials');
            }
            console.log('user successfully signed in');            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;