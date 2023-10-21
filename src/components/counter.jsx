import React from "react";
import "./counter.css";

const Counter = () => {
  return (
    <div className="counter">
      <div className="container text-center g-3 mb-3">
        <div className="row g-3 align-items-center mb-3">
          <div className="col-lg-8">
            <input
              type="text"
              placeholder="Set Counter Value"
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-lg-4">
            <h1>Count: 0</h1>
          </div>
        </div>
        <div className="row justify-content-between mb-3">
          <button type="button" className="col-5 btn btn-secondary btn-lg">
            Decrement -
          </button>
          <button type="button" className="col-5 btn btn-primary btn-lg">
            Increment +
          </button>
        </div>
        <div className="row">
          <button type="button" className="col btn btn-danger btn-lg">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
