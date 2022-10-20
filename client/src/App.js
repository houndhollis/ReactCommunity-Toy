import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Post from "./components/Post";
import List from "./components/List";
import Detail from "./Detail";
import Edit from "./components/Edit";
import GlobalStyle from "./style/GlobalStyle";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <GlobalStyle/> 
     <Header/>
       <Routes>
         <Route path='/' element={<List/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/post" element={<Post/>}></Route>
         <Route path="/post/:postNum" element={<Detail/>}></Route>
         <Route path="/edit/:postNum" element={<Edit/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
