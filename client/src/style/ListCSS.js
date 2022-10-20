import styled from "@emotion/styled";

const ListDiv = styled.div`
max-width: 1100px;
margin: 0 auto;
padding: 0 3%;
margin-top: 3rem;
 & h3{
   margin-bottom: 20px;
   font-size: 2rem;
 }
`
const ListItem = styled.div`
   margin-bottom: 1.5rem;
   border: 1px solid #06afff;
   border-radius: 5px;
   padding: 10px;
   & p {
     margin-bottom: 1rem;
     font-size: 16px;
     font-weight: 600;
   }
   & span{
     font-size: 14px;
     color: #3e3e3e;
     font-weight: 500;
   }
`

export { ListDiv, ListItem } 
