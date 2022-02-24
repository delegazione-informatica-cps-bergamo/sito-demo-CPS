import React, { Component } from 'react';
import './navstyles.css';

class Navbar extends Component {
    state = { clickedButton : "home" } 
    render() { 
        return (
            <><div className="navbar">
                <div className="centralContainer">
                    <div className="title">
                        CPS - BERGAMO
                    </div>
                    <div className="subtitle">
                        dove gli studenti si fanno sentire
                    </div>
                </div>
            </div><div className="navbar">
                    <div className="navbutton">
                        Chi siamo
                    </div>
                    <div className="navbutton">
                        Incontri
                    </div>
                    <div className="navbutton">
                        Membri
                    </div>
                    <div className="navbutton">
                        Home
                    </div>
                </div></>
        );
    }
}
 
export default Navbar;