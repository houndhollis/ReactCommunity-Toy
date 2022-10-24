import React,{useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const RepleUpload = (props) => {
  const [reple,setReple] = useState('')
  const user = useSelector((state)=>state.user)

  const SubmitHandler = (e) =>{
   e.preventDefault()
  if(!reple){
    return alert('댓글 내용을 채워주세요')
  }

  let body = {
    reple : reple,
    uid : user.uid,
    postId:props.postId
  }

  axios.post('/api/reple/submit',body).then((res)=>{
    setReple('')
    if(res.data.success){
      alert('댓글 작성 성공')
    }else{
      alert('댓글 작성 실패')
    }
  })
  }

  return (
    <div>
      <form>
        <input type='text' value={reple} onChange={(e)=>setReple(e.target.value)}/>
        <button onClick={(e)=>{SubmitHandler(e)}}>등록</button>
      </form>
    </div>
  )
}

export default RepleUpload