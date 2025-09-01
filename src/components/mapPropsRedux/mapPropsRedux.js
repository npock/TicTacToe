export const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch({ type: "RESET_GAME" }),
  setIsGameEnded: () => dispatch({ type: "SET_IS_GAME_ENDED", payload: true }),
  setIsDraw: () => dispatch({ type: "SET_IS_DRAW", payload: true }),
  setCurrentPlayer: (currentPlayer) =>
    dispatch({
      type: "SET_CURRENT_PLAYER",
      payload: currentPlayer === "X" ? "0" : "X",
    }),
  setField: (newField) =>
    dispatch({
      type: "SET_FIELD",
      payload: newField,
    }),
});
export const mapStateToProps = (state) => ({
  isGameEnded: state.isGameEnded,
  currentPlayer: state.currentPlayer,
  isDraw: state.isDraw,
  field: state.field,
});
