import React, { useState } from 'react';

import logo from '../assets/room-homepage-master/images/logo.svg'
import slideImage1 from '../assets/room-homepage-master/images/desktop-image-hero-1.jpg'
import slideImage2 from '../assets/room-homepage-master/images/desktop-image-hero-2.jpg'
import slideImage3 from '../assets/room-homepage-master/images/desktop-image-hero-3.jpg'
import iconArrow from '../assets/room-homepage-master/images/icon-arrow.svg'
import leftSlide from '../assets/room-homepage-master/images/icon-angle-left.svg'
import rightSlide from '../assets/room-homepage-master/images/icon-angle-right.svg'
import './css/header.css'
import toggleBar from '../assets/room-homepage-master/images/icon-hamburger.svg'
import closeBar from '../assets/room-homepage-master/images/icon-close.svg'
// import mobileHero from '../assets/room-homepage-master/images/mobile-image-hero.jpg'

const images = [slideImage1, slideImage2, slideImage3]


const Header = () => {

    const [toggleNav, setToggleNav] = useState('no-display')
    const [imageindex, setImageindex] = useState(0)

    function setNav () {
        if (toggleNav === 'no-display') {
            setToggleNav('display')
        } else {
            setToggleNav('no-display')
        }
    }

    function forwardImageSlide () {
        if (imageindex === 0) {
            setImageindex(1)
        }else if (imageindex === 1) {
            setImageindex(2)
        }else if (imageindex === 2) {
            setImageindex(0)
        }
    }

    function backwardImageSlide () {
        if (imageindex === 0) {
            setImageindex(2)
        }else if (imageindex === 2) {
            setImageindex(1)
        }else if (imageindex === 1) {
            setImageindex(0)
        }
    }


    return (
        <header>
            <div className="slider">
            <figure>
                <img src={images[imageindex]} alt="" />
            </figure>
            <div className="details">
                <h2>Discover Innovative ways to decorate</h2>
                <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love</p>
                <div><span>SHOP NOW</span><img src={iconArrow} alt="" /></div>
                <div className="slide-icons">
                    <figure onClick={backwardImageSlide}><img src={leftSlide} alt="" /></figure>
                    <figure onClick={forwardImageSlide}><img src={rightSlide} alt="" /></figure>
                </div>
            </div>
                
            </div>
            <nav className={`${toggleNav}`}>
                <figure onClick={setNav}>
                    {toggleNav === 'display' && <img src={closeBar} alt="" />}
                    {toggleNav === 'no-display' && <img src={toggleBar} alt="" />}
                </figure>
                <div><img src={logo} alt="" /></div>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </nav>
            
        </header>
    )
}

export default Header