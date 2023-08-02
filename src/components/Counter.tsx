import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)} className={classes.counter}>
        +
      </button>
      <button onClick={() => setCount(count - 1)} className={classes.counter}>
        +
      </button>
    </>
  );
};

export default Counter;
