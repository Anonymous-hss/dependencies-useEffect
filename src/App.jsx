import { useEffect, useState } from "react";
const todo = require("./todos");
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);

  function increaseCount() {
    setCount((currCount) => currCount + 1);
  }

  function decreseCount() {
    setCount1((currCount) => currCount - 1);
  }

  useEffect(() => {
    setInterval(increaseCount, 5000);
    setInterval(decreseCount, 7000);
  }, []);

  useEffect(() => {
    console.log("Count Updated" + count);
  }, [count]);
  return (
    <>
      {/* {count} {count1} */}
      {todo}
    </>
  );
}

export default App;
