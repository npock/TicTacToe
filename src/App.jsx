import { useState } from "react";
import { Field, Information } from "./components";
import "./App.css";

const GameLayout = ({ state }) => {
  const resetGame = () => {
    state.setCurrentPlayer("X");
    state.setIsGameEnded(false);
    state.setField(["", "", "", "", "", "", "", "", ""]);
    state.setIsDraw(false);
  };

  return (
    <>
      <Information state={state}></Information>
      <Field state={state}></Field>
      <button onClick={resetGame.bind(null)}> Начать заоново</button>
    </>
  );
};

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  const state = {
    currentPlayer,
    setCurrentPlayer,
    isGameEnded,
    setIsGameEnded,
    isDraw,
    setIsDraw,
    field,
    setField,
  };

  return (
    <>
      <GameLayout state={state}></GameLayout>
    </>
  );
};
