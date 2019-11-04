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
                            <li><span></span>Javascript</li>
                            <li><span></span>Jquery</li>
                        </ul>
                    </div>

                    <div className={'col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12'}>
                        <ul className={classes.list_skills}>
                            <li><span></span>Bootstrap 4</li>
                            <li><span></span>React.js & Redux</li>
                            <li><span></span>SASS & SCSS</li>
                        </ul>
                    </div>

                    <div className={'col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12'}>
                        <ul className={classes.list_skills}>
                            <li><span></span>Gulp</li>
                            <li><span></span>Valid Markup</li>
                            <li><span></span>Semantic Markup</li>
                        </ul>
                    </div>

                    <div className={'col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12'}>
                        <ul className={classes.list_skills}>
                            <li><span></span>REST API</li>
                            <li><span></span>PHP & SQL</li>
                            <li><span></span>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MySkills;