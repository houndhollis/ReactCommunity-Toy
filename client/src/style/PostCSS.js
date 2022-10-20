import styled from "@emotion/styled";

const PostContainer = styled.div`
width: 100%;
height: 100%;
`
const PostInner = styled.div`
max-width: 1100px;
height: 100%;
margin: 0 auto;
padding: 0 3%;
margin-top: 3rem;
display: flex;
flex-direction: column;
color: #4f4f4f;
& span{
  font-family:KOTRAHOPE;
  font-size: 2rem;
}
& input ,textarea{
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  margin-top: 15px;
  width: 100%;
  padding: 15px 10px;
  font-size: 1.2rem;
}
& textarea{
  height: 350px;
  margin-bottom: 15px;
  resize: none;
}
& button{
  background-color: #06afff;
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid #06afff;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover{
    color: #06afff;
    background-color: #fff;
  }
}
`

export {PostContainer,PostInner}