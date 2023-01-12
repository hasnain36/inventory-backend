const User = require("../Models/User.model")

class USER {
    createUser = async (req) =>{
        let user =req 
        console.log(user)
        try{
            const res=await new User(user).save();
            return res;
        }
        catch(error){
            throw new Error (error);
        }
    };
}

module.exports = new USER();