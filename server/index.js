const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require("dotenv");
const app = express()
const port = 5001;

dotenv.config({path:'.env'})
app.use(express.static(path.join(__dirname, '../client/build')))
app.use('/image', express.static('./image'))
app.use(express.json()) // body-parsor 
app.use(express.urlencoded({extended:true}))
app.use('/api/post',require('./Router/post.js'))
app.use('/api/user',require('./Router/user.js'))
// const { Post } = require('./Model/Post.js')
// const { Counter } = require('./Model/Counter.js')

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// app.post('/api/post/submit',(req,res)=>{
//   let temp = req.body;
//   Counter.findOne({name:'counter'})
//   .exec()
//   .then((counter)=>{
//     temp.postNum = counter.postNum;
//     const CommunityPost = new Post(temp);
//     CommunityPost.save().then(()=>{
//       // 성공했을시 카운터 1증가 해야한다
//       // 업데이트 원 은 인자를 두개받는다 
//       // 첫번째 누구 두번째 어떻게할껀지
//       Counter.updateOne({name:'counter'},{$inc : {postNum : 1}})
//       .then(()=>{
//         res.status(200).json({success: true})
//       })
//     })
//   })
//   .catch((err)=>{
//     res.status(400).json({success:false})
//   })
// })

// app.get('/api/post/list',(req,res)=>{
//   Post.find().exec().then((doc) => {
//     res.status(200).json({success: true,postList : doc})
//   }).catch((err)=>{
//     res.status(400).json({ success:false})
//   })
// })

// app.post('/api/post/detail',(req,res)=>{
//   Post.findOne({postNum : Number(req.body.postNum)})
//   .exec()
//   .then((doc) => {
//     res.status(200).json({success: true, post : doc})
//   }).catch((err)=>{
//     res.status(400).json({ success:false})
//   })
// })

// app.post('/api/post/edit',(req,res)=>{
//   console.log(req.body)
//   let temp = {
//     title:req.body.title,
//     content: req.body.content,
//   }
//   Post.updateOne({postNum : Number(req.body.postNum)},{$set:temp})
//   .exec()
//   .then(() => {
//     res.status(200).json({success: true})
//   }).catch((err)=>{
//     res.status(400).json({ success:false})
//   })
// })

// app.post('/api/post/delete',(req,res)=>{
//   Post.deleteOne({postNum : Number(req.body.postNum)})
//   .exec()
//   .then(() => {
//     res.status(200).json({success: true})
//   }).catch((err)=>{
//     res.status(400).json({ success:false})
//   })
// })

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