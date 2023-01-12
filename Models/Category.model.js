const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type : String,
        required : "please Enter the Name of category",
    },
    code: {
        type : String,
        required : "please Enter the code of category",
    },
    
});

module.exports = mongoose.model("category", categorySchema)