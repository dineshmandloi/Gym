
import React from "react";
import Heading from "../../Heading/Heading";
import Styles from './secbanner.module.scss';
import  Button  from "../../Button/Button";
import Text from "../../Text/Text";

const SecBanner = (props) => {
    return (
        <>
            <div className={`${Styles.section_banner} `}>
                
                <div className={Styles.section_bannerText}>
                    <div className={Styles.banner_heading}>
                        <Heading headingText="don't" headingColor="think" color="whiteColor"  fontSize="lg_39" headingType="h2" />
                        <Heading headingText="," color="whiteColor"  fontSize="lg_39" headingType="h2" />
                        <Heading headingText="begin" headingColor="today" color="whiteColor"  fontSize="lg_39" headingType="h2" />
                        <Heading headingText="!" color="whiteColor"  fontSize="lg_39" headingType="h2" />

                    </div>
                        <Text 
                            text="Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet."
                        />
                        <Button btnText="become a member" padding="pad_banner_btn"/>
                </div>
            </div>
        </>
    )
}

export default SecBanner;


