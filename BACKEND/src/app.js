const express=require('express');
const app=express();
const multer=require('multer');// file ko read krne ke liye middleware and we have to install it in vs code terminal using the command npm i multer
const uploadFile=require('./services/storage.service');
const PostModel=require('./models/post.model');
const postModel = require('./models/post.model');
const cors=require('cors')

app.use(cors())
app.use(express.json());
const upload=multer({storage:multer.memoryStorage()});
app.post('/create-post',upload.single("image"),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const result=await uploadFile(req.file.buffer);
    const post=await PostModel.create({
        image:result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"post created successfully",
        post})
})
app.get('/posts',async(req,res)=>{
    const posts=await PostModel.find()
    return res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })
})
module.exports=app;