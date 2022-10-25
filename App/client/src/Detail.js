import React from 'react'
import { useParams ,Link ,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { DetailDiv,DetailItem } from './style/DetailCSS'
import Swal from 'sweetalert2'
import Avatar from 'react-avatar'
import axios from 'axios'
import moment from "moment";
import "moment/locale/ko";

const Detail = (props) => {
  const params = useParams()
  const navigate = useNavigate()
  const user = useSelector((state)=> state.user)

  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, hh:mm");
    }
  };

  
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
        <h2>{props.postInfo.title}</h2>
        <div className='userBox'>
          <Avatar size='40' round={true} src={props.postInfo.author?.photoURL} style={{border:'1px solid #e6e6e6'}}/>
          <div className='userInfo'>
            <p className='author'>{props.postInfo.author?.displayName}</p>
            <p className='time'>{SetTime(props.postInfo.createdAt, props.postInfo.updatedAt)}</p>
          </div>
        </div>    
        <span className='postContent'>{props.postInfo.content}</span>
        {props.postInfo.image?<img src={`http://localhost:5001/${props.postInfo.image}`} alt=''/> : null}
      </DetailItem>
          {user.uid === props.postInfo.author?.uid  && <div className='buttonBox'>
           <Link to={`/edit/${props.postInfo.postNum}`}><button className='edit'>수정</button></Link> 
            <button onClick={()=>DeleteHandler()} className='delete'>삭제</button>
          </div>}
    </DetailDiv>
  )
}

export default Detail