import './App.css';
import Letter from './components/letter';
import Stats from './components/stats';
import { useEffect, useState } from 'react';
import * as constants from './components/constants';

const letterMappings = [
  {'char' : 'A'},
  {'char' : 'B'},
  {'char' : 'C'},
  {'char' : 'D'},
  {'char' : 'E'},
  {'char' : 'F'},
  {'char' : 'G'},
  {'char' : 'H'},
  {'char' : 'I'},
  {'char' : 'J'},
  {'char' : 'K'},
  {'char' : 'L'},
  {'char' : 'M'},
  {'char' : 'N'},
  {'char' : 'O'},
  {'char' : 'P'},
  {'char' : 'Q'},
  {'char' : 'R'},
  {'char' : 'S'},
  {'char' : 'T'},
  {'char' : 'U'},
  {'char' : 'V'},
  {'char' : 'W'},
  {'char' : 'X'},
  {'char' : 'Y'},
  {'char' : 'Z'},
  {'char' : 'Æ'},
  {'char' : 'Ø'},
  {'char' : 'Å'}
]

function App() {
    const [activeLetter, setActiveLetter] = useState('');
    const [pressedLetter, setPressedLetter] = useState('');
    
    let [noOfKeyboardEvents, setNoOfKeyboardEvents] = useState(0);
    let [noOfCorrect, setNoOfCorrect] = useState(0);
    let [noOfIncorrect, setNoOfIncorrect] = useState(0);
    let [history, setHistory] = useState([]);

    useEffect(() =>{      
        selectRandomLetter();
    }, []);

    function selectRandomLetter() {
      var randomInt = Math.floor(Math.random() * letterMappings.length); //26     

      setActiveLetter(letterMappings[randomInt]);
    }

    function declarePressedLetter(key) {
      setHistory(history => [...history, key]);

      setPressedLetter(key);

      setNoOfKeyboardEvents(noOfKeyboardEvents + 1);

      if(key.length > 0 && activeLetter.char.toLowerCase() === key.toLowerCase()){
        selectRandomLetter();
        setNoOfCorrect(noOfCorrect + 1);
        // console.log('active letter: ' + activeLetter.char.toLowerCase());
        // console.log('key to lower: ' + key.toLowerCase());
      } else{
        setNoOfIncorrect(noOfIncorrect + 1);
      }
    }

  return (
    <div className="app container">     
      <div className="row">
        <div className="col s12 m4 l2"></div>
        <div className="col s12 m4 l8 center-align"><h1>{constants.HEADER_LABEL}</h1></div>
        <div className="col s12 m4 l2"><Stats noOfKeyboardEvents={noOfKeyboardEvents} noOfCorrect={noOfCorrect} noOfIncorrect={noOfIncorrect}/></div>
      </div>
      <div className="row content-row">
        <div className="col s12 m4 l2 history"><h5>{constants.HISTORY}:</h5>{history}</div>
        <div className="col s12 m4 l8"><Letter letter={activeLetter} onLetterKeyPress={key=> declarePressedLetter(key)} /></div>
        <div className="col s12 m4 l2"><h5>{constants.YOU_ENTERED}:</h5><h1>{pressedLetter}</h1></div>
      </div>
      <div className="row">
        <div className="col s12">&copy; J. Hossy</div>
      </div>
    </div>
  );
}

export default App;
