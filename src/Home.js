const Home = (props) => {
    return (
        <>
            {/* <h1>{props.name}</h1> 
            <span>{props.email}</span> */}

            {/* <p>{props.name} {props.email}</p> */}


            <div className="image-1">
                <div className="border">
                    <div className="image-section">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="content">
                        <h2>{props.content}</h2>
                        <div className="down">
                            <div className="icon">{props.icon}</div>
                            <div className="btn-section">
                                <button>
                                    <a href="#">{props.button}</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;