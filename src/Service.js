const Service = (s_props) => {
    return (
        <>
            <div className="service-section">
                <div className="service-border">
                    <div className="service-image-section">
                        <img src={s_props.s_image} alt="" />
                    </div>
                    <div className="service-image-heading">
                        <h5>{s_props.s_heading}</h5>
                        <div className="service-content">
                            <p>{s_props.s_content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;