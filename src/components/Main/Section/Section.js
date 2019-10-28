import React from 'react';
// import classes from './Sections.module.css';

const Section = (props) => {

    return (
        <section className={'section'}>
            <div className={'container'}>
                <div className={['row', props.leftside ? 'flex-row-reverse' : null ].join(" ")}>
                    <div className={'col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'}>
                        {props.children}
                    </div>
                    <div className={'col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'}>
                        <div className={'srction_wrap_img'}>
                            <img src={props.img} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Section;