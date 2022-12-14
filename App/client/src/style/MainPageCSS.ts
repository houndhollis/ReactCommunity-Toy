import styled from "@emotion/styled";

const MainContainer = styled.div`
  padding:1rem 4%;
  max-width: 1100px;
  margin: 0 auto;
 .filter{
   display: flex;
   justify-content: space-between;
   margin-top: 1rem;
   .search{
     display: flex;
     & input{
       padding: 5px 0;
       padding-left: 5px;
       padding-right: 25px;
       font-size: 16px;
       border: 1px solid #e1e1e1;
       border-radius: 5px 0 0 5px;
       @media screen and (max-width: 477px) {
         font-size: 13px;
         padding-right: 0;
       } 
       &:focus{
         outline: none;
       }
     }
     & button{
       padding: 5px 10px;
       font-size: 20px;
       border: 1px solid #06afff;
       background-color: #06afff;
       color: #fff;
       font-weight: bold;
       border-radius: 0 5px 5px 0;
       @media screen and (max-width: 477px) {
         font-size: 13px;
       } 
     }
   }
   .select{
     border-radius: 5px;
     padding: 5px 5px;
     border: 1px solid #e1e1e1;
     color: #3b3b3b;
     font-size: 16px;
     @media screen and (max-width: 477px) {
      font-size: 13px;
     } 
     &:focus{
       outline: none;
     }
   }
 }
 


 .footer{
   display: flex;
   justify-content: center;
   padding : 20px 0;
   & button{
     padding: 10px 25px;
     font-size: 27px;
     font-family: 'KOTRAHOPE';
     background-color: #06afff;
     border: 1px solid #06afff;
     color: #fff;
     border-radius: 5px;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
     transition: 0.3s;
     &:hover{
       background-color: #fff;
       border: 1px solid #06afff;
       color: #06afff;
     }
   }
 }
`


export {MainContainer}