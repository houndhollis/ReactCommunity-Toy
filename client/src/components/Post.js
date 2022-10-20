import React from 'react'
import { PostContainer,PostInner } from '../style/PostCSS'

const Post = () => {
  return (
    <PostContainer>
      <PostInner>
        <span>글 작성하기</span>
        <input placeholder='제목을 입력해 주세요!'></input>
        <textarea placeholder='내용을 입력해 주세요!'></textarea>
        <button>등록</button>
      </PostInner>
    </PostContainer>
  )
}

export default Post