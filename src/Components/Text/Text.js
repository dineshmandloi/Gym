import React from "react";
import  './text.scss';


function Text(props){
    return(
    <>
        <p className={`text WhiteColor ${props.color}  ${props.fontSize}`} >{props.text}</p>
    </>
    )
}

export default Text;