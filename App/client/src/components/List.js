import React from 'react'
import { ListDiv,ListItem } from '../style/ListCSS'
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar'
import InfoList from './InfoList';
import moment from "moment";
import "moment/locale/ko";

const List = (props) => {
  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, hh:mm");
    }
  };

  return (
    <ListDiv>
      <h3>추억 저장소。</h3>
      <InfoList props={props}/>
      {props.postList.map((it,idx)=>{
        return (
        <Link to={`/post/${it.postNum}`} key={idx}>
          <ListItem >
              <h2>{it.title}</h2>
              <div className='userBox'>
                <Avatar size='40' round={true} src={it.author.photoURL}/>
                <div className='userInfo'>
                  <p className='author'>{it.author.displayName}</p>
                  <p className='time'>{SetTime(it.createdAt, it.updatedAt)}</p>
                </div>
              </div>
              <p className='postContent'>{it.content}</p>
          </ListItem>
        </Link>
        )
      })}
    </ListDiv>
  )
}

export default List