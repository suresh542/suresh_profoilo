
const Testimonial = (props) => {
    const data = props.data;
    return (
        <div className="testimonial">
            <img src= { data.profile_pic } alt="profile" className="img-fluid testimonial_profile" />
            <p className="testimonial_content">{ data.review }</p>
            <div className="testimonial_author">
                <p className="author_name">{ data.name }</p>
                <p className="company">{ data.company }</p>
            </div>

            <i className="fas fa-quote-right"></i>
        </div>
    )
}

export default Testimonial