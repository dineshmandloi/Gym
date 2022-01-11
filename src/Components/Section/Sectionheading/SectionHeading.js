// import  Button  from "../../Button/Button";
import React from "react";
import Heading from "../../Heading/Heading";
import Styles from './section_heading.module.scss';
import Text from "../../Text/Text";

const SectionHeading = (props) => {
    return (
        <>
            <div className={`${Styles.section_heading} `}>
                <Heading headingType="h2" headingText={props.hText} fontSize="md" color={props.wColor} fontWeight="fontWeight_800" headingColor={props.hColor}/>
                <img src="line_dec.png" alt="line-dec-img"/>
               
                <Text text={props.pText}/>
            </div>
        </>
    )
}

export default SectionHeading;
