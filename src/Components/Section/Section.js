// import  Button  from "../../Button/Button";
import React from "react";
import GymFeature from "./Gymfeature/GymFeature";
import OurClass from "./Ourclass/OurClass";
import Schedule from "./Schedule/Schedule";
import SecBanner from "./Secbanner/SecBanner";
import Styles from './section.module.scss';
import Trainers from "./Trainers/Trainers";

const Section = (props) => {
    return (
        <section>
          
            <GymFeature/>
            <SecBanner/>
            <OurClass/>
            <Schedule/>
            <Trainers/>
        </section>
    )
}

export default Section;
