import React, { Component } from 'react';
import './navstyles.css';
import SomeDoodle from './doodles/SomeDoodle';

class Navbar extends Component {
    super(props){
        this.props = props;
    }
    state = { clickedButton : "home" }
    renderAbout = () => {
        this.setState({clickedButton : "about"})
    }

    renderEvents = () => {
        this.setState({clickedButton : "events"})
    }

    renderStory = () => {
        this.setState({clickedButton : "story"})
    }

    renderHome = () => {
        this.setState({clickedButton : "home"})
    }
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
                    <div className="navbutton" onClick={this.renderAbout}>
                        About
                    </div>
                    <div className="navbutton" onClick={this.renderEvents}>
                        Eventi
                    </div>
                    <div className="navbutton" onClick={this.renderStory}>
                        Storia
                    </div>
                    <div className="navbutton" onClick={this.renderHome}>
                        Home
                    </div>
                </div></>
        );
    }
}
 
export default Navbar;