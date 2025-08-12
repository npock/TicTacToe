export const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: ["", "", "", "", "", "", "", "", ""],
  render: "",
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "setCurrentPlayer": {
      return { ...state, currentPlayer: payload };
    }
    case "setIsGameEnded": {
      return { ...state, isGameEnded: payload };
    }
    case "setIsDraw": {
      return { ...state, isDraw: payload };
    }
    case "setField": {
      return { ...state, field: payload };
    }
    case "resetGame": {
      return initialState;
    }
    case "render": {
      return { ...state, render: payload };
    }
    default:
      return state;
  }
};
