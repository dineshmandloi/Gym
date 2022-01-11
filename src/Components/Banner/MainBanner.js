// import  Button  from "../../Button/Button";
import React from "react";
import Heading from "../Heading/Heading";
import Styles from './mainbanner.module.scss';
import  Button  from "../Button/Button";

const MainBanner = (props) => {
    return (
        <>
            <div className={`${Styles.main_banner} `}>
                
                <div className={Styles.bannerText}>
                        <Heading headingText='WORK HARDER, GET STRONGER' color="whiteColor" fontWeight="fontWeight_800"   headingType="h6"/>
                        <Heading headingText='EASY WITH OUR' color="whiteColor"  fontSize="xxl" headingType="h1" headingColor="GYM"/>
                        <Button btnText="become a member" padding="pad_banner_btn"/>
                </div>
            </div>
        </>
    )
}

export default MainBanner;
