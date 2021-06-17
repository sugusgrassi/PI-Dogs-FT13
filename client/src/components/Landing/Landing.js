import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDogs } from '../../actions/index';
import dogvideo from "../video/dogvideo.mp4";

const Landing = ({getDogs}) => {

    let str = "";

    useEffect(() => {
    getDogs(str)
    // props.paginate(1)
    }, []);

    return (
        // <div style={{position: "absolute", backgroundImage: "url(https://www.thesun.co.uk/wp-content/uploads/2016/07/nintchdbpict000254504787-e1469489555217.jpg)", backgroundColor: "#aaa",  width: "100%", height: "100%"}}>
        
        // https://www.youtube.com/watch?v=PYFltdGJ-Rc
        <div>
        <video controls autoPlay loop muted
            style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)"}}    
        >
            <source src={dogvideo} type="video/mp4"/>
        </video>

        <Link to='/dogs'>
            <button style={{position: "absolute", margin: "0 auto", top: "50%", fontSize: "2rem"}}> Enter
            </button>
        </Link>
        </div>
    )
}

export default connect(
    null,
    {getDogs}
  )(Landing);