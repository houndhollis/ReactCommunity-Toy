import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { LoginContainer,LoginInner } from '../../style/LoginCSS'

import firebase from '../../firebase'

interface ErrorType {
  code: string;
}

const Login = () => {
  const navigate = useNavigate()
  const [userInfo,setUserInfo] = useState({
    email:'',
    pw:'',
  })
  const handleInputValue = (key) => (e) => {
    setUserInfo({...userInfo,[key]: e.target.value})
  }
  
  const onLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,) => {
  const {email,pw} = userInfo
  e.preventDefault()
  if(!(email && pw)){
   return alert('빈칸을 채워주세요')
  }try{
    await firebase.auth().signInWithEmailAndPassword(email,pw)
    navigate('/')
  }catch(error:unknown){
    const err = error as ErrorType
   if(err.code === 'auth/user-not-found'){
     alert('존재하지 않는 이메일 입니다.')
   }else if(err.code === 'auth/wrong-password'){
     alert('비밀번호가 일치하지 않습니다.')
   }else{
     alert('로그인이 실패하였습니다.')
   }
 }
}
   
  return (
    <LoginContainer>
      <LoginInner>
      <form>
        <label >이메일</label>
        <input placeholder='이메일 기입해주세요!' type='email' onChange={handleInputValue('email')}></input>
        <label>비밀번호</label>
        <input placeholder='패스워드 기입해주세요!' autoComplete='on' type='password' onChange={handleInputValue('pw')}></input>
        <button onClick={(e)=>onLogin(e)}>로그인</button>
        <button onClick={()=>{navigate('/register')}}>회원가입</button>
      </form>
      </LoginInner>
    </LoginContainer>
  )
}

export default Login