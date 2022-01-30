import React, { useReducer } from "react";

interface counterState {
  count: number;
}

interface counterAction {
  type: string;
  payload: number;
}
const initialState = { count: 0 };
const reducer = (state: counterState, action: counterAction) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement": {
      return { ...state, count: state.count - action.payload };
    }
    default:
      return state;
  }
};

export const Counter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      count:{state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement
      </button>
    </>
  );
};
