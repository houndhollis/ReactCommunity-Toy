import React from 'react'
import { ListDiv,ListItem } from '../style/ListCSS'
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar'
import InfoList from './InfoList';
import moment from "moment";
import "moment/locale/ko";
import { PostList } from '../types/interfaces';

const List = (props:PostList) => {
  const SetTime = (a:Date, b:Date) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, hh:mm");
    }
  };

  return (
    <ListDiv>
      <h3>추억 저장소。</h3>
      <InfoList/>
      {props.postList.map((post,idx)=>{
        return (
        <Link to={`/post/${post.postNum}`} key={idx}>
          <ListItem >
              <h2>{post.title}</h2>
              <div className='userBox'>
                <Avatar size='40' round={true} src={post.author.photoURL}/>
                <div className='userInfo'>
                  <p className='author'>{post.author.displayName}</p>
                  <p className='time'>{SetTime(post.createdAt, post.updatedAt)}</p>
                </div>
              </div>
              <p className='postContent'>{post.content}</p>
          </ListItem>
        </Link>
        )
      })}
    </ListDiv>
  )
}

export default List