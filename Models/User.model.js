const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    email :{
        type:String, 
        required:[true, "Email is required"]
    },
    password: {
        type: String,
        required :[true, 'Password is requires']
    },
}, {timeStamps:true})




module.exports = mongoose.model('User', userSchema)