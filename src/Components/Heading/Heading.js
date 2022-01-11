import React from "react";
import  './heading.scss';

const Heading = (props) =>{

    // const HeadingClass = props.fontSize === "xl"? 'xl': props.fontWeight === "bold" ? 'fontWeight' :props.fontStyle="italic"?'italic':'default'; 

    return(
        <>
            <props.headingType className={`heading ${props.fontWeight} ${props.color} ${props.fontSize}`} >{props.headingText} <span className="heading_color">{props.headingColor}</span></props.headingType>
        </>

    )
}

Heading.defaultProps = {
    headingText:'Lorem ipsum'
    
}
export default Heading;