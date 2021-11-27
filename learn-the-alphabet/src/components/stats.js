import { useState, useEffect } from 'react';
import * as constants from './constants';

function Stats(props) {    
    const [seconds, setSeconds] = useState(0);
    
    const {noOfKeyboardEvents, noOfCorrect, noOfIncorrect} = props;

    useEffect(() => {
        let interval = 0;
        
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
          
        return () => clearInterval(interval);
      }, [seconds]);
    
    return (
        <div className="row">
            <div>{constants.STATS_NO_OF_BUTTON_PRESS}: {noOfKeyboardEvents}</div>
            <div>{constants.STATS_CORRECT}: {noOfCorrect} </div>
            <div>{constants.STATS_INCORRECT}: {noOfIncorrect}</div>
            <div>letters / minute</div>
            <div>{constants.STATS_TIME}: {seconds}s</div>
        </div>
    );
}

export default Stats;