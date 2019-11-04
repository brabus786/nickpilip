import React, {Component} from 'react';
import classes from './Unique_selling_proposition.module.css';

class UniqueSellingProposition extends Component {
    render() {
        return (
            <section>
                <div className={'container'}>
                    <div className={classes.inset}>
                        <p className={classes.proposition}>
                            <span>I’m Nick,</span> a <span>web developer</span> who provides <span>exceptional PSD to HTML service</span> for <span>E-commerce business.</span> I know how to get the most out of the HTML webpage for <span>your business.</span>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default UniqueSellingProposition;