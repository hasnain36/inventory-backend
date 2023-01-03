const monogoose =require('mongoose');

monogoose.set('strictQuery',false);
monogoose.connect("mongodb+srv://bootcamp:bootcamp2022@cluster0.jb2hshn.mongodb.net/inventory", {useUnifiedTopology:true,useNewUrlParser:true})

var db=monogoose.connection

db.on("connected",()=>{
    console.log("Database Connected");
})

db.on("error",()=>{
    console.log("Database Connectivity Error");

})

module.exports =monogoose