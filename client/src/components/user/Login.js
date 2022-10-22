import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { LoginContainer,LoginInner } from '../../style/LoginCSS'

const Login = () => {
  const navigate = useNavigate()
  const [userInfo,setUserInfo] = useState({
    email:'',
    pw:'',
  })
  const handleInputValue = (key) => (e) => {
    setUserInfo({...userInfo,[key]: e.target.value})
  }

  return (
    <LoginContainer>
      <LoginInner>
      <form>
        <label >이메일</label>
        <input placeholder='이메일 기입해주세요!' type='email' onChange={handleInputValue('email')}></input>
        <label>비밀번호</label>
        <input placeholder='패스워드 기입해주세요!' autoComplete='on' type='password' onChange={handleInputValue('pw')}></input>
        <button>로그인</button>
        <button onClick={()=>{navigate('/register')}}>회원가입</button>
      </form>
      </LoginInner>
    </LoginContainer>
  )
}

export default Login