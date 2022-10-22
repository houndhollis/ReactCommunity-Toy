const express = require('express');
const router = express.Router()
const multer = require('multer')
const { Post } = require('../Model/Post.js')
const { Counter } = require('../Model/Counter.js')

router.post('/submit',(req,res)=>{
  let temp = req.body;
  Counter.findOne({name:'counter'})
  .exec()
  .then((counter)=>{
    temp.postNum = counter.postNum;
    const CommunityPost = new Post(temp);
    CommunityPost.save().then(()=>{
      // 성공했을시 카운터 1증가 해야한다
      // 업데이트 원 은 인자를 두개받는다 
      // 첫번째 누구 두번째 어떻게할껀지
      Counter.updateOne({name:'counter'},{$inc : {postNum : 1}})
      .then(()=>{
        res.status(200).json({success: true})
      })
    })
  })
  .catch((err)=>{
    res.status(400).json({success:false})
  })
})

router.get('/list',(req,res)=>{
  Post.find().exec().then((doc) => {
    res.status(200).json({success: true,postList : doc})
  }).catch((err)=>{
    res.status(400).json({ success:false})
  })
})

router.post('/detail',(req,res)=>{
  Post.findOne({postNum : Number(req.body.postNum)})
  .exec()
  .then((doc) => {
    res.status(200).json({success: true, post : doc})
  }).catch((err)=>{
    res.status(400).json({ success:false})
  })
})

router.post('/edit',(req,res)=>{
  console.log(req.body)
  let temp = {
    title:req.body.title,
    content: req.body.content,
  }
  Post.updateOne({postNum : Number(req.body.postNum)},{$set:temp})
  .exec()
  .then(() => {
    res.status(200).json({success: true})
  }).catch((err)=>{
    res.status(400).json({ success:false})
  })
})

router.post('/delete',(req,res)=>{
  Post.deleteOne({postNum : Number(req.body.postNum)})
  .exec()
  .then(() => {
    res.status(200).json({success: true})
  }).catch((err)=>{
    res.status(400).json({ success:false})
  })
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("file");

router.post("/image/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({success: true ,filepath:res.req.file.path })
    }
  });
});

module.exports = router;