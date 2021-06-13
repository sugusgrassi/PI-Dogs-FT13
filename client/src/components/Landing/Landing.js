import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDogs } from '../../actions/index';

const Landing = ({getDogs}) => {

    let str = "";

    useEffect(() => {
    getDogs(str)
    // props.paginate(1)
    }, []);

    return (
        <div style={{position: "absolute", backgroundImage: "url(https://www.thesun.co.uk/wp-content/uploads/2016/07/nintchdbpict000254504787-e1469489555217.jpg)", backgroundColor: "#aaa",  width: "100%", height: "100%"}}>
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