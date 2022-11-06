import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header.jsx'
import Posts from '../../components/posts/Posts.jsx'
import Topbar from '../../components/topbar/Topbar'
import './home.css'
const Home = () => {
  return (
    <>
    
      <Header />
      
      
      <div className="home">
      
      <Posts/>
      <Sidebar/>
    </div>
     
    </>
  )
}

export default Home
