// import  Button  from "../../Button/Button";
import React from "react";
import Heading from "../../Heading/Heading";
import Links from "../../Links/Links";
import SectionHeading from "../Sectionheading/SectionHeading";
import Styles from './gymfeature.module.scss';

const GymFeature = (props) => {
    return (
        <>
            <div className={Styles.container}>
            <SectionHeading hText="choose" hColor="program" pText="Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website."/>
                <div className={Styles.gym_feature}>

                    {
                        GymItem.map((gymvalue) => {
                            return (
                                <>
                                    <div className={Styles.gymItem}>
                                        <div className={Styles.gymImg}>
                                            <img src="features-first-icon.png" alt="features-first-icon"></img>
                                        </div>
                                        <div className={Styles.gymText}>
                                            <Heading headingType="h4" headingText={gymvalue.heading} fontSize="md_21" fontWeight="fontWeight_600" />
                                            <p>{gymvalue.para}</p>
                                            <Links linkText="discover more" color="primary" />
                                        </div>
                                    </div>
                                </>
                            )
                        })


                    }


                </div>
            </div>
        </>
    )
}

export default GymFeature;


const GymItem = [
    {
        heading:' fitness',
        para: 'Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.'
    },
    {
        heading:'Advanced Muscle Course ',

        para: 'Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.'
    },
    {
        heading:'New Gym Training ',
        para: 'Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.'
    },
    {
        heading:'Yoga Training',
        para: 'Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.'
    },
    {
        heading:'Basic Muscle Course ',
        para: 'Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.'
    },
    {
        heading:'Body Building Course ',
        para: 'Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.'
    }
];