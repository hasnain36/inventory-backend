const Purchase = require("../Models/Purchase.model")

class PURCHASE {
    createPurchase = async (req) =>{
        let purchase =req 
        console.log(purchase)
        try{
            const res=await new Purchase(purchase).save();
            return res;
        }
        catch(error){
            throw new Error (error);
        }
    };
}

module.exports = new Purchase();