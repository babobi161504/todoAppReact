// import React, { useState, createContext, useContext } from "react";
// import "./style.css";

// const NumberContext = createContext();

// function NumberProvider({ children }) {
//   const [number, setNumber] = useState(0);

//   const incrementNumber = () => {
//     setNumber(number + 1);
//   };

//   return (
//     <NumberContext.Provider value={{ number, incrementNumber }}>
//       {children}
//     </NumberContext.Provider>
//   );
// }

// // Component A
// function ComponentA() {
//   const { number, incrementNumber } = useContext(NumberContext);

//   return (
//     <div className="component-box" style={{ border: "2px solid #ff5722" }}>
//       <h2>Component A</h2>
//       <div className="number-display">Number: {number}</div>
//       <button className="increment-button" onClick={incrementNumber}>
//         Click A
//       </button>
//       <ComponentB />
//     </div>
//   );
// }

// // Component B
// function ComponentB() {
//   const { incrementNumber } = useContext(NumberContext);

//   return (
//     <div
//       className="component-box"
//       style={{ border: "2px solid #03a9f4", marginTop: "10px" }}
//     >
//       <h2>Component B</h2>
//       <button className="increment-button" onClick={incrementNumber}>
//         Click B
//       </button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <NumberProvider>
//       <div className="app-container">
//         <h1>React Homework</h1>
//         <ComponentA />
//       </div>
//     </NumberProvider>
//   );
// }

// export default App;

import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import ComponentA from "../src/component/ComponentA"; // Import Component A từ tệp tin riêng
import { Button } from "flowbite-react";

function App() {
  return (
    <Provider store={store}>
      <ComponentA />
      {/* <div className="app-container">
        <h1>React Homework</h1> */}

      {/* <Button color="gray">Profile</Button>
        <Button gradientMonochrome="info">Profile</Button> */}
      {/* </div> */}
    </Provider>
  );
}

export default App;
