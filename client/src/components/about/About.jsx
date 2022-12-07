import React from 'react'
import './about.css'
const About = ({user}) => {
  console.log("new user her");
  console.log(user);
  return (
    <div className='about'>
      <p className='desc' >{user.about}</p>
      <hr className='seperator'></hr>
      <p className='contactMe'>Contact Me</p>
    
      <ul className='contactList'>
        <li className='contactListItem'><i style = {{fontSize:"20px"}}class="fa fa-regular fa-envelope"></i> <a className = "link"href = {`mailto: ${user.email}`}>{user.email}</a></li>
       
      </ul>
    </div>
  )
}

export default About