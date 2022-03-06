import React, { Component } from 'react';

class SomeDoodle extends Component {
    render() { 
        return (
            <css-doodle>
            {`
            :doodle {
                @grid: 15x5;
                grid-gap: 2px;
                width: 24em;
                height: 8em;
            }
            transform: scale(@rand(.2, .9));
            background: rgb(@r(100, 255), @r(200, 255), @r(200, 255));

            `}
            </css-doodle>
        );
    }
}
 
export default SomeDoodle;