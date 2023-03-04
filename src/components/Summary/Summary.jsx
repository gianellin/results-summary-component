
import React from 'react';


export default function ResultSummary({ data }) {
    function getCategoryClass(category) {
       return (category)
    }

  return (
    <div className="p-3 ">
      <h4 className="title py-3">Summary</h4>
      <ul className="flex flex-col gap-3 md:gap-4 list-none md:text-lg">
        {data.map(test => {
          return (
            <li
              key={test.category}
              className={`mb-3 ${getCategoryClass(test.category)}`}>
              
              <div className="Icon">
                <img src={test.icon} alt="icon"></img>
                <p>{test.category}</p>
              </div>

              <p className="">
                {test.score}
                <span className="">/100</span>
              </p>

            </li>
          );
        })}
      </ul>

      <button className=" continue btn-primary rounded-5">
        Continue
      </button>
      <br/>
    </div>
  );
}
