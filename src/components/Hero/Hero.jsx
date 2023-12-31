import './Hero.scss'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import mainProflie from "../../image/main_Profile.png"
import resume from "../../resume/Suresh's_Resume.pdf"
// import 'animate.css';
const Hero = (props) => {

    const [randomAimate, setRandomAnimate] = useState('col-md-8 long_info');

    const generateRandomAimate = () => {
        const animationArray = ['animate__fadeInDownBig', 'animate__fadeInTopLeft', 'animate__flip', 'animate__zoomInRight', 'animate__rotateIn']
        const randomIndex = Math.floor(Math.random() * animationArray.length);
        const randomAnimationClass = "col-md-8 animate__animated long_info " + animationArray[randomIndex];
        setRandomAnimate(randomAnimationClass);
    };


    // const long_info = props;
    return (

        <div className="container-fluid parrent_wrapper" id='mainPageBg'>
            <div className="container-fluid parrent_wrapper">
                <div className="container hero_view_wrapper">
                    <div className="row main_wrapper">
                        <div className="col-md-4 sort_info">
                            <div className="myInfo">
                                <img src={mainProflie} alt="" className="img-fluid" id='profile' />
                                <h1 className="name">Suresh Kumar R</h1>
                                <p className="designation">UI/UX Developer</p>
                                <div className="social_media_group">
                                    <a href="https://github.com/suresh542" target='_blank' rel="noreferrer"> <img alt="Free Github Logo Icon" className='git' width="256" src="https://cdn.iconscout.com/icon/free/png-256/free-github-87-437377.png?f=webp&amp;w=256" srcset="https://cdn.iconscout.com/icon/free/png-256/free-github-87-437377.png?f=webp&amp;w=256 1x, https://cdn.iconscout.com/icon/free/png-256/free-github-87-437377.png?f=webp&amp;w=512 2x"></img></a>
                                    <a href="https://www.linkedin.com/in/suresh-kumar-9859831a7/" target='_blank' rel="noreferrer" id='linkedIcons'><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a href="facebook" target='_blank' rel="noreferrer"><i class="fa-brands fa-facebook-f"></i></a>

                                </div>
                                <div className="download_resume">
                                    <a href={resume} target='_blank' rel="noreferrer"><button className='mybtn'>Download CV</button></a>
                                </div>
                                <p className="copyrigth">
                                    @2023 All rights reserved <br /> Suresh Kumar R.
                                </p>
                            </div>
                        </div>
                        <div className={randomAimate}>
                            {props.long_info}
                        </div>

                        <div className="navigation ">
                            <ul>
                                <li onClick={generateRandomAimate}> <Link className='link ' to="/"><i className="fa-solid fa-house"></i></Link></li>
                                <li onClick={generateRandomAimate}> <Link className='link ' to="/about"><i className="fa-solid fa-user"></i></Link></li>
                                <li onClick={generateRandomAimate}> <Link className='link ' to="/Education"><i className="fa-solid fa-graduation-cap"></i></Link></li>
                            </ul>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero