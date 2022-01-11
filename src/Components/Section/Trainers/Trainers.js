// import  Button  from "../../Button/Button";
import React from "react";
import SectionHeading from "../Sectionheading/SectionHeading";
import Styles from './trainers.module.scss';
import Links from "../../Links/Links";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";
const Trainers = (props) => {
    return (
        <>
            <SectionHeading hText="expert" hColor="trainers" 
                pText="Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website."
            />
            <div className="container">
                <div className={Styles.manTrainers}>
                    {
                        trainerItem.map((trainer) => {
                            return (
                                <>
                                    <div className={Styles.trainer}>
                                        <div className={Styles.trainerItem}>
                                        <div className={Styles.trainerImg}>
                                        <img src={trainer.imgsrc} alt="trainer-img" />
                                        </div>
                                        <Links linkText={trainer.links} color="primary" />
                                        <Heading headingType="h4" headingText={trainer.heading} fontSize="md_21" fontWeight="fontWeight_600" />

                                        <Text color="blackColor" text={trainer.text} fontSize="sm" />
                                        <div className={Styles.icon}>
                                            <a href="#"><i className={trainer.icon1}></i></a>
                                            <a href="#"><i className={trainer.icon2}></i></a>
                                            <a href="#"><i className={trainer.icon3}></i></a>
                                            <a href="#"><i className={trainer.icon4}></i></a>
                                        </div>
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
{/* <i class="fa fa-linkedin"></i><i class="fa fa-behance"></i> */ }
export default Trainers;

const trainerItem = [
    {
        imgsrc: 'main_banner.jpg',
        links:'Strength Trainer',
        heading: 'Bret D. Bowers',
        text: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
        icon1: 'fa fa-facebook-square',
        icon2: 'fa fa-twitter-square',
        icon3: 'fa fa-linkedin',
        icon4: 'fa fa-behance',
    },
    {
        imgsrc: 'first-trainer.jpg',
        links:'Strength Trainer',

        heading: 'Bret D. Bowers',
        text: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
        icon1: 'fa fa-facebook-square',
        icon2: 'fa fa-twitter-square',
        icon3: 'fa fa-linkedin',
        icon4: 'fa fa-behance',
    },
    {
        imgsrc: 'first-trainer.jpg',
        links:'Strength Trainer',
        heading: 'Bret D. Bowers',
        text: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
        icon1: 'fa fa-facebook-square',
        icon2: 'fa fa-twitter-square',
        icon3: 'fa fa-linkedin',
        icon4: 'fa fa-behance',
    }
]