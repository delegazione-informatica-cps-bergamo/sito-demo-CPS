import React, { Component } from 'react'
import './textBox.css'

class BottomContainer extends Component {
    render() { 
        return (
            <div className='container'>
                {this.props.children}
            </div>
        );
    }
}
 
export default BottomContainer;