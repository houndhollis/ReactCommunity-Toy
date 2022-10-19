import React,{useEffect} from 'react'
import axios from 'axios';

const Header = () => {

 useEffect(()=>{ 
  axios.post('/api/test')
   .then((res)=>{
     console.log(res)
   })
   .catch((err)=>{
     console.log(err)
   })
 },[])

  return (
    <div>Header</div>
  )
}

export default Header