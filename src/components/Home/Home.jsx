import './Home.scss'

const Home = () => {
    return (
        <>
            <div className="long_info_wrapper ">
                <h1 className="name_show">Suresh kumar R</h1>
                <p className="designation_show">Web Developer</p>
            </div>

           <div className='homeIcons text-white'>
           <i class="fa-brands fa-react " ></i>
           <i class="fa-brands fa-js"></i>
           <i class="fa-brands fa-css3-alt"></i>
           <i class="fa-brands fa-html5"></i>
           <i class="fa-brands fa-bootstrap"></i>
           <i class="fa-brands fa-aws"></i>
           <i class="fa-brands fa-ubuntu"></i>
           <i class="fa-brands fa-jenkins"></i>
           <i class="fa-brands fa-figma"></i>
           </div>
        </>
    );
};

export default Home;