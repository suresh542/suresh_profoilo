

const Work = (props) => {
    const data = props.data;

    return (
        <div className="col-md-5 work">
            <i className={data.work_icon_class + " blueFont"}></i>
            <p className="work_heading">{data.work}</p>
            <p className="work_description">
                {data.work_description}
            </p>
        </div>

    );
};

export default Work;