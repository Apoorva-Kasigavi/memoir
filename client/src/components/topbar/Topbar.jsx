import React from 'react'
import { Link } from "react-router-dom";
import './topbar.css'
const Topbar = () => {
  const user = false;
  return (
    
    <div className='topbar'>
      <div className='topLeft'>
           <h1><Link  className="linkLogo" exact to="/">
              Memoir
            </Link></h1>
      </div>

      <div className='topRight'>
         <ul className='topRightList'>
         {user?<li className='topRightListItem'>
              Logout
            </li> :<li className='topRightListItem'><Link className="link" to="/login">
              Login
            </Link></li>}
         <li className='topRightListItem'><Link className="link" to="/contact">
              Contact
            </Link></li>
         <li className='topRightListItem'><Link className="link" to="/about">
              About
            </Link></li>
         <li className='topRightListItem'><Link className="link" to="/categories">
              Categories
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
