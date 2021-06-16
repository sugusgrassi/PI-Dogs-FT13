import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDogDetail } from '../../actions/index';

function Dog(props) {
    console.log(props.match.params.id)

    useEffect(()=>{
        const dogId = props.match.params.id;
        props.getDogDetail(dogId)
    }, [])
    console.log(props.dogDetail)

    return (
        <div>
            Dog detail
            {/* si el props esta definido como undefined agregar un cargando */}
            {props.dogDetail.name ? (
            <ul>
            <img src={props.dogDetail.image} alt={props.dogDetail.name} />
            <li>{props.dogDetail.name}</li>
            <li>{props.dogDetail.temperament}</li>
            <li>height:{props.dogDetail.height ? (
                props.dogDetail.height) : (
            <span>Cargando...</span>
            )} </li>
            <li>weight: {props.dogDetail.weight} </li>
            <li>life_span: {props.dogDetail.life_span} </li>
            </ul>
            ) : (
            <h4>Cargando...</h4>
            )}
        </div>
    )
}

function mapStateToProps(state) {
    return {
      dogDetail: state.dogDetail
    };
  }

export default connect(
    mapStateToProps,
    {getDogDetail}
  )(Dog);
