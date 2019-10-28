import React from 'react';
import classes from './MySkills.module.css';

const MySkills = () => {
    return (
        <section className={classes.section_skills}>
            <div className={'container'}>
                <p className={'skils'}>
                    My Skills
                </p>
                <div className={'row'}>
                    <div className={'col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12'}>
                        <ul className={classes.list_skills}>
                            <li><span></span>HTML5 & CSS3</li>
                            <li><span></span>HTML5 & CSS3</li>
                            <li><span></span>HTML5 & CSS3</li>
                        </ul>
                    </div>

                    <div className={'col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12'}>
                        <ul className={classes.list_skills}>
                            <li><span></span>HTML5 & CSS3</li>
                            <li><span></span>HTML5 & CSS3</li>
                            <li><span></span>HTML5 & CSS3</li>
                        </ul>
                    </div>

                    <div className={'col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12'}>
                        <ul className={classes.list_skills}>
                            <li><span></span>HTML5 & CSS3</li>
                            <li><span></span>HTML5 & CSS3</li>
                            <li><span></span>HTML5 & CSS3</li>
                        </ul>
                    </div>

                    <div className={'col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12'}>
                        <ul className={classes.list_skills}>
                            <li><span></span>HTML5 & CSS3</li>
                            <li><span></span>HTML5 & CSS3</li>
                            <li><span></span>HTML5 & CSS3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MySkills;