import React, { useState } from 'react';
import "./css/styles.css";

let timeLeft = 30;
function CountDown() {
      
      const [times, setTimes] = useState(30);


       const  renderTime = ({ remainingTime }) => {
            if (remainingTime === 0) {
             // window.location.reload(false);
              return <div className="timer">Too lale...</div>;
            }
             
            return (
              <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
              </div>
            )
        }
    


    
  return (
    <>
    <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g className="base-timer__circle">
      <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
    </g>
  </svg>
  <span id="base-timer-label" className="base-timer__label">
   {renderTime(times)}
  </span>
    </>
  )
}

export default CountDown