import React,{useEffect ,useState} from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
import { PostContainer,PostInner } from '../../style/PostCSS'
import Swal from 'sweetalert2'
import axios from 'axios'

const Edit = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [postInfo,setPostInfo] = useState([])
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')

  useEffect(()=>{
    const body = {
      postNum : params.postNum
    }
    axios.post('/api/post/detail',body).then((res)=>{
      setPostInfo(res.data.post);
    })
  },[])

  useEffect(()=>{
     setTitle(postInfo.title)
     setContent(postInfo.content)
  },[postInfo])



const onSubmit = () => {
  if(title === '' || content === ''){
   return Swal.fire({
      title:'등록실패',
      text:'제목과 내용을 적어주세요',
      icon:'error'
    })
  }
  let body = {
    title: title,
    content: content,
    postNum : params.postNum
  };
  
  axios.post('/api/post/edit',body).then((res)=>{
    if(res.data.success){
      Swal.fire({
        title:'글 수정 성공!',
        icon:"success",
      })
      navigate(`/post/${params.postNum}`)
    }else{
      Swal.fire({
        title:'글 수정 실패!',
        icon:'error'
      })
    }
  })
  .catch((error)=>console.log(error))
}

  return (
    <PostContainer>
      <PostInner>
        <span>글 수정하기</span>
        <input value={title || ''} placeholder='제목을 입력해 주세요!' onChange={(e)=>setTitle(e.target.value)}></input>
        <textarea value={content || ''} placeholder='내용을 입력해 주세요!' onChange={(e)=>setContent(e.target.value)}></textarea>
        <div>
          <button onClick={onSubmit}>저장</button>
          <button onClick={()=>{navigate(-1)}}>취소</button>
        </div>
      </PostInner>
    </PostContainer>
  )
}

export default Edit