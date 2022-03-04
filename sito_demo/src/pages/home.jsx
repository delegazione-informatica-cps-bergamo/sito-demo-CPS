import React, { Component } from 'react'
import TextBox from '../components/textBox';
class HomePage extends Component {
    state = {  } 
    render() { 
        return (
            <TextBox title="Noi siamo CPS">
                Noi siamo la consulta Provinciale stuendesca, noi siamo qui per aiutare gli studenti, per dargli una voce in politica
            </TextBox>
        );
    }
}
 
export default HomePage;