const express=require("express")
const app=express()
const path=require("path")
const User=require("./mongodb")

const tempelatePath=path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));


app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/public/login.html")
})

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname + "/public/signup.html")
})




app.post("/signup", (req,res)=>{

    const user= new User({
        name:req.body.name,
        password:req.body.password
});




User.find({}).then((users) => {
    const u = users;
    
    const x = users.find(y => y.name === user.name)

    if (x) {
        console.log("User already exists")
        return res.sendFile(__dirname + "/public/error.html")
    } else {
        user.save().then(savedUser => {
            console.log(savedUser);
          })
        return res.sendFile(__dirname + "/public/success.html")

    }
    
})
   


})

app.post("/login", (req, res) => {
    const user= new User({
        name:req.body.name,
        password:req.body.password
    });



User.find({}).then((users) => {
    const u = users;
    
    const x = users.find(y => y.name === user.name)

    if (x) {
        console.log("User already exists")
        return res.sendFile(__dirname + "/public/error.html")
    } else {
        user.save().then(savedUser => {
            console.log(savedUser);
          })
        return res.sendFile(__dirname + "/public/success.html")

    }
    
})
})
   


app.listen(3000,()=>{
    console.log("port connected");
})

