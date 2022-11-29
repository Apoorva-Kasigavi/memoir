import Topbar from './components/topbar/Topbar.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Profile from './pages/profile/Profile.jsx';
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
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/profile" element={user ? <Profile /> : <Register />} />
      </Routes>  
      {/* <Profile/>  */}
      
      </BrowserRouter>
    </div>
  );
}

export default App;
