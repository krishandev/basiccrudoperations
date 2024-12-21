const express=require('express')
const userModel=require('./usermodel');
const { name } = require('ejs');
const app=express();

app.get("/", (req, res)=>{
    res.send("hey")
})

app.get('/create', async(req, res)=>{
     let createdUser=  await userModel.create({
        name:"aman",
        email:"aman@gmail.com",
        username:"aman"
       })
       res.send(createdUser)
})

app.get('/update', async(req, res)=>{
    let updatedUser=await userModel.findOneAndUpdate({username:"bhavesh0102"}, {name:"Bhavesh Krishan Dev"}, {new:true})
    res.send(updatedUser)
})

app.get('/read', async(req, res)=>{
    let users=await userModel.find();
    res.send(users);
})

app.get('/delete', async(req, res)=>{
    let deletedUser=await userModel.findOneAndDelete({username:"aman"})
    res.send(deletedUser)
})

app.listen(3000, function(){
    console.log("It's working")
})