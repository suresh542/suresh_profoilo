import './Resume.scss';

const Resume = () => {

    return (
        <>
            <div className="row resume_main_wrapper">
                <div className="row education_skill_info_wrapper">
                    <h5>Education</h5>

                    <div className="col-md-6 main_timeline_wrapper">
                        <div className="timeline">
                            <div className="left">
                                <p>2008</p>
                                <span>Ranchi University, Ranchi</span>
                                
                            </div>
                            <div className="divider">

                            </div>
                            <div className="right">
                                <p>Bachelor of Technology</p>
                                <p>I hold a B.Tech degree in Computer Science and Engineering, where I gained expertise in programming, software development, and computer systems.</p>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>

                <div className="row education_skill_info_wrapper">
                    <h5>Experience</h5>

                    <div className="col-md-6 main_timeline_wrapper">
                        <div className="timeline">
                            <div className="left">
                                <p>2022 - Present</p>
                                <span>Vmoksha Technologies Pvt. Lmt.</span>
                                
                            </div>
                            <div className="divider">

                            </div>
                            <div className="right">
                                <p>System Engineer Traniee</p>
                                <p>I hold a B.Tech degree in Computer Science and Engineering, where I gained expertise in programming, software development, and computer systems.</p>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Resume