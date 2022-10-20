import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { PostContainer,PostInner } from '../style/PostCSS'
import Swal from "sweetalert2";
import axios from 'axios'

const Post = () => {

const navigate = useNavigate()
const [data,setData] = useState({
  title:'',
  content:'',
})

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
        <textarea placeholder='내용을 입력해 주세요!' onChange={handleInputValue('content')}></textarea>
        <button onClick={onSubmit}>등록</button>
      </PostInner>
    </PostContainer>
  )
}

export default Post