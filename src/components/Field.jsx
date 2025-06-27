const FieldLayout = ({ state }) => {
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

  const handleClickField = (index) => {
    const newField = [...state.field];
    newField[index] = state.currentPlayer;
    const spaces = newField.filter((item) => item === "").length;

    const win = checkWin(newField, state.currentPlayer);
    if (win) {
      state.setIsGameEnded(true);
    } else if (win === false && spaces === 0) {
      state.setIsDraw(true);
    } else {
      state.setCurrentPlayer((prevState) => (prevState === "X" ? "0" : "X"));
    }
    state.setField(newField);
  };

  return (
    <>
      <div className="field">
        {state.field.map((item, index) => {
          return (
            <div
              key={index}
              className="button"
              onClick={handleClickField.bind(null, index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Field = ({ state }) => {
  return (
    <>
      <FieldLayout state={state}></FieldLayout>
    </>
  );
};
