import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Context } from "../../context/Context.js";
import { getUser } from "../../controllers/UserRequests.js";

import './Conversation.css'
const Conversation = ({ data, currentUser, online }) => {
  const PF = "http://localhost:5000/images/";
  const [userData, setUserData] = useState(null)
  const {user,dispatch} = useContext(Context);

  useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser)
    console.log(userId);
    const getUserData = async ()=> {
      try
      {
          const {data} =await getUser(userId);
          console.log(data);
         setUserData(data)
         dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, [])
  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={userData?.profilePic? PF + userData.profilePic : PF + "defaultProfile.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{fontSize: '1rem' , fontWeight:"600"}}>
            <span>{userData?.username} </span>
            <span style={{color: online?"#51e200":"",fontWeight:"400",fontSize: '0.8rem'}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;