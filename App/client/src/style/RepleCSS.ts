import styled from '@emotion/styled'

const RepleListDiv = styled.div`
  margin-top: 1rem;
`;

const RepleContentDiv = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0 3%;
  height: 20vh;
  .postContent{
    padding: 0 5px 15px 5px;
    word-break: keep-all;
    overflow-wrap: break-word;
    margin-left: 10px;
    border-bottom: 1px solid #e6e6e6;
  }
  .userBox{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .userContainer{
      width: 90%;
      display: flex;
      align-items: center;
     margin-bottom: 1rem;
     padding-bottom: 5px;
     .userInfo{
      margin-top: 2px;
      margin-left: 5px;
      .author{
        font-size: 13px;
        font-weight: 700;
      }
      .time{
        font-size: 11px;
        color: #636363;
        font-weight: 500;
        margin-top: 5px;
      }
     }
    }
  }
    
    .modalControl {
      cursor: pointer;
      position: relative;
      span {
        user-select: none;
      }
      .modalDiv {
        position: absolute;
        top: 15px;
        right: 10px;
        width: 80px;
        height: 60px;
        overflow: hidden;
        padding: 10px;
        cursor: auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-between;
        align-items: center;

        background-color: whitesmoke;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03),
          0px 7.5px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        p {
          color: black;
          margin-bottom: 0px;
          cursor: pointer;
          &.delete {
            color: red;
          }
        }
      }
    }
  .time {
    font-size: 10px;
    margin-bottom: 5px;
    color: lightgrey;
  }
  p {
    margin-bottom: 0px;
    font-size: 14px;
  }

  .editForm{
    & input{
      
      width: 70%;
       padding: 10px 0;
       padding-left: 10px;
       padding-right: 25px;
       font-size: 16px;
       border: 1px solid #e1e1e1;
       border-radius: 5px;
       margin-right: 10px;
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
       border-radius: 5px;
       border: 1px solid #06afff;
       background-color: #06afff;
       color: #fff;
       font-weight: bold;
       margin-right: 10px;
       &:hover{
         border: 1px solid #06afff;
         color: #06afff;
         background-color: #fff;
       }
       @media screen and (max-width: 477px) {
         font-size: 13px;
       } 
     }
  }
`;

const RepleUploadContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 3%;
  height: 10vh;
  & form{
    display: flex;
    & input{
       width: 90%;
       padding: 10px 0;
       padding-left: 10px;
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
       width: 10%;
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
`

export { RepleListDiv ,RepleContentDiv ,RepleUploadContainer}