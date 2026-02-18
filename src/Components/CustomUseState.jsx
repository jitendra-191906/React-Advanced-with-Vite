import { useReducer } from "react";

const useStatecus = (initialValue) => {
  const reducer = (state, action) => {
    if (typeof action === "function") {
      //function
      return action(state);
    }
    return action;
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const setState = (newValue) => {
    dispatch(newValue);
  };
  return [state, setState];
};

export const CustomUseState = () => {
  const [count, setcount] = useStatecus(0);
  return (
    <>
      <p>conunter :-{count}</p>
      <button onClick={() => setcount(count + 1)}> Increment</button>
      <button onClick={() => setcount(count - 1)}> decrement</button>{" "}
      <button onClick={() => setcount(0)}> reset</button>
      <button onClick={() => setcount((prev) => prev + 1)}>
        {" "}
        increment with function
      </button>
    </>
  );
};
