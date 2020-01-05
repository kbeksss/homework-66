import React from 'react';
import './Backdrop.css';
import Spinner from "../Spinner/Spinner";

const Backdrop = props => {
    return(
        props.show ? <div className="Backdrop" onClick={props.onClick}>{props.loading && <Spinner/>}</div> : null
    );
};


export default Backdrop;
