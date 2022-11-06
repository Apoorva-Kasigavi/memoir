import React from 'react'
import './topbar.css'
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topLeft'>
           <h1>Memoir</h1>
      </div>

      <div className='topRight'>
         <ul className='topRightList'>
         <li className='topRightListItem'>Login</li>
         <li className='topRightListItem'>Contact</li>
         <li className='topRightListItem'>About</li>
         <li className='topRightListItem'>Categories</li>
         <li className='topRightListItem'>Write</li>
            <li className='topRightListItem'>Home</li>
            
            
           
            
           
         </ul>
      </div>
    </div>
  )
}

export default Topbar
