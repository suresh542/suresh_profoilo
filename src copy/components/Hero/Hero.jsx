import './Hero.scss'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const Hero = (props) => {

    const [randomAimate,setRandomAnimate] = useState('col-md-8 long_info');
    
    const generateRandomAimate = () => {
        const animationArray = ['animate__fadeInDownBig','animate__fadeInTopLeft','animate__flip','animate__zoomInRight','animate__rotateIn']
        const randomIndex = Math.floor(Math.random()*animationArray.length);
        const randomAnimationClass = "col-md-8 animate__animated long_info " + animationArray[randomIndex];
        setRandomAnimate(randomAnimationClass);
    };
  
    
    // const long_info = props;
    return (
        <>
     
        <div className="container-fluid parrent_wrapper">
            <div className="container hero_view_wrapper">
                <div className="row main_wrapper">
                    <div className="col-md-4 sort_info">
                        <div className="myInfo">
                            <img src="./public/images/main_photo.jpg" alt="" className="img-fluid" />
                            <h1 className="name">Kishore Kumar Mahto</h1>
                            <p className="designation">Software Engineer</p>
                            <div className="social_media_group">
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-github"></i></a>
                            </div>
                            <div className="download_resume">
                                <button className='mybtn'>Download CV</button>
                            </div>
                            <p className="copyrigth">
                                @2020 All rights reserved.
                            </p>
                        </div>
                    </div>
                    <div className={randomAimate}>
                        {props.long_info}

                        
                    </div>

                    <div className="navigation">
                        <ul>
                            <li onClick={generateRandomAimate}> <Link className='link'  to="/"><i  className="fa-solid fa-house"></i></Link></li>
                            <li onClick={generateRandomAimate}> <Link className='link'  to="/about"><i  className="fa-solid fa-user"></i></Link></li>
                            <li onClick={generateRandomAimate}> <Link  className='link' to="/resume"><i  className="fa-solid fa-graduation-cap"></i></Link></li>
                        </ul>
           
           
           
        </div>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero