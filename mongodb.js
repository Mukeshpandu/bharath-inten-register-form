const mongoose=require("mongoose")
const url = "mongodb://localhost:27017";

mongoose.connect(url)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("Failed to connected");
})

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    }
    
})


const User=new mongoose.model("User",userSchema)

module.exports=User

