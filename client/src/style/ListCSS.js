import styled from "@emotion/styled";

const ListDiv = styled.div`
margin-top: 2.5rem;
 & h3{
   margin-bottom: 2rem;
   font-size: 2.5rem;
   font-family: KOTRAHOPE;
   font-weight: 300;
   color: #4f4f4f;
 }
`
const ListItem = styled.div`
   width: 100%;
   height: 172px;
   margin-bottom: 2rem;
   border: 1px solid #e6e6e6;
   border-radius: 5px;
   padding: 15px;
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
     /* word-wrap: break-word; */
     overflow: hidden;
     text-overflow: ellipsis;
     white-space:nowrap;
   }
   transition: 0.3s;
   &:hover{
     transform: scale(1.01);
   }
`

export { ListDiv, ListItem } 
