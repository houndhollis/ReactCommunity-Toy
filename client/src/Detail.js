import React,{useEffect ,useState} from 'react'
import { useParams ,Link ,useNavigate} from 'react-router-dom'
import { DetailDiv,DetailItem } from './style/DetailCSS'
import Swal from 'sweetalert2'
import axios from 'axios'

const Detail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [postInfo,setPostInfo] = useState([])

  useEffect(()=>{
    const body = {
      postNum : params.postNum
    }
    axios.post('/api/post/detail',body).then((res)=>{
      setPostInfo(res.data.post)
    })
  },[])
  
  const DeleteHandler = () => {
    if(window.confirm('정말로 삭제하겠습니까?')){
      const body = {
        postNum : params.postNum
      }
      axios.post('/api/post/delete',body)
      .then((res)=>{
        if(res.data.success){
          Swal.fire({
            title:'삭제 했습니다.',
            icon:'success',
          })
          navigate('/')
        }
      })
      .catch((err)=>{
        Swal.fire({
          title:'예기치 못한 오류입니다.',
          icon:'error'
        })
      })
    }
  }

  return (
    <DetailDiv>
      <DetailItem>
        {postInfo.image?<img style={{width:'100%', height:'auto'}} src={`http://localhost:5001/${postInfo.image}`} /> : null}
        <p>{postInfo.title}</p>
        <div>
          <span>{postInfo.content}</span>
          <div>
           <Link to={`/edit/${postInfo.postNum}`}><button className='edit'>수정</button></Link> 
            <button onClick={()=>DeleteHandler()} className='delete'>삭제</button>
          </div>
        </div>
      </DetailItem>
    </DetailDiv>
  )
}

export default Detail