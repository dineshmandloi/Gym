import  Button  from "../../Button/Button";
import React from "react";
import Heading from "../../Heading/Heading";
import Styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <>
            <div className={Styles.navbar}>
                <div className={Styles.container}>
                    <div className={Styles.menubar}>
                        <div className={Styles.logo}>
                            <a href="#"><Heading headingType="h2" color="whiteColor" fontWeight="fontWeight_900" fontSize="lg" headingText="training" headingColor="studio" /></a>
                        </div>
                        <div className={Styles.menu}>
                        <div className={Styles.toggleBtn}><i class="fa fa-bars"></i></div>
                            <ul>

                                {
                                    menuItem.map((menuvalue) => {
                                        return (
                                            <li>
                                                <a href="#">
                                                    {menuvalue.menuname}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                                <li className="menu_btn"><Button btnText="SIGN UP"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;

const menuItem = [
    {
        menuname: 'home'
    },
    {
        menuname: 'about'
    },
    {
        menuname: 'classes'
    },
    {
        menuname: 'SCHEDULES'
    },
    {
        menuname: 'contact'
    },

]
