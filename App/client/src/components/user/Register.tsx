import React,{useState} from 'react'
import { RegisterContainer,RegisterInner } from '../../style/RegisterCSS'
import firebase from '../../firebase'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const navigate = useNavigate()
  const [nameCheck , setNameCheck] = useState(false)
  const [Flag, setFlag] = useState(false);
  const [nameInfo,setNameInfo] = useState('')
  // const [userInfo,setUserInfo] = useState({
  //   name:'',
  //   email:'',
  //   pw:'',
  //   pwCheck:''
  // })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  // const handleInputValue = (key) => (e) => {
  //   setUserInfo({...userInfo,[key]: e.target.value})
  // }

  const NameCheckFun = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault()
    if(!name){
    return alert('닉네임을 입력해주세요.')
    }
    let body = {
      displayName : name,
    }
    axios.post('/api/user/namecheck',body).then((res)=>{
      if(res.data.success){
        if(res.data.check){
          setNameCheck(true)
          setNameInfo('사용 가능한 닉네임입니다.')
        }else{
          setNameInfo('사용 불가능한 닉네임 입니다.')
        }
      }
    })
  } 

  const OnRegister = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    setFlag(true);
    e.preventDefault()
    if(!(name && email && pw && pwConfirm)){
     return alert('모든 값을 넣어주세요')
    }
    if(pw.length < 8){
     return alert('비밀번호는 8자리 이상이여야 합니다.')
    }
    if(pw !== pwConfirm){
     return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
    if(!nameCheck){
      return alert('닉네임 중복 검사를 해주세요!')
    }
    
    const createdUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, pw);

  await createdUser?.user?.updateProfile({
    displayName: name,
    photoURL:
      "https://kr.object.ncloudstorage.com/react-community/user/profile.png",
  });

  const body = {
    email: createdUser?.user?.multiFactor.user.email,
    displayName: createdUser?.user?.multiFactor.user.displayName,
    uid: createdUser?.user?.multiFactor.user.uid,
    photoURL:
      "https://kr.object.ncloudstorage.com/react-community/user/profile.png",
  };

    axios.post('/api/user/register',body).then((res)=>{
      setFlag(false);
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
        <input placeholder='닉네임 기입해주세요!' type='text' onChange={(e) => setName(e.currentTarget.value)} disabled={nameCheck}></input>
        {nameInfo}
        <button onClick={(e)=>NameCheckFun(e)}>닉네임 중복 검사</button>
        <label >이메일</label>
        <input placeholder='이메일 기입해주세요!' type='text' onChange={(e) => setEmail(e.currentTarget.value)}></input>
        <label>비밀번호</label>
        <input minLength={8} placeholder='비밀번호 기입해주세요!' autoComplete='on' type='password' onChange={(e) => setPw(e.currentTarget.value)}></input>
        <label>비밀번호 확인</label>
        <input minLength={8} placeholder='비밀번호 확인입니다.' autoComplete='on' type='password' onChange={(e) => setPwConfirm(e.currentTarget.value)}></input>
        <button disabled={Flag} onClick={(e)=>OnRegister(e)}>회원가입</button>
      </form>
      </RegisterInner>
    </RegisterContainer>
  )
}

export default Register