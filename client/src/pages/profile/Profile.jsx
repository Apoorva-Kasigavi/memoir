import React from 'react'
import './profile.css'


import coverImg from '../../images_two/coverImage.jpg'
import profilePic from '../../images_two/photo.jpg'
import About from '../../components/about/About'
import Timeline from '../../components/timeline/Timeline'
const Profile = () => {
  const content = "about";
  console.log(__dirname);
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
            "timeline":<Timeline/>
        }[content]
      }
      </div>
    </div>
  )
}

export default Profile
