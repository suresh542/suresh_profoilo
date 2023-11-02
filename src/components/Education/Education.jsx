import './Education.scss';

const Education = () => {

    return (
        <>


            <div>

                <div className="row resume_main_wrapper">
                <div></div>

                    <div className="row education_skill_info_wrapper">
                        <h5><i class="fa-solid fa-laptop-code"></i> <span className='ms-3'>Experience</span></h5>

                        <div className="col-md-6 main_timeline_wrapper">
                            <div className="timeline">
                                <div className="left">
                                    <p>2022 - Present</p>
                                    <span>Vmoksha Technologies Pvt. Lmt. Bengaluru, karnataka</span>
                                </div>
                                <div className="divider">
                                </div>
                                <div className="right">
                                    <p>System Engineer</p>
                                    <p>I hold a B.Tech degree in Computer Science and Engineering, where I gained expertise in programming, software development, and computer systems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 main_timeline_wrapper">
                            <div className="timeline">
                                <div className="left">
                                    <p>2021 - 2022</p>
                                    <span>CMS IT services Pvt. Lmt. Bengaluru, karnataka</span>
                                </div>
                                <div className="divider">
                                </div>
                                <div className="right">
                                    <p>Support Engineer</p>
                                    <p>I hold a B.Tech degree in Computer Science and Engineering, where I gained expertise in programming, software development, and computer systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='underline'></div>
                    <div className="row education_skill_info_wrapper">
                        <h5> <i class="fa-solid fa-user-graduate"></i>  <span className='ms-3'>Education</span></h5>
                        <div className="col-md-6 main_timeline_wrapper">
                            <div className="timeline">
                                <div className="left">
                                    <p>2017 - 2021</p>
                                    <span>Adhiyamaan College of Engineering, Hosur</span>
                                </div>
                                <div className="divider">

                                </div>
                                <div className="right">
                                    <p>Bachelor of Engineering</p>
                                    <p>I hold a B.E degree in Electronics and Communication Engineering, where I gained expertise in programming, software development, and computer systems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 main_timeline_wrapper">
                            <div className="timeline">
                                <div className="left">
                                    <p>2016 - 2017</p>
                                    <span>Bharath Matriculation Hr Sec School, Krishnagiri</span>
                                </div>
                                <div className="divider">

                                </div>
                                <div className="right">
                                    <p>HSC</p>
                                    <p>I hold a B.E degree in Electronics and Communication Engineering, where I gained expertise in programming, software development, and computer systems.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6 main_timeline_wrapper">
                            <div className="timeline">
                                <div className="left">
                                    <p>2016 - 2017</p>
                                    <span>Bharath Matriculation Hr Sec School, Krishnagiri</span>
                                </div>
                                <div className="divider">

                                </div>
                                <div className="right">
                                    <p>HSC</p>
                                    <p>I hold a B.Tech degree in Computer Science and Engineering, where I gained expertise in programming, software development, and computer systems.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Education