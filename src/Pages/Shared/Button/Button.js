import React from 'react'
import './Button.css'

const Button = (props) =>{
    return(
        <div className={`Button ${props.className}`}>
            <p>{props.Text}</p>
        </div>
    );
}

export default Button;