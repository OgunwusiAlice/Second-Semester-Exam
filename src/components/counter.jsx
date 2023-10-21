import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    let num = Number(value);
    if (String(num) == "NaN" || value == "") {
      return count;
    }
    setCount((count = value));
  };

  return (
    <div className="counter">
      <div className="container text-center g-3 mb-3">
        <div className="row g-3 align-items-center mb-3">
          <div className="col-lg-8">
            <input
              type="text"
              placeholder="Set Counter Value"
              className="form-control form-control-lg"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-4">
            <h1>Count: {count}</h1>
          </div>
        </div>
        <div className="row justify-content-between mb-3">
          <button
            type="button"
            className="col-5 btn btn-secondary btn-lg"
            onClick={() => {
              setCount(--count);
            }}
          >
            Decrement -
          </button>
          <button
            type="button"
            className="col-5 btn btn-primary btn-lg"
            onClick={() => setCount(++count)}
          >
            Increment +
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="col btn btn-danger btn-lg"
            onClick={() => setCount((count = 0))}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
