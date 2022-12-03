import React, { useEffect, useState } from 'react'
import './profile.css'
import { useLocation } from 'react-router-dom'


import coverImg from '../../images_two/coverImage.jpg'
import profilePic from '../../images_two/photo.jpg'
import About from '../../components/about/About'
import Timeline from '../../components/timeline/Timeline'
import axios from 'axios'
const Profile = () => {
  const [user,setUser] = useState({});
  const content = "timeline";
  
  const location = useLocation();
  const path = location.pathname.split("/")[2];
 // var user;
 

  useEffect(()=>{
    
    const getUser = async()=>{
      console.log(path);
     // console.log("fires");
      //console.log(`/users/${path}`);
      const currentUser =  await axios.get(`/users/${path}`);
        
       // console.log("****");
        //.log(user);
      if(currentUser)
        setUser(currentUser.data);
        console.log("Check nowwww");
        console.log(currentUser);
    }
  
    getUser();
  },[]);

//console.log(user,path);
  return (
    <div className='profile'>
      <div className='topContainer'>
          <img className='coverImage' src = {coverImg} alt = "Noimage" />
          <p className='profileName'>Bhoomika Kumta</p>
          <div className='navigation'>
             <p className='navComponents first'>About</p>
             <p className='navComponents second'>Timeline</p>
          </div>
          <img src = {profilePic} alt = "" className='profileImage' />
      </div>
      
      <div className='bottomContainer'>
      {
        {
            "about":<About/>,
            "timeline":<Timeline username = {user.username}/>
        }[content]
      }
      </div>
    </div>
  )
}

export default Profile