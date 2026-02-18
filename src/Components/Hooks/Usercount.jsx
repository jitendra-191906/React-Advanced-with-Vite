import { useReducer } from "react";

const initialCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "reset":
      return initialCount;
    default:
      return state;
  }
};
export const Usercount = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          padding: 20,
          gap: 20,
        }}
      >
        {" "}
        <h1>Using UseReducer</h1>
        <p>counter :{count}</p>
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </>
  );
};
