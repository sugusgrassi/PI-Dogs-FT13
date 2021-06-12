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
        <div style={{position: "absolute", backgroundColor: "#aaa", width: "100%", height: "100%"}}>
        <Link to='/dogs'>
            <button > Enter
            </button>
        </Link>
        </div>
    )
}

export default connect(
    null,
    {getDogs}
  )(Landing);