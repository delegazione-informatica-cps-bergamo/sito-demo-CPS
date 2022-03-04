import React, { Component } from 'react'
import "./textBox.css"

class TextBox extends Component {
    constructor(){
        super();
    }
    render() { 
        return (
            <div className="centralBox">
                <div className="title textBoxTitle">
                    {this.props.title ? this.props.title : "Undefined title"}
                </div>
                <div className="easyText">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default TextBox;