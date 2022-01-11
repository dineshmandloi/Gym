import React from "react";
import  './button.scss';

const Button = (props) =>{

        const btnProps = (props.btnText==="Click Here") ? 'commonBtn':'commonBtn';
    return(
        <>
            <button className={`${btnProps} ${props.padding} ${props.fontSize}`}>{props.btnText}</button>
        </>
    )
}

  Button.defaultProps = {
    btnText:"default button"
  }
  
export default Button;

