const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    date: {
        type : String,
        required : "please Enter date",
    },
    reference: {
        type : String,
        required : "please Enter the code of product",
    },
    addedby: {
        type : String,
        required : "please add the Category of product",
    },
    customer: {
        type : String,
        required : "please add the Category of product",
    },
    warehouse: {
        type : String,
        required : "please add brand of this product",
    },
    status: {
        type : String,
        required : "please Enter the price",
    },
    grandtotal: {
        type : String,
        required : "please Enter the unit",
    },
    paid: {
        type : String,
        required : "please Enter the quantity of this product",
    },
    due: {
        type : String,
        required : "please Enter the quantity of this product",
    },
    paymentstatus: {
        type : String,
        required : "please Enter the quantity of this product",
    },
    shippingstatus: {
        type : String,
        required : "please Enter the quantity of this product",
    }


});

module.exports = mongoose.model("sale", saleSchema)