import React from 'react'
import { ListItem } from '../style/ListCSS'
import Avatar from 'react-avatar'
import moment from "moment";
import "moment/locale/ko";

const InfoList = (props) => {
  console.log(props)

  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, hh:mm");
    }
  };

  return (
    <ListItem>
      <h2>10.26 V1 업데이트 예정사항</h2>
              <div className='userBox'>
                <Avatar size='40' round={true} src={`${process.env.PUBLIC_URL}/assets/admin.png`}/>
                <div className='userInfo'>
                  <p className='author'>어드민</p>
                  <p className='time'>2022년 10월 26일, 04:00(수정됨)</p>
                </div>
              </div>
      <p className='postContent'>프로필 사진, 글 작성 이미지 사진 오류 해결 예정 네이버 클라우드 사용</p>
    </ListItem>
  )
}

export default InfoList