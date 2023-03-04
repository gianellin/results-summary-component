
import React from 'react';
import "../App.css";


export default function ResultSummary({ data }) {
    function getCategoryClass(category) {
       return (category)
    }

  return (
    <div className=" summary-container p-3">
      <h4 className="title py-3">Summary</h4>
      <ul className="lists">
        {data.map(test => {
          return (
            <li
              key={test.category}
              className={`mb-3 ${getCategoryClass(test.category)}`}>
              
              <div>
                <img src={test.icon} alt="icon"></img>
                <p>
                    {test.category}
                </p>
              </div>

              <p className="scores">
                {test.score}
                <span className="">/100</span>
              </p>

            </li>
          );
        })}
      </ul>

      <button className="btn-primary rounded-5">
        Continue
      </button>
      <br/>
    </div>
  );
}
