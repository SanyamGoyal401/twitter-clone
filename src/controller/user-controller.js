const {UserService} = require('../services');


const userService = new UserService();
/*
* POST /user/signup
* @body {}
*/
async function signup(req, res){
    try {
        const data = req.body;
        const response = await userService.signup(data);
        return res.status(200)
                    .json({
                        success: true,
                        message: "Successfully created User ",
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
* POST /user/signin
* @body {}
*/
async function signin(req, res){
    try {
        const data = req.body;
        const response = await userService.signin(data);
        return res.status(200)
                    .json({
                        success: true,
                        message: "User Successfully signed in",
                        data : response,
                    })
    } catch (error) {
        console.log(error);
        return res.status(500)
                    .json({
                        success: false,
                        message: "Error signing request",
                        data : {},
                        error: error
                    })
    }
}


module.exports = {
    signup,
    signin,
}