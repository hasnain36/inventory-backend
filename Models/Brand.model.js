const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    brandName: {
        type : String,
        required : "please Enter the Name of brand",
    },
    brandDescription: {
        type : String,
        required : "please Enter the description of brand",
    },
    
});

module.exports = mongoose.model("brand", brandSchema)