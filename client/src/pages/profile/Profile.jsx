import React, { useEffect, useState, useContext } from 'react'
import './profile.css'
import { Routes, useLocation } from 'react-router-dom'
import {Context} from "../../context/Context.js"
import coverImg from '../../images_two/coverImage.jpg'
import profilePic from '../../images_two/photo.jpg'
import About from '../../components/about/About'
import Timeline from '../../components/timeline/Timeline'
import axios from 'axios'
const Profile = () => {
  const {user,dispatch} = useContext(Context);

  const [username, setUsername] = useState("");



  const [currentUser,setCurrentUser] = useState({});
  const [content,setContent] = useState("about");
  const [update,setUpdateMode] = useState(false);
  
  const location = useLocation();
  const path = location.pathname.split("/")[2];
 // var user;
 

  useEffect(()=>{
  
    const getUser = async()=>{
        try{
          const currentUserTemp = await axios.get(`/users/username/${path}`);
          if(currentUserTemp)
          setCurrentUser(currentUserTemp.data[0]);
        }catch(err){

        }
    }
  
    getUser();
  },[path]);

  console.log("check user");
  console.log(currentUser)
  return (
    <div className='profile'>
      <div className='topContainer'>
          <img className='coverImage' src = {coverImg} alt = "Noimage" />
          <div className='firstPart'>
          <p className='profileName'>{currentUser.username}</p>
          {user.username === currentUser.username ?(<i
                    className="singlePostIconProfilePage far fa-edit"
                    onClick={()=>{setUpdateMode(true)}}
                  ></i>):<p></p>}
          </div>
          <div className='navigation'>
             <p className='navComponents first' onClick={()=>{setContent("about")}}>About</p>
             <p className='navComponents second' onClick={()=>{setContent("timeline")}}>Timeline</p>
          </div>
          <img src = {profilePic} alt = "" className='profileImage' />
      </div>
      
      <div className='bottomContainer'>
      {
        {
            "about":<About user = {currentUser}/>,
            "timeline":<Timeline />
        }[content]
       
      }
      </div>
    </div>
  )
}

export default Profile