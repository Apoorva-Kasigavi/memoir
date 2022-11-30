import React,{useState} from 'react'
import './header.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import { Carousel } from 'react-responsive-carousel';
import motion from '../images/waves.mp4'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {
    // document.querySelector('video').playbackRate = 1;
  return (
    <div className='header'>
            {/* <div className="carousel-wrapper">
            <Carousel className='carousel' infiniteLoop  autoPlay showThumbs="false">
                <div className='carouselImageContainer'>
                    <img className="carousalImage" alt="" src={img1} height="550px" width="500px"/>
                     <span className='carousalImageHeading'>Welcome To KLE Technological University</span>
                </div>
                <div className='carouselImageContainer'>
                    <img className="carousalImage" alt="" src={img2}  height="550px" width="500px"/>
                </div>
                <div className='carouselImageContainer'>
                    <img className="carousalImage" alt="" src={img3}  height="550px" width="500px"/>
                </div>
            </Carousel>
        </div> */}
        <div class="hero-media" id="hero-media">
        <video class="hero-media-asset is-visible" width = "100%" height="500px" autoPlay muted loop
        playsinline
        data-hero-video>

{/* "https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" */}
      <source src={motion} type="video/mp4"/>
     </video>
     
     </div>

     <h1 className='quote'>To Blog is to Share, to Connect, to Create and to Inspire</h1>
    </div>
  )
}

export default Header
