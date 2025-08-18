export const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: ["", "", "", "", "", "", "", "", ""],
  render: "",
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const SET_IS_GAME_ENDED = "SET_IS_GAME_ENDED";
  const SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER";
  const SET_IS_DRAW = "SET_IS_DRAW";
  const SET_FIELD = "SET_FIELD";
  const RESET_GAME = "RESET_GAME";
  const RERENDER = "RERENDER";
  switch (type) {
    case SET_CURRENT_PLAYER: {
      return { ...state, currentPlayer: payload };
    }
    case SET_IS_GAME_ENDED: {
      return { ...state, isGameEnded: payload };
    }
    case SET_IS_DRAW: {
      return { ...state, isDraw: payload };
    }
    case SET_FIELD: {
      return { ...state, field: payload };
    }
    case RESET_GAME: {
      return initialState;
    }
    default:
      return state;
  }
};
