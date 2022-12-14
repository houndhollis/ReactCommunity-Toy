import React from 'react'
import RepleUpload from './RepleUpload'
import RepleList from './RepleList'
import { useSelector } from 'react-redux'
import { RootState } from '../../Reducer/store'
import { PostId } from '../../types/interfaces'

const RepleArea = (props:PostId) => {

  const user = useSelector((state:RootState)=>state.user) 
  return (
    <div>
      {user.accessToken && <RepleUpload postId ={props.postId}/>}
      <RepleList postId ={props.postId}/>
    </div>
  )
}

export default RepleArea