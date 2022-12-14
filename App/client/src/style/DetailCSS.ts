import styled from "@emotion/styled";

const DetailDiv = styled.div`
max-width: 1100px;
margin: 0 auto;
padding: 0 3%;
margin-top: 3rem;
padding-bottom: 2rem;

 & h3{
   margin-bottom: 20px;
   font-size: 2rem;
 }
 .buttonBox{
     display: flex;
     justify-content: flex-end;
     & button{
       margin-right: 5px;
       font-size: 16px;
       padding: 5px 10px;
       border-radius: 5px;
       color:#fff;
       background-color: #06afff;
       border: 1px solid #06afff;
       &:hover{
       background-color: #fff;
       border: 1px solid #06afff;
       color: #06afff;
     }
     }
  }
`
const DetailItem = styled.div`
   width: 100%;
   margin-bottom: 1rem;
   border: 1px solid #e6e6e6;
   border-radius: 5px;
   padding: 15px;
   & img{
     width: 100%;
     height: 600px;
     @media screen and (max-width: 477px) {
      height: 300px;
     }
   }
   & h2{
     padding-top: 5px;
     margin-bottom: 15px;
   }
   .userBox{
     display: flex;
     align-items: center;
     margin-bottom: 1rem;
     border-bottom: 1px solid #e6e6e6;
     padding-bottom: 5px;
     .userInfo{
      margin-top: 2px;
      margin-left: 5px;
      .author{
        font-size: 16px;
        font-weight: 700;
      }
      .time{
        font-size: 12px;
        color: #636363;
        font-weight: 500;
        margin-top: 5px;
      }
     }
   }
   .postContent{
     padding: 0 5px 5px 5px;
     word-break: keep-all;
     overflow-wrap: break-word;
   }
   
`

export {DetailDiv,DetailItem}