const InformationLayout = ({ state }) => {
  return (
    <>
      <h1>
        {state.isGameEnded
          ? `Победа:${state.currentPlayer}`
          : state.isDraw
          ? `Ничья`
          : `Ход:${state.currentPlayer}`}
      </h1>
    </>
  );
};

export const Information = ({ state }) => {
  return (
    <>
      <InformationLayout state={state}></InformationLayout>
    </>
  );
};
