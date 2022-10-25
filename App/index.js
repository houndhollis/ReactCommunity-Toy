const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require("dotenv");
const app = express()
const port = process.env.PORT || 5001;

dotenv.config({path:'.env'})
app.use(express.static(path.join(__dirname, './client/build')))
app.use('/image', express.static('./server/image'))
app.use(express.json()) // body-parsor 
app.use(express.urlencoded({extended:true}))
app.use('/api/post',require('./server/Router/post.js'))
app.use('/api/user',require('./server/Router/user.js'))
app.use("/api/reple", require("./server/Router/reple.js"));


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.get("*", (요청, 응답) => {
  응답.sendFile(path.join(__dirname, "./client/build/index.html"));
});

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