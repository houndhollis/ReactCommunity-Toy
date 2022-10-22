import React,{useState} from 'react'
import { RegisterContainer,RegisterInner } from '../../style/RegisterCSS'
import firebase from '../../firebase'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const [userInfo,setUserInfo] = useState({
    name:'',
    email:'',
    pw:'',
    pwCheck:''
  })
  const handleInputValue = (key) => (e) => {
    setUserInfo({...userInfo,[key]: e.target.value})
  }

  const OnRegister = async (e) =>{
    e.preventDefault()
    const {name,email,pw,pwCheck} = userInfo
    if(!(name && email && pw && pwCheck)){
      alert('모든 값을 넣어주세요')
    }
    if(pw !== pwCheck){
      alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
    let createdUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(email,pw);
    await createdUser.user.updateProfile({
      displayName: name,
    });
    
    let body = {
      email : createdUser.user.multiFactor.user.email,
      displayName : createdUser.user.multiFactor.user.displayName,
      uid : createdUser.user.multiFactor.user.uid
    };
    axios.post('/api/user/register',body).then((res)=>{
      if(res.data.success){
        navigate('/login')
      }else{
        alert('회원가입이 실패하였습니다.')
      }
    })
  }

  return (
    <RegisterContainer>
      <RegisterInner>
      <form>
        <label >닉네임</label>
        <input placeholder='닉네임 기입해주세요!' type='text' onChange={handleInputValue('name')}></input>
        <label >이메일</label>
        <input placeholder='이메일 기입해주세요!' type='text' onChange={handleInputValue('email')}></input>
        <label>비밀번호</label>
        <input placeholder='비밀번호 기입해주세요!' autoComplete='on' type='password' onChange={handleInputValue('pw')}></input>
        <label>비밀번호 확인</label>
        <input placeholder='비밀번호 확인입니다.' autoComplete='on' type='password' onChange={handleInputValue('pwCheck')}></input>
        <button onClick={(e)=>OnRegister(e)}>회원가입</button>
      </form>
      </RegisterInner>
    </RegisterContainer>
  )
}

export default Register