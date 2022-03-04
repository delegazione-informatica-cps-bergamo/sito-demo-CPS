import Navbar from './components/navbar';
import TextBox from './components/textBox';
import BottomContainer from './components/BottomContainer';
import SomeDoodle from './components/doodles/SomeDoodle';
import React, { Component } from 'react';
import HomePage from './pages/home';
import About from './pages/about';
import Story from './pages/story';
import Events from './pages/events';


class App extends Component {
  state = { page : "home" }
  constructor(){
    super();
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(page){
    this.setState({
        page: page
    });
    console.log(page);
  }
  handlePage(){
    if (this.state.page === "home") {
      return <HomePage></HomePage>
    } else if (this.state.page === "about"){
      return <About></About>
    } else if (this.state.page === "events"){
      return <Events></Events>
    } else if(this.state.page === "story"){
      return <Story></Story>
    }
  }
  render() { 
    return (
      <>
        <Navbar functionToCall={this.handlePageChange}></Navbar>
        <BottomContainer>
          {this.handlePage()}
        </BottomContainer>
    </>
    );
  }
}
export default App;