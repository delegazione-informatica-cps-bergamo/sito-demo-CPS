import React, { Component } from 'react';
import './navstyles.css';

class Navbar extends Component {
    state = { clickedButton : 0 } 
    render() { 
        return (
            <div className="navbar">
                <div className="centralContainer">
                    <div className="title">
                        CPS - BERGAMO
                    </div>
                    <div className="subtitle">
                        dove gli studenti si fanno sentire
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;