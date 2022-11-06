import React,{useState} from 'react'
import './header.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {

  return (
    <div className='header'>
            <div className="carousel-wrapper">
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
        </div>
    </div>
  )
}

export default Header
