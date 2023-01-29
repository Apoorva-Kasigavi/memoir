import React , {useContext} from 'react'
import { Link } from "react-router-dom";
import {Logout} from "../../context/Action.js"
import './topbar.css'
import {Context} from '../../context/Context.js'
import defaultProfile from '../../images_two/defaultProfile.png'

const Topbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch(Logout());
  };
  const PF = "http://localhost:5000/images/"
  return (
    
    <div className='topbar'>
      <div className='topLeft'>
           <h1><Link  className="linkLogo" exact to="/">
              Memoir
            </Link></h1>
      </div>

      <div className='topRight'>
         <ul className='topRightList'>
         {user && (<li className="topRightListItem1">
          <Link to={`/profile/${user.username}`}>
            <img className="topImg" src={user.profilePic?PF+user.profilePic:defaultProfile} alt="" />
          </Link></li>
        )}


         {user?<li className="topRightListItem" onClick={handleLogout}>
            Logout</li> : <li className='topRightListItem'><Link className="link" to="/login">
              Login
            </Link></li>}
   
            {user && (<li className="topRightListItem">
          <Link  className="link"  to="/chat">
            Inbox
          </Link></li>
        )} 
         <li className='topRightListItem'><Link className="link" to="/aboutUs">
              About Us
            </Link></li>
         <li className='topRightListItem'><Link className="link" to="/write">
              Write
            </Link></li>
            <li className='topRightListItem'><Link className="link" to="/">
              Home
            </Link></li>
            
           
         </ul>
      </div>
    </div>
  )
}

export default Topbar
