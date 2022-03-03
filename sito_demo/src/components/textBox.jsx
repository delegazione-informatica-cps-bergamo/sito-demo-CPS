import React, { Component } from 'react'
import "./textBox.css"

class TextBox extends Component {
    state = {  } 
    render() { 
        return (
            <div className="centralBox">
                <div className="title">
                    Consulta Provinciale Studentsca
                </div>
                <div className="easyText">
                    Noi alla consulta proviciale studentesca cerchiamo sempre di far valere la voce di chi ci ascolta
                </div>
            </div>
        );
    }
}
 
export default TextBox;