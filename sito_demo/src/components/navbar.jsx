import React, { Component } from 'react';
import './navstyles.css';
import SomeDoodle from './doodles/SomeDoodle';

class Navbar extends Component {
    super(props){
        this.props = props;        
    }
    state = { clickedButton : "home" }
    render() { 
        return (
            <><div className="navbar">
                <SomeDoodle></SomeDoodle>
                <div className="centralContainer">
                    <div className="navTitle">
                        CPS - BERGAMO
                    </div>
                    <div className="subtitle">
                        Dove gli studenti si fanno sentire
                    </div>
                </div>
                <SomeDoodle></SomeDoodle>
            </div><div className="navbar navButtonContainer">
                    <div className="navbutton" onClick={() => this.props.functionToCall("about")}>
                        About
                    </div>
                    <div className="navbutton" onClick={() => this.props.functionToCall("events")}>
                        Eventi
                    </div>
                    <div className="navbutton" onClick={() => this.props.functionToCall("story")}>
                        Storia
                    </div>
                    <div className="navbutton" onClick={() => this.props.functionToCall("home")}>
                        Home
                    </div>
                    <div className="navbutton" onClick={() => this.props.functionToCall("other")}>
                        Altro
                    </div>
                </div></>
        );
    }
}
 
export default Navbar;