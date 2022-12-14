import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Detail from '../../Detail'
import RepleArea from '../Reple/RepleArea'
import { DetailListType } from '../../types/interfaces'

const PostArea = () => {
  const [postInfo,setPostInfo] = useState<DetailListType>(Object)
  // const [flag,setFlag] = useState(false)
  const params = useParams()

  useEffect(()=>{
    const body = {
      postNum : params.postNum
    }
    axios.post('/api/post/detail',body).then((res)=>{
      setPostInfo(res.data.post)
    })
  },[])

  return (
    <>
      <Detail postInfo={postInfo}/>
      <RepleArea postId={postInfo._id}/>
    </>
  )
}

export default PostArea