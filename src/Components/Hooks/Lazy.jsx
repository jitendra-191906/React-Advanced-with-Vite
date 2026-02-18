import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
  }
};
const initial = 0;
const initi = (initial) => {
  console.log("initi fuction called once");
  const savecount = localStorage.getItem("count");
  if (savecount != null) {
    console.log("found savecount", savecount);
    return parseInt(savecount);
  }
  console.log("initial value is ", initial);
  return initial;
};

export const Lazy = () => {
  const [count, dispatch] = useReducer(reducer, initial, initi);
  return (
    <>
      <h1>counter : {count}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
    </>
  );
};
