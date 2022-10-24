import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { loginUser, clearUser } from './Reducer/userSlice'
import firebase from "./firebase.js";

import Header from "./components/Header";
import Login from "./components/user/Login";
import Post from "./components/post/Post";
import List from "./components/List";
import Detail from "./Detail";
import Edit from "./components/post/Edit";
import Register from "./components/user/Register";
import GlobalStyle from "./style/GlobalStyle";
import {Routes,Route} from 'react-router-dom'

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
         <Route path='/' element={<List/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/post" element={<Post/>}></Route>
         <Route path="/post/:postNum" element={<Detail/>}></Route>
         <Route path="/edit/:postNum" element={<Edit/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
