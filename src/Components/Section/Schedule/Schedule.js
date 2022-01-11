// import  Button  from "../../Button/Button";
import React from "react";
import SectionHeading from "../Sectionheading/SectionHeading";
import Styles from './schedule.module.scss';

const Schedule = (props) => {
    return (
        <>
            <div className={`${Styles.schedule} `}>
            <SectionHeading hText="CLASSES " wColor="whiteColor" hColor="SCHEDULE" pText="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."/>
                <div className={Styles.container}>
                <div className={Styles.schedule_day}>
                    <ul>
                        <li><a href="#">monday</a></li>
                        <li><a href="#">tuesday</a></li>
                        <li><a href="#">wednesday</a></li>
                        <li><a href="#">thursday</a></li>
                        <li><a href="#">friday</a></li>

                    </ul>
                </div>
                <div className={Styles.time_Schedule}>
                    <div>
                        <span>Fitness Class</span>
                    </div>
                    <div>
                        <span>10:00AM - 11:30AM</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div>  
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>Fitness Class</span>
                    </div>
                    <div>
                        <span>10:00AM - 11:30AM</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div>  
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div>  
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                    <div>
                        <span>William G. Stewart</span>
                    </div> 
                </div>
                </div>
            </div>
        </>
    )
}

export default Schedule;
