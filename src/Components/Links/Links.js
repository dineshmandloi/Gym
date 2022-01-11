import React from "react";
import Styles from './links.scss';

const Links = (props) =>{
    return(
        <>
            <a href="#" className={`links ${props.color}`}>{props.linkText}</a>
        </>
    )
}

export default Links;