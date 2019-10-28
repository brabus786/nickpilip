import React from 'react';
import classes from './Pricing.module.css';
import telegram from '../../../assets/img/contact1.png';
import In from '../../../assets/img/contact2.png';
import Fb from '../../../assets/img/contact3.png';
import Form from "./Form/Form";

const Pricing = () =>{
    return(
        <section className={classes.pricing_section}>
            <div className={'container'}>
                <p className={'skils'}>Pricing</p>
                <p className={classes.hr}>
                    My pricing is simple :) $10/hr.
                    100% Money Back Guarantee.
                </p>
                <p className={'skils'}>Get Free Qute</p>
                <p className={'discription'+ ' ' + classes.param}>
                    Would like to know how much it would take to convert
                    your desing to html feel free to reach out to me!
                </p>

                <div className={'row'}>
                    <div className={'col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'}>
                        <Form/>
                    </div>
                    <div className={'col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'}>
                        <div className={classes.contacts}>
                            <p className={classes.contacts_title}>
                                Interested in services? Drop me a line
                            </p>
                            <ul>
                                <li><a href="tel:+380501596204">Tel: +380 66 654 7621</a></li>
                                <li><a href="mailto:nikolay.pilipchatin@gmail.com">Emai: nikolay.pilipchatin@gmail.com</a></li>
                                <li>Based in Ukraine, Kharkiv</li>
                            </ul>
                            <ul className={classes.social}>
                                <li><a href=""><img src={telegram} alt=""/></a></li>
                                <li><a href=""><img src={In} alt=""/></a></li>
                                <li><a href=""><img src={Fb} alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Pricing;