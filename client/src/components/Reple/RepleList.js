import axios from 'axios'
import {useState,useEffect} from 'react'
import { RepleListDiv } from '../../style/RepleCSS'
import RepleContent from './RepleContent'

const RepleList = (props) => {
   
  const [repleList , setRepleList] = useState([])

  useEffect(()=>{
    const body = {
      postId : props.postId
    }
    axios.post('/api/reple/getReple',body).then((res)=>{
      return setRepleList([...res.data.repleList]);
       
    })
  },[props])

  return (
    <RepleListDiv>
      {repleList.map((reple, idx) => {
        return <RepleContent reple={reple} key={idx} />;
      })}
    </RepleListDiv>
  )
}

export default RepleList