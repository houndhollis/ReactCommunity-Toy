import React,{useState,useEffect,useRef} from 'react'
import { RepleContentDiv } from '../../style/RepleCSS'
import { useSelector } from "react-redux";
import axios from 'axios';
import Swal from 'sweetalert2';
import Avatar from 'react-avatar';
import moment from "moment";
import "moment/locale/ko";

const RepleContent = (props) => {

  const [modalFlag,setModalFlag] = useState(false)
  const [editFlag , setEditFlag] = useState(false)
  const [reple , setReple] = useState(props.reple.reple)
  const user = useSelector((state) => state.user);
  const ref = useRef();
  useOnClickOutside(ref, () => setModalFlag(false));

  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, hh:mm");
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      uid : user.uid,
      reple : reple,
      post : props.reple.postId,
      repleId : props.reple._id
    }
    axios.post('/api/reple/edit',body).then((res)=>{
      if(res.data.success){
        alert('댓글 수정이 성공하였습니다.')
      }else{
        alert('댓글 수정이 실패하였습니다.')
      }
      return window.location.reload()
    })
  }

  const DeleteHandler = (e) => {
     e.preventDefault()
     if(window.confirm('정말로 삭제하겠습니까?')){
      const body = {
        repleId : props.reple._id,
        post : props.reple.postId,
      }
      axios.post('/api/reple/delete',body)
      .then((res)=>{
        if(res.data.success){
          window.location.reload()
          Swal.fire({
            title:'삭제 했습니다.',
            icon:'success',
          })
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
    <RepleContentDiv>
      <div className='userBox'>
        <div className='userContainer'>
         <Avatar size='30' round={true} src={props.reple.author.photoURL} style={{border:'1px solid #e6e6e6'}}/>
          <div className='userInfo'>
              <p className='author'>{props.reple.author.displayName}</p>
              <p className='time'>{SetTime(props.reple.createdAt, props.reple.updatedAt)}</p>
          </div>
        </div>
        {props.reple.author.uid === user.uid &&
        <div className='modalControl'>
          <span onClick={()=>setModalFlag(true)}>···</span>
          {modalFlag && (
            <div className='modalDiv' ref={ref}>
            <p onClick={()=>{setEditFlag(true);setModalFlag(false);}}>수정</p>
            <p onClick={(e)=>DeleteHandler(e)} className='delete'>삭제</p>
          </div>)}
        </div>
        }
      </div>
      {editFlag ? <div>
      <form className='editForm'>
        <input type='text' value={reple} onChange={(e)=>setReple(e.target.value)}/>
        <button onClick={(e)=>{SubmitHandler(e)}}>등록</button>
        <button onClick={()=>setEditFlag(false)}>취소</button>
      </form>
    </div>:
    <p className='postContent'>{props.reple.reple}</p>}
    </RepleContentDiv>
  )
}


function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default RepleContent