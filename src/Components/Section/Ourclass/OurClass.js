// import  Button  from "../../Button/Button";
import React from "react";
import SectionHeading from "../Sectionheading/SectionHeading";
import './ourclass.scss';
import Button from '../../Button/Button'

const OurClass = (props) => {
    return (
        <>
            <SectionHeading hText="our" hColor="classes" pText="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."/>
            <div className="container">
                <div className="ourclass">
                    <div class="season_tabs">
                        <div class="season_tab">
                            <input type="radio" className="tab-1" name="tab-group-1" checked />
                            <label for="tab-1">Осень</label>
                        </div>
                        <div class="season_tab">
                            <input type="radio" className="tab-1" name="tab-group-1" checked />
                            <label for="tab-1">Осень</label>
                        </div>
                        <div class="season_tab">
                            <input type="radio" className="tab-1" name="tab-group-1" checked />
                            <label for="tab-1">Осень</label>
                        </div>
                        <div class="season_tab">
                            <input type="radio" className="tab-1" name="tab-group-1" checked />
                            <label for="tab-1">Осень</label>
                        </div>
                        <Button btnText="View All Schedules" padding="pad_banner_btn" />
                    </div>
                    <div class="season_content">
                       
                        <div class="season_tx">
                            <img src="training-image-01.jpg" alt="" />
                        </div>
                        <h2>Second Training Class
                        </h2>
                        <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur rclassNameiculus mus.</p>
                        <Button btnText="VIEW SCHEDULE" padding="pad_banner_btn" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurClass;
