import React,{useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RepleUploadContainer } from '../../style/RepleCSS'
import { RootState } from '../../Reducer/store'
import { PostId } from '../../types/interfaces'

const RepleUpload = (props:PostId) => {
  const [reple,setReple] = useState('')
  const user = useSelector((state:RootState)=>state.user)

  const SubmitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
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
    if(res.data.success){
      alert('댓글 작성 성공')
      window.location.reload()
    }else{
      alert('댓글 작성 실패')
    }
  })
  }

  return (
    <RepleUploadContainer>
      <form>
        <input placeholder='댓글 작성 해주세요' type='text' value={reple} onChange={(e)=>setReple(e.target.value)}/>
        <button onClick={(e)=>{SubmitHandler(e)}}>등록</button>
      </form>
    </RepleUploadContainer>
  )
}

export default RepleUpload