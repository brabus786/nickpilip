import React from 'react';
import classes from './Form.module.css';

const Form = () => {
    return (
        <form className={classes.form} action="">
            <div className={classes.top_inputs}>
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Your Email"/>
            </div>
            <input type="text" placeholder="Your Phone Number (Not Required)"/>
            <input type="text" placeholder="Your Designs URL (Dropbox, GoogleDeive etc.)"/>
            <textarea placeholder="Project Brief."></textarea>
            <button type="button">Get free qute</button>
        </form>
    )
};

export default Form;