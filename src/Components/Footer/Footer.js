import React from "react";
import  './footer.scss';
import Contact from "./Contact/Contact";
import CopyRight from "./CopyRight/CopyRight";
const Footer = () =>{
    return(
       <footer>
           <Contact/>
           <CopyRight/>
       </footer>
    )
}
export default Footer;