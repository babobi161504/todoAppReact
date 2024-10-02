import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ComponentB from "./ComponentB";

function ComponentA() {
  const number = useSelector((state) => state.number); 
  const dispatch = useDispatch(); 

  return (
    <div className="component-box" style={{ border: "2px solid #ff5722" }}>
      <h2>Component A</h2>
      <div className="number-display">Number: {number}</div>
      <button
        className="increment-button"
        onClick={() => dispatch({ type: 'INCREMENT'}

        ) } 
      >
        Click A
      </button>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
