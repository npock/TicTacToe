import { Field, Information } from "./components";
import { store } from "./store";
import { useState } from "react";
import "./App.css";

const GameLayout = () => (
  <>
    <Information></Information>
    <Field></Field>
  </>
);

export const Game = () => {
  const [game, setGame] = useState(false);
  store.dispatch({ type: "render", payload: setGame });

  const resetGame = () => {
    setGame((prev) => !prev);
    store.dispatch({ type: "resetGame" });
  };

  return (
    <>
      <GameLayout setGame={setGame}></GameLayout>
      <button onClick={resetGame}> Начать заоново</button>
    </>
  );
};
