import React from 'react'
import { ListItem } from '../style/ListCSS'
import Avatar from 'react-avatar'

const InfoList = () => {


  return (
    <ListItem>
      <h2>12.14 V3 업데이트 사항</h2>
              <div className='userBox'>
                <Avatar size='40' round={true} src={`${process.env.PUBLIC_URL}/assets/admin.png`}/>
                <div className='userInfo'>
                  <p className='author'>어드민</p>
                  <p className='time'>2022년 12월 14일, 21:45 (고정글!)</p>
                </div>
              </div>
      <p className='postContent'>JavaScript → TypeScript로 마이그레이션 진행 </p>
    </ListItem>
  )
}

export default InfoList