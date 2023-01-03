const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type : String,
        required : "please Enter the Name of product",
    },
    code: {
        type : String,
        required : "please Enter the code of product",
    },
    category: {
        type : String,
        required : "please add the Category of product",
    },
    brand: {
        type : String,
        required : "please add brand of this product",
    },
    price: {
        type : String,
        required : "please Enter the price",
    },
    unit: {
        type : String,
        required : "please Enter the unit",
    },
    quantity: {
        type : String,
        required : "please Enter the quantity of this product",
    },


});

module.exports = mongoose.model("product", productSchema)