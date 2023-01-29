import React,{useState} from 'react'
import './header.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import motion from '../headerVideo/waves.mp4'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {

  return (
    <div className='header'>

        <div class="hero-media" id="hero-media">
        <video class="hero-media-asset is-visible" width = "100%" height="550px" autoPlay muted loop
        playsinline
        data-hero-video>

      <source className='video' src={motion} type="video/mp4"/>
     </video>
     
     </div>

     <h1 className='quote'>To Blog is to Share, to Connect, to Create and to Inspire</h1>
    </div>
  )
}

export default Header
