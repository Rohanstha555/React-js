import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const AddValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);

          // this doesnot work because react uses batch(means group them into 1 and then update but the value is same for all
          // i.e 0 and the result will be 1)
              // setCounter(counter + 1);
              // setCounter(counter + 1);
              // setCounter(counter + 1);
              // setCounter(counter + 1);

          //if you want to update number by 4 dirtectly
          //this works because these call back function takes uodated value for each execution and the result will be 4
          // setCounter(prevcounter => prevcounter + 1)
          // setCounter(prevcounter => prevcounter + 1)
          // setCounter(prevcounter => prevcounter + 1)
          // setCounter(prevcounter => prevcounter + 1)
    }

    console.log("clicked", counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Count</h1>
      <h1>Counter Vlaue : {counter}</h1>

      <button onClick={AddValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>

      <p>Value is : {counter}</p>
    </>
  );
}

export default App;
