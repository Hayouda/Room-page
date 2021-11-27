import React from 'react';
import aboutDark from '../assets/room-homepage-master/images/image-about-dark.jpg'
import aboutLight from '../assets/room-homepage-master/images/image-about-light.jpg' 
import './css/hero.css'

const Hero = () => {
    return (
        <div className="hero-section">
            <figure><img src={aboutDark} alt="" /></figure>
            <div>
            <h2>About our funiture</h2>
                <p>Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and whatinspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <figure><img src={aboutLight} alt="" /></figure>
        </div>
    )
}

export default Hero