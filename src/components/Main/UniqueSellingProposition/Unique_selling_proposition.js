import React, {Component} from 'react';
import classes from './Unique_selling_proposition.module.css';

class UniqueSellingProposition extends Component {
    render() {
        return (
            <section>
                <div className={'container'}>
                    <div className={classes.inset}>
                        <p className={classes.proposition}>
                            <span>I’m Nick,</span> a <span>web developer</span> who provides <span>exceptional PSD to HTML srvice</span> for <span>E-commerce buissness.</span> I
                            know
                            how get most out of html webpage for <span>your buissness.</span>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default UniqueSellingProposition;