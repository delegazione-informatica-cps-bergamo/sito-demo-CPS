import React, { Component } from 'react';
import TextBox from '../components/textBox';
class OtherPage extends Component {
    render() { 
        return (
            <TextBox title="Altro"> Qui trovi le 
                <ul>
                    <li> Delegazioni </li>
                    <li> Informazioni aggiuntive </li>
                </ul>
            </TextBox>
        );
    }
}
 
export default OtherPage;