import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Avatar from 'react-avatar'
import axios from 'axios'
import firebase from '../../firebase.js'

const MyPage = () => {
  
  const [currentImg ,setCurrentImg] = useState('')
  const user = useSelector((state)=>state.user)
  const navigate = useNavigate()

  useEffect(()=>{
    if(user.isLoading && !user.accessToken){
      navigate('/login')  
    }else{
      setCurrentImg(user.photoURL)
    }
  },[user])

  const ImageUpload = (e) => {
    let formData = new FormData()
    formData.append('file',(e.target.files[0]))
    axios.post('/api/user/profile/img', formData)
    .then(((res)=>{
      console.log(res)
      setCurrentImg(res.data.filepath)
    
    }))
  }

  const saveProfile = async(e) => {
  e.preventDefault()

try{
  await firebase.auth().currentUser.updateProfile({
      photoURL: currentImg,
    });
  }catch(err){
    return alert('프로필 저장에 실패하였습니다.')
  }
  let body = {
    photoURL: currentImg,
    uid:user.uid
  }
  axios.post('api/user/profile/update', body).then((res)=>{
    if(res.data.success){
      alert('프로필 저장 성공')
      window.location.reload()
    }
  })
}

  return (
    <div>
      <form style={{display:'flex', flexDirection: "column" ,alignItems: "center",marginTop: "2rem"}}>
        <label>
          <input type='file' accept='image/*' style={{display:'none'}} onChange={(e)=>ImageUpload(e)}/>
          <Avatar size='100' round={true} src={currentImg} style={{border:'1px solid #e6e6e6'}}/>

        </label>
        <button style={{marginTop: "1rem",fontSize:'16px',padding:'5px 10px',backgroundColor:'#fff' ,border:'1px solid #e6e6e6', borderRadius:'5px'}} onClick={(e)=>saveProfile(e)}>저장</button>
      </form>
    </div>
  )
}

export default MyPage