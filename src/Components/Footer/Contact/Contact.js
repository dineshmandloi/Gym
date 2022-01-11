import  Button from "../../Button/Button";
import React from "react";
import Styles from './contact.module.scss';

const Contact = () => {
    return (
        <>
            <div className={Styles.mapContact}>
                <div className={Styles.map}>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148331.60908391303!2d-43.44191408307292!3d-22.762043618515776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sin!4v1641535170492!5m2!1sen!2sin" />
                </div>
                <div className={Styles.contact}>
                    <div className={Styles.form_div}>
                    <form>
                        <div className={Styles.row}>
                        <div className={Styles.col_6}>
                        <input type="text" name="name" placeholder="Your Name"/>
                        </div>
                        <div className={Styles.col_6}>
                        <input type="email" name="name" placeholder="Your Email"/>
                        </div>
                        <div className={Styles.col_12}>
                        <input type="text" name="name" placeholder="Subject"/>
                        </div>
                        <div className={Styles.col_12}>
                        <textarea placeholder="Message"> 
                        </textarea>
                        </div>
                        <div className={Styles.col_12}>
                        <Button btnText="send message" padding="pad_banner_btn"/>
                       </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;