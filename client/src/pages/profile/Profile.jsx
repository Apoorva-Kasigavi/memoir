import React, { useEffect, useState, useContext } from 'react'
import './profile.css'
import { Routes, useLocation, Link } from 'react-router-dom'
import {Context} from "../../context/Context.js"
import coverImg from '../../images_two/coverImage.jpg'
import profilePic from '../../images_two/defaultProfile.png'
import About from '../../components/about/About'
import Timeline from '../../components/timeline/Timeline'
import axios from 'axios'


const Profile = () => {
  const PF = "http://localhost:5000/images/"
  const {user,dispatch} = useContext(Context);
  const [inbox, setInbox] = useState("");



  const handelMessageClick = async() =>{
     
    try{
            const existingChat = await axios.get(`/chat/find/${user._id}/${currentUser._id}`)
            console.log(existingChat);
            if(existingChat.data === null)
            {
              const newChatDetails = {
                senderId : user._id,
                receiverId : currentUser._id
              }
              const newChat = await axios.post("/chat", newChatDetails);
            }
            else{
               console.log(existingChat);
            }
            
    }catch(err){
           console.log(err)
    }
       setInbox("Check your Inbox");
   
  }



  const [currentUser,setCurrentUser] = useState({});
  const [content,setContent] = useState("about");
 
  
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
          <img className='coverImage' src = {currentUser.coverImage?PF  + currentUser.coverImage: coverImg} alt = "Noimage" />
          <div className='firstPart'>
          <p className='profileName'>{currentUser.username}</p>
          {user.username === currentUser.username ?(<Link to={`/settings`} ><i
                    className="singlePostIconProfilePage far fa-edit"
                  
                  ></i></Link>):  (<div><div onClick ={handelMessageClick} ><i class="singlePostIconMessage fa-regular fa-envelope"></i></div>
                                  <span>{inbox}</span></div>) }
          </div>
          <div className='navigation'>
             <p className='navComponents first' onClick={()=>{setContent("about")}}>About</p>
             <p className='navComponents second' onClick={()=>{setContent("timeline")}}>Timeline</p>
          </div>
          <img src = {currentUser.profilePic?PF  + currentUser.profilePic: profilePic} alt = "" className='profileImage' />
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