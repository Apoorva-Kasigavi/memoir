import React from 'react'
import SinglePost from '../../components/singlePost/SinglePost.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import './single.css'
const Single = () => {
  return (
    <div className='single'>
      <SinglePost />
      <Sidebar/>
    </div>
  )
}

export default Single
