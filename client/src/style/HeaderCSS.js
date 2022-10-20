import styled from "@emotion/styled";

const HeaderContainer = styled.div`
width: 100%;
height: 60px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

const HeaderInner = styled.div`
max-width: 1100px;
height: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2%;
`
const Title = styled.div`
   & span{
     font-size: 3rem;
     font-family:KOTRAHOPE;
     color: #4f4f4f;
   }
`
const ImgBox = styled.div`
display: flex;
align-items: center;
 img{
   width: 34px;
   margin-right: 15px;
 }
 & span{
     font-size: 1.5rem;
     font-family:KOTRAHOPE;
     color: #4f4f4f;
  }
`


export { HeaderContainer ,HeaderInner, Title,ImgBox}