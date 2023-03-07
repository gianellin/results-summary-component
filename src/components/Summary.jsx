
import React from 'react';
import "../App.css";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Summary({ data }) {
    function getCategoryClass(category) {
       return (category)
    }

  return (
    <div className=" summary-container p-3">
      <h4 className="title py-3">Summary</h4>
      <ListGroup className="lists">
        {data.map(test => {
          return (
            <ListGroup.Item 
              key={test.category}
              className={` ${getCategoryClass(test.category)}`}>
              
              <div className="d-flex flex-row bd-highlight mb-3">
                <img src={test.icon} alt="icon" className="p-2 bd-highlight"></img>
                <div>
                    {test.category}
                </div>
                <div className="scores d-flex flex-row p-2 bd-highlight">
                {test.score} <span> / 100</span>
                </div>
               
              </div>
              
              

              

            </ListGroup.Item>
          
          );
        })}
      </ListGroup>

      <button type="button" className="conti p-3 text-white" >
        Continue
      </button>
      <br/>
    </div>
  );
}


{/* <li
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

      <button type="button" className="conti p-3 text-white" >
        Continue
      </button>
      <br/>
    </div>
  );
} */}