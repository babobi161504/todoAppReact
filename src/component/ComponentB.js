import React from "react";
import { useDispatch } from "react-redux";



function ComponentB() {
  const dispatch = useDispatch(); // Tạo dispatch

  return (
    <div
      className="component-box"
      style={{ border: "2px solid #03a9f4", marginTop: "10px" }}
    >
      <h2>Component B</h2>
      <button
        className="increment-button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Click B
      </button>
    </div>
  );
}

export default ComponentB;
