import React from "react";
import Header from "../Header/Header";
import HomeProfile from "../assets/HomeProfile.png"
import profile1 from "../assets/Profile/1.jpg"
import profile2 from "../assets/Profile/2.jpg"
import profile3 from "../assets/Profile/3.jpg"
import profile4 from "../assets/Profile/4.jpg"
import profile5 from "../assets/Profile/5.jpg"
import icons1 from "../assets/Icons/gmail.png"
import icons2 from "../assets/Icons/facebook.png"
import icons3 from "../assets/Icons/github.png"
import icons4 from "../assets/Icons/linked.png"
import icons5 from "../assets/Icons/dev.png"
import icons6 from "../assets/Icons/frontendMentor.svg"
import Name from "../assets/Name.png"
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function HomePage() {

  const profileImage = [profile1,profile2,profile3,profile4,profile5 ]
  const socialMediaicons = [
      {
        "icons":icons1,
        "iconsLinks":"mailto:rsureshrajamanicakm@gmail.com"
      },
      {
        "icons":icons2,
        "iconsLinks":"https://www.facebook.com/profile.php?id=100007137197334"
      },
      {
        "icons":icons3,
        "iconsLinks":"https://github.com/suresh542"
      },
      {
        "icons":icons4,
        "iconsLinks":"https://www.linkedin.com/in/suresh-kumar-9859831a7/"
      },
      {
        "icons":icons5,
        "iconsLinks":"https://dev.to/suresh_rajamanickam_cd1f7"
      },  
      {
        "icons":icons6,
        "iconsLinks":"https://www.frontendmentor.io/profile/suresh542"
      },  
    ]

  const [myName] = useTypewriter({
    words:["Suresh Kumar R", "சுரேஷ் குமார் ரா","ಸುರೇಶ್ ಕುಮಾರ್ ರಾ"],
    loop:0,
    typeSpeed:200,
    deleteSpeed:150,
    delaySpeed:3000,
  })


  return (
    <div className="bg-black h-screen">
      {/* <section >
       <Header/>
      </section> */}
        <section className=" flex justify-center ">
            <div className="flex justify-center  w-full md:w-3/4 lg:w-3/5 h-3/5 md:h-1/2 lg:h-3/4" >
              <div className=" flex overflow-hidden justify-center " >
                    {profileImage.map((img)=> (
                        <img src={img} alt="cards" className="object-cover mt-12 grayscale hover:grayscale-0 w-1/6 hover:w-1/5  ease-out duration-500 px-1 h-60 md:h-72 lg:h-96"   />
                      )
                    )} 
              </div>
             
            </div>
        </section>
        <section>
        {/* <div className="flex justify-center center">
                    <img src={Name} alt="" width={"800px"} />
              </div>  */}
            <div className="font-rancho text-white  text-4xl md:text-6xl lg:text-7xl flex justify-center align-middle mt-10">
              {/* {myName} */} suresh kumar R
              <Cursor/>
            </div>
        </section>

          <section>
                <div className="font-Farro text-white  text-lg md:text-xl lg:text-2xl flex justify-center mt-10">
                      Web Developer, &nbsp; Desinger, &nbsp; AWS Clouds &nbsp;  and &nbsp;  Devops
                </div>
                <div className="mt-10 flex justify-center  space-x-7 md:space-x-12 lg:space-x-16 "> 
                    {socialMediaicons.map((ico)=>(
                      <a href={ico.iconsLinks} target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                     <img src={ico.icons} alt="" width={"30px"} height={"auto"} />
                      </a>
                    ))}
                </div>
          </section>


      {/* <section className="h-screen bg-gradient-to-r from-sky-200 to-indigo-200">
          <div className="absolute">
            suresh kumar R
          </div>
          
          <div className="flex justify-center ps-44">
            <img className="center" src={HomeProfile} alt="" style={{width:"400px",height:"auto"}} />
          </div>
      </section> */}
    </div>
  );
}