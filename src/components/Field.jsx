import { store } from "../store";

const FieldLayout = ({ field, handleClickField, checkWin }) => (
  <>
    <div className="field">
      {field.map((item, index) => {
        return (
          <div
            key={index}
            className="button"
            onClick={() => handleClickField(index, checkWin)}
          >
            {item}
          </div>
        );
      })}
    </div>
  </>
);

export const Field = () => {
  const { field, currentPlayer, render, isGameEnded, isDraw } =
    store.getState();

  const handleClickField = (index, checkWin) => {
    const newField = [...field];
    if (newField[index] === "") {
      newField[index] = currentPlayer;
    }

    const spaces = newField.filter((item) => item === "").length;

    const win = checkWin(newField, currentPlayer);
    if (win) {
      store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
    } else if (win === false && spaces === 0) {
      store.dispatch({ type: "SET_IS_DRAW", payload: true });
    } else if (field[index] === "") {
      store.dispatch({
        type: "SET_CURRENT_PLAYER",
        payload: currentPlayer === "X" ? "0" : "X",
      });
    }
    store.dispatch({
      type: "SET_FIELD",
      payload: newField,
    });
    if (!isDraw && !isGameEnded) {
      render((prev) => !prev);
    }
  };

  const checkWin = (fields, currentPlayer) => {
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
  };

  return (
    <FieldLayout
      field={field}
      handleClickField={handleClickField}
      checkWin={checkWin}
    />
  );
};
