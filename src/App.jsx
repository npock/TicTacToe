import { Field, Information } from "./components";
//import { store } from "./store";
import { useDispatch } from "react-redux";
//import { useState } from "react";
import "./App.css";

const GameLayout = () => (
  <>
    <Information />
    <Field />
  </>
);

export const Game = () => {
  const dispatch = useDispatch();
  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <>
      <GameLayout />
      <button onClick={resetGame}>Начать заоново</button>
    </>
  );
};
