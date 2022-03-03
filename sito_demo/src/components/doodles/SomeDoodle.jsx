import React, { Component } from 'react';
import "css-doodle"

class SomeDoodle extends Component {
    render() { 
        return (
            <css-doodle>
            {`
            :doodle {
                
                @grid: 5 / 10em;
                grid-gap: 2px;
            }
            transform: scale(@rand(.2, .9));
            background: #60569e;
            `}
            </css-doodle>
        );
    }
}
 
export default SomeDoodle;