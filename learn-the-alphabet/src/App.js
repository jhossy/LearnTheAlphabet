import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Letter from './components/Letter';
import { useEffect, useState } from 'react';

const letterMappings = [
  {'char' : 'A', 'path': './assets/A/blue.ico'},
  {'char' : 'B', 'path': './assets/B/blue.ico'},
  {'char' : 'C', 'path': './assets/C/blue.ico'},
  {'char' : 'D', 'path': './assets/D/blue.ico'},
  {'char' : 'E', 'path': './assets/E/blue.ico'},
  {'char' : 'F', 'path': './assets/F/blue.ico'},
  {'char' : 'G', 'path': './assets/G/blue.ico'},
  {'char' : 'H', 'path': './assets/H/blue.ico'},
  {'char' : 'I', 'path': './assets/I/blue.ico'},
  {'char' : 'J', 'path': './assets/J/blue.ico'},
  {'char' : 'K', 'path': './assets/K/blue.ico'},
  {'char' : 'L', 'path': './assets/L/blue.ico'},
  {'char' : 'M', 'path': './assets/M/blue.ico'},
  {'char' : 'N', 'path': './assets/N/blue.ico'},
  {'char' : 'O', 'path': './assets/O/blue.ico'},
  {'char' : 'P', 'path': './assets/P/blue.ico'},
  {'char' : 'Q', 'path': './assets/Q/blue.ico'},
  {'char' : 'R', 'path': './assets/R/blue.ico'},
  {'char' : 'S', 'path': './assets/S/blue.ico'},
  {'char' : 'T', 'path': './assets/T/blue.ico'},
  {'char' : 'U', 'path': './assets/U/blue.ico'},
  {'char' : 'V', 'path': './assets/V/blue.ico'},
  {'char' : 'W', 'path': './assets/W/blue.ico'},
  {'char' : 'X', 'path': './assets/X/blue.ico'},
  {'char' : 'Y', 'path': './assets/Z/blue.ico'},
  {'char' : 'Z', 'path': './assets/Y/blue.ico'}]
  // {'char' : 'Æ', 'path': ''},
  // {'char' : 'Ø', 'path': ''},
  // {'char' : 'Å', 'path': ''}

function App() {
    const [activeLetter, setActiveLetter] = useState('');
    const [pressedLetter, setPressedLetter] = useState('');

    useEffect(() =>{
      function selectRandomLetter() {
            var randomInt = Math.floor(Math.random() * letterMappings.length); //26     

            setActiveLetter(letterMappings[randomInt]);
        }
        selectRandomLetter();
    }, []);

    function declarePressedLetter(key) {
      setPressedLetter(key);
    }

  return (
    <Container fluid="md">     
      <Row>
        <Col><h1>Lær alfabetet</h1></Col>
      </Row>
      <Row>
        <Col>Left</Col>
        <Col><Letter letter={activeLetter} onLetterKeyPress={key=> declarePressedLetter(key)} /></Col>
        <Col>Right</Col>
      </Row>
      <Row>
        <Col>Left</Col>
        <Col>You entered: {pressedLetter}</Col>
        <Col>Right</Col>
      </Row>
    </Container>
  );
}

export default App;
