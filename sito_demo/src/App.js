import Navbar from './components/navbar';
import TextBox from './components/textBox';
import BottomContainer from './components/BottomContainer';
import SomeDoodle from './components/doodles/SomeDoodle';
function App() {
  return (
    <>
        <Navbar></Navbar>
        <BottomContainer>
          
          <TextBox></TextBox>
        </BottomContainer>
    </>
  );
}

export default App;
