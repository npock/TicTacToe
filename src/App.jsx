// import { useState } from "react";
// import { Field, Information } from "./components";
// import "./App.css";
import { Component } from "react";

// const GameLayout = ({ state }) => {
//   const resetGame = () => {
//     state.setCurrentPlayer("X");
//     state.setIsGameEnded(false);
//     state.setField(["", "", "", "", "", "", "", "", ""]);
//     state.setIsDraw(false);
//   };

//   return (
//     <>
//       <Information state={state}></Information>
//       <Field state={state}></Field>
//       <button onClick={resetGame.bind(null)}> Начать заоново</button>
//     </>
//   );
// };

// export const Game = () => {
//   const [currentPlayer, setCurrentPlayer] = useState("X");
//   const [isGameEnded, setIsGameEnded] = useState(false);
//   const [isDraw, setIsDraw] = useState(false);
//   const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
//   const state = {
//     currentPlayer,
//     setCurrentPlayer,
//     isGameEnded,
//     setIsGameEnded,
//     isDraw,
//     setIsDraw,
//     field,
//     setField,
//   };

//   return (
//     <>
//       <GameLayout state={state}></GameLayout>
//     </>
//   );
// };

export class OldApp extends Component {
  constructor() {
    super();

    this.state = {
      currentPlayer: "X",
      isGameEnded: false,
      isDraw: false,
      field: ["", "", "", "", "", "", "", "", ""],
    };
  }

  resetGame() {
    this.setState({
      currentPlayer: "X",
      isGameEnded: false,
      isDraw: false,
      field: ["", "", "", "", "", "", "", "", ""],
    });
  }

  checkWin(fields, currentPlayer) {
    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return WIN_PATTERNS.some((pat) => {
      return pat.every((index) => {
        return fields[index] === currentPlayer;
      });
    });
  }

  handleClickField(index) {
    const newField = [...this.state.field];

    if (!this.state.isGameEnded && !this.state.isDraw) {
      console.log("do");
      newField[index] = this.state.currentPlayer;
    }

    const spaces = newField.filter((item) => item === "").length;

    const win = this.checkWin(newField, this.state.currentPlayer);

    // if (!this.state.isDraw && !this.state.isGameEnded) {
    //   this.setState({
    //     ...this.state,
    //     currentPlayer: this.state.currentPlayer === "X" ? "0" : "X",
    //     field: newField,
    //   });
    // }

    if (win) {
      this.setState({ ...this.state, isGameEnded: true, field: newField });
      return;
    } else if (win === false && spaces === 0) {
      this.setState({ ...this.state, isDraw: true, field: newField });
      return;
    }
    this.setState({
      ...this.state,
      currentPlayer: this.state.currentPlayer === "X" ? "0" : "X",
      field: newField,
    });
  }

  render() {
    return (
      <>
        <h1>
          {this.state.isGameEnded
            ? `Победа:${this.state.currentPlayer}`
            : this.state.isDraw
            ? `Ничья`
            : `Ход:${this.state.currentPlayer}`}
        </h1>

        <div className="field">
          {this.state.field.map((item, index) => {
            return (
              <div
                key={index}
                className="button"
                onClick={this.handleClickField.bind(this, index)}
              >
                {item}
              </div>
            );
          })}
        </div>

        <button onClick={this.resetGame.bind(this)}> Начать заоново</button>
      </>
    );
  }
}
