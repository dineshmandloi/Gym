import React from "react";
import Links from "../../Links/Links";
import Styles from  './copyright.module.scss';

const CopyRight = (props) =>{

    return(
        <>
            <div className={Styles.copyright}>
                <p>Copyright © 2020 Training Studio - Designed by <Links linkText="TemplateMo" color="primary"/>
                </p>
            </div>
        </>
    )
}
  
export default CopyRight;

