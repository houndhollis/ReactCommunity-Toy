import React,{useState,useEffect} from 'react'
import { ListDiv,ListItem } from '../style/ListCSS'
import {Link} from 'react-router-dom'
import axios from 'axios'

const List = () => {

  const [postList ,setPostList] = useState([])

  useEffect(()=>{
    axios.get('/api/post/list')
    .then((res)=>{
      setPostList(res.data.postList.sort((a,b)=>b.postNum-a.postNum))
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <ListDiv>
      <h3>リスト です。</h3>
      {postList.map((it,idx)=>{
        return (
        <Link to={`/post/${it.postNum}`} key={idx}>
          <ListItem >
              <p>작성자 : {it.author.displayName}</p>
              <p>제목 : {it.title}</p>
              <span>내용 : {it.content}</span>
          </ListItem>
        </Link>
        )
      })}
    </ListDiv>
  )
}

export default List