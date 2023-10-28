
import './About.scss'
import Work from './sub_component/Work'
import workData from './data/workData'

const About = () => {

    return (
        <>
            <div className="row about">
                <h1>About <span className='blueFont back_shadow'>Me</span></h1>
                <div className=" about_info">
                    <div className=" about_decription">
                        <p className='text-start'>
                            I am System Engineer with over 2.3 years of experience in the field,
                            driven by a relentless passion for technology and problem-solving. My journey
                            in the world of technology has allowed me to develop a deep understanding of
                            complex for software engineering, where I have honed my skills in developing and
                            optimizing intricate systems.
                            <br /> <br />
                            My proficiency extends to a range of programming languages, including ReactJs,
                            JavaScript, CSS, and HTML, and I have hands-on experience working with cutting-edge
                            technologies like AWS, Linux, and DevOps.
                            <br /> <br />
                            I thrive in dynamic and challenging environments, always seeking opportunities to
                            apply my problem-solving abilities and contribute to the success of my team. I believe
                            in the power of continuous learning and staying updated with the latest industry trends
                            and best practices.
                            <br /> <br />
                            I am now eager to embark on the next chapter of my career, leveraging my expertise
                            and enthusiasm for technology to make a meaningful impact in a dynamic team-oriented
                            setting. I am ready to take on new challenges, drive innovation, and deliver efficient
                            solutions that keep pace with the ever-evolving world of technology.
                        </p>
                    </div>
                </div>
                <div className=" about_basic_description text-start">
                    {/* <p><span className='blueFont'>Age </span > 32</p> */}
                    <p><span className='blueFont'>Age</span> 23</p>
                    <p><span className='blueFont'>Residence</span> India</p>
                    <p><span className='blueFont'>Address</span> Krishnagiri</p>
                    <p><span className='blueFont'>e-mail</span> rsureshrajamanickam@example.com</p>
                    <p><span className='blueFont'>Phone</span> +91 7598890324</p>
                </div>

                <div className="row what_i_do">
                    <h4 className='back_shadow'>What <span className='blueFont'>I Do</span></h4>
                    <div className="row work_wrapper">


                        {
                            workData.map(data => (
                                <Work data={data} key={data.id} />
                            ))
                        }

                    </div>

                </div>


            </div>
        </>
    );
};

export default About