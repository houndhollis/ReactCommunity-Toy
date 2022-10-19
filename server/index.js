const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require("dotenv");
const app = express()
const port = 5001;

dotenv.config({path:'.env'})
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.json()) // body-parsor 
app.use(express.urlencoded({extended:true}))

const { Post } = require('./Model/Post.js')

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.post('/api/test',(req,res)=>{
  const CommunityPost = new Post({ title: '제목입니다.',content:'내용입니다.' });
  CommunityPost.save().then(()=>{
    res.status(200).json({success: true})
  })
})

app.listen(port, () => {
  mongoose
  .connect(`mongodb+srv://hollis9797:${process.env.SERVER_PW}@cluster0.f5krlku.mongodb.net/Community?retryWrites=true&w=majority`)
  .then(()=>{
    console.log('Connectiong mogoDb')
  }).catch((err)=>{
    console.log(err)
  })
  console.log('Server on is 5001')
})


/*
1. Post MongoDB Model
2. client CSS (Bootstrap, Emotion)


*/