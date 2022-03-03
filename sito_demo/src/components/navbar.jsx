import React, { Component } from 'react';
import './navstyles.css';

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
                <div className="centralContainer">
                    <div className="title">
                        CPS - BERGAMO
                    </div>
                    <div className="subtitle">
                        dove gli studenti si fanno sentire
                    </div>
                </div>
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