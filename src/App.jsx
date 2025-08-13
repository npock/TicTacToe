import { Field, Information } from "./components";
import { store } from "./store";
import { useState } from "react";
import "./App.css";

const GameLayout = () => (
  <>
    <Information />
    <Field />
  </>
);

export const Game = () => {
  const [, setGame] = useState(false);
  store.dispatch({ type: "RERENDER", payload: setGame });

  const resetGame = () => {
    store.getState().render((prev) => !prev);
    store.dispatch({ type: "RESET_GAME" });
  };

  return (
    <>
      <GameLayout />
      <button onClick={resetGame}>Начать заоново</button>
    </>
  );
};
