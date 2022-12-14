import React from 'react'
import { ListItem } from '../style/ListCSS'
import Avatar from 'react-avatar'

const InfoList = () => {


  return (
    <ListItem>
      <h2>11.24 V2 업데이트 사항</h2>
              <div className='userBox'>
                <Avatar size='40' round={true} src={`${process.env.PUBLIC_URL}/assets/admin.png`}/>
                <div className='userInfo'>
                  <p className='author'>어드민</p>
                  <p className='time'>2022년 12월 14일, 01:32 (고정글!)</p>
                </div>
              </div>
      <p className='postContent'>글 작성 이미지 사진 에러 수정, favicon 수정</p>
    </ListItem>
  )
}

export default InfoList