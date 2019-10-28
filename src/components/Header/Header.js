import React, {Component} from 'react';
import classes from './Header.module.css';
import ok from '../../assets/img/ok.png';

class Header extends Component {

    render() {
        return (
            <div className={'container'}>
                <header className={classes.inset}>
                    <div className={classes.logo_wrap}>
                        <img src={ok} alt="img"/>
                    </div>
                    <h1 className={classes.title}>Nick Pilipchatin</h1>
                </header>
            </div>
        )
    }
}


export default Header;


