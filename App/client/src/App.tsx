import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import {Routes,Route} from 'react-router-dom'
import GlobalStyle from "./style/GlobalStyle";
import { loginUser, clearUser } from './Reducer/userSlice'
import firebase from "./firebase";
import MyPage from "./components/user/MyPage";
import PostArea from "./components/post/PostArea";
import Header from "./components/Header";
import Login from "./components/user/Login";
import Post from "./components/post/Post";
import MainPage from "./components/MainPage";
import Edit from "./components/post/Edit";
import Register from "./components/user/Register";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
   firebase.auth().onAuthStateChanged((userInfo)=>{
     if(userInfo !== null){
       dispatch(loginUser(userInfo.multiFactor.user))
     }else{
       dispatch(clearUser())
     }
   })
  },[])


  return (
    <div>
     <GlobalStyle/> 
     <Header/>
       <Routes>
         <Route path='/' element={<MainPage/>}></Route>
         <Route path="/post" element={<Post/>}></Route>
         <Route path="/post/:postNum" element={<PostArea/>}></Route>
         <Route path="/edit/:postNum" element={<Edit/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/mypage" element={<MyPage/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
