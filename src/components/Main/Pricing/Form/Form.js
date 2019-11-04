import React from 'react';
import classes from './Form.module.css';

const Form = () => {
    return (
        <form className={classes.form} action="">
            <div className={classes.top_inputs}>
                <input aria-label="Your Name" type="text" placeholder="Your Name"/>
                <input aria-label="Your Email" type="text" placeholder="Your Email"/>
            </div>
            <input aria-label="Your Phone Number" type="text" placeholder="Your Phone Number (Not Required)"/>
            <input aria-label="Your Designs URL" type="text" placeholder="Your Designs URL (Dropbox, GoogleDeive etc.)"/>
            <textarea aria-label="Project Brief" placeholder="Project Brief."></textarea>
            <button type="button">Get free qute</button>
        </form>
    )
};

export default Form;