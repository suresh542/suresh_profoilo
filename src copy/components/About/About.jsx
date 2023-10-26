
import './About.scss'
import Work from './sub_component/Work'
import workData from './data/workData'
import testimonialsData from './data/Testimonials_data';
import Testimonial from './sub_component/Testimonial';
const About = () => {

    return (
        <>
            <div className="row about">
                <h1>About <span className='blueFont back_shadow'>Me</span></h1>
                <div className="row about_info">
                    <div className="col-md-6 about_decription">
                        <p>
                            Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.
                        </p>
                    </div>
                    <div className="col-md-6 about_basic_description">
                        <p><span className='blueFont'>Age</span > 32</p>
                        <p><span className='blueFont'>Residence</span> USA</p>
                        <p><span className='blueFont'>Address</span> 88 Some Street, Some Town</p>
                        <p><span className='blueFont'>e-mail</span> email@example.com</p>
                        <p><span className='blueFont'>Phone</span> +0123 123 456 789</p>
                    </div>


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

                <div className="row testimonials">
                    <h4 className='back_shadow'>Testimonials</h4>

                    <div className="row testimonial_wraper">

                        {/* <div className="testimonial">
                            <img src="https://lmpixels.com/demo/breezycv/dark/1/img/testimonials/testimonial-1.jpg" alt="" className="img-fluid testimonial_profile" />
                            <p className="testimonial_content">Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                            <div className="testimonial_author">
                                <p className="author_name">Julia Hickman</p>
                                <p className="company">Omni Source</p>
                            </div>

                            <i className="fas fa-quote-right"></i>
                        </div> */}

                        {
                            testimonialsData.map(data => (
                                <Testimonial data={data} key={data.id} />

                            ))
                        }
                    </div>
                </div>







            </div>
        </>
    );
};

export default About