import styled from '@emotion/styled'

const RegisterContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 8rem;
height: 100%;
`
const RegisterInner = styled.div`
height: 100%;
width: 350px;
background-color: #fff;
padding: 20px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
& form{
  display: flex;
  flex-direction: column;
  & label{
   font-family: KOTRAHOPE;
   font-size: 20px;
   color:#4f4f4f;
   margin-bottom: 3px;
  }
  & input{
   margin-bottom: 15px;
   padding: 10px 10px;
   border: 1px solid #c6c6c6;
   border-radius: 5px;
  }
  & button{
  margin-top: 15px;
  font-family: KOTRAHOPE;
  background-color: #06afff;
  padding: 5px 0;
  border-radius: 5px;
  border: 1px solid #06afff;
  color: #fff;
  font-size: 1.3rem;
  transition: 0.3s;
  &:hover{
  background-color: #fff;
  border: 1px solid #06afff;
  color: #06afff;
  }
 } 
}
`

export {RegisterContainer,RegisterInner}