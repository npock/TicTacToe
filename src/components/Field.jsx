//import { store } from "../store";
import { Component } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { connect } from "react-redux";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "./mapPropsRedux/mapPropsRedux";

// const FieldLayout = ({ field, handleClickField, checkWin }) => (
//   <>
//     <div className="field">
//       {field.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className="button"
//             onClick={() => handleClickField(index, checkWin)}
//           >
//             {item}
//           </div>
//         );
//       })}
//     </div>
//   </>
// );

// export const Field = () => {
//   const dispatch = useDispatch();

//   const currentPlayer = useSelector((state) => state.currentPlayer);
//   const isGameEnded = useSelector((state) => state.isGameEnded);
//   const isDraw = useSelector((state) => state.isDraw);
//   const field = useSelector((state) => state.field);

//   const handleClickField = (index, checkWin) => {
//     const newField = [...field];
//     if (newField[index] === "") {
//       newField[index] = currentPlayer;
//     }

//     const spaces = newField.filter((item) => item === "").length;

//     const win = checkWin(newField, currentPlayer);
//     if (win) {
//       dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
//     } else if (win === false && spaces === 0) {
//       dispatch({ type: "SET_IS_DRAW", payload: true });
//     } else if (field[index] === "") {
//       dispatch({
//         type: "SET_CURRENT_PLAYER",
//         payload: currentPlayer === "X" ? "0" : "X",
//       });
//     }

//     if (!isDraw && !isGameEnded) {
//       dispatch({
//         type: "SET_FIELD",
//         payload: newField,
//       });
//     }
//   };

//   const checkWin = (fields, currentPlayer) => {
//     const WIN_PATTERNS = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     return WIN_PATTERNS.some((pat) => {
//       return pat.every((index) => {
//         return fields[index] === currentPlayer;
//       });
//     });
//   };

//   return (
//     <FieldLayout
//       field={field}
//       handleClickField={handleClickField}
//       checkWin={checkWin}
//     />
//   );
// };

class FieldClassContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleClickField(index, checkWin) {
    const newField = [...this.props.field];
    if (newField[index] === "") {
      newField[index] = this.props.currentPlayer;
    }

    const spaces = newField.filter((item) => item === "").length;

    const win = checkWin(newField, this.props.currentPlayer);

    if (win) {
      this.props.setIsGameEnded();
    } else if (win === false && spaces === 0) {
      this.props.setIsDraw();
    } else if (this.props.field[index] === "") {
      this.props.setCurrentPlayer(this.props.currentPlayer);
    }

    if (!this.props.isDraw && !this.props.isGameEnded) {
      this.props.setField(newField);
    }
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

  render() {
    return (
      <>
        <div className="field">
          {this.props.field.map((item, index) => {
            return (
              <div
                key={index}
                className="button"
                onClick={this.handleClickField.bind(
                  this,
                  index,
                  this.checkWin.bind(this)
                )}
              >
                {item}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export const FieldClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldClassContainer);
