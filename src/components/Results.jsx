import React from 'react';
import "../App.css";


export default function Result({ data }) {
    function getAverageScore(data) {
      let average = 0;
      average =
        data.map(test => test.score).reduce((prev, curr) => prev + curr, 0) /
        data.length;
      return Math.floor(average).toFixed(0);
    }
  
    return (
      <div className="result">
        <h1 className="title">Your result</h1>
        
        <div className="circle">
          <h2 className="">
            {`${getAverageScore(data)}`}
          </h2>
          <span className="">of 100</span>
        </div>
        <div className="">
          <h3 className="">
            Great
          </h3>
          <p className="">
            Your performance exceeded 65% of the people conducting the test
            here!
          </p>
        </div>
        </div>
      
    );
  }

