import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostContainer,PostInner } from '../../style/PostCSS'
import ImageUpload from './ImageUpload';
import Swal from "sweetalert2";
import axios from 'axios'
import { RootState } from '../../Reducer/store';

const Post = () => {

const user = useSelector((state:RootState)=>state.user)
const navigate = useNavigate()

const [data,setData] = useState({
  title:'',
  content:'',
})
const [image,setImage] = useState('')

useEffect(()=>{
  if(!user.accessToken){
    Swal.fire({
      title:'접근 에러',
      text:'로그인 한 회원만 글 작성 가능합니다.',
      icon:'error',
    })
    navigate('/login')
  }
},[])

const handleInputValue = (key) => (e) => {
  setData({...data,[key]: e.target.value})
}

const onSubmit = () => {
  if(data.title === '' || data.content === ''){
   return Swal.fire({
      title:'등록실패',
      text:'제목과 내용을 적어주세요',
      icon:'error'
    })
  }

  let body = {
    title: data.title,
    content: data.content,
    image:image,
    uid: user.uid,
  };
  
  axios.post('/api/post/submit',body).then((res)=>{
    if(res.data.success){
      Swal.fire({
        title:'글 작성 성공!',
        icon:"success",
      })
      navigate('/')
    }else{
      Swal.fire({
        title:'글 작성 실패!',
        icon:'error'
      })
    }
  })
  .catch((error)=>console.log(error))
}

  return (
    <PostContainer>
      <PostInner>
        <span>글 작성하기</span>
        <input placeholder='제목을 입력해 주세요!' onChange={handleInputValue('title')}></input>
        <ImageUpload setImage={setImage}/>
        <textarea placeholder='내용을 입력해 주세요!' onChange={handleInputValue('content')}></textarea>
        <button onClick={onSubmit}>등록</button>
      </PostInner>
    </PostContainer>
  )
}

export default Post