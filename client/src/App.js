import Topbar from './components/topbar/Topbar.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Profile from './pages/profile/Profile.jsx';
import Settings from './pages/settings/Settings.jsx';
import Chat from './pages/chat/Chat.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';
import { useContext } from 'react';
import {Context} from "./context/Context.js"
import './App.css'
function App() {
  const {user} = useContext(Context);
 
  return (
    <div className="App">
    <BrowserRouter>
    <Topbar/>
 
       <Routes>
          <Route exact path ="/" element = {<Home/>}/>
          <Route  path ="/login" element = {user?<Home/>:<Login/>}/>
          <Route  path ="/register" element = {user?<Home/>:<Register/>}/>
          <Route path = "/post/:postid" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/profile/:id" element={user ? <Profile  /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />    
          <Route path="/chat" element={user ? <Chat /> : <Login />} />  
          <Route path="/aboutus" element={ <AboutUs />} />  
      </Routes>  
      
      </BrowserRouter>
    </div>
  );
}

export default App;
