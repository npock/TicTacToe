import { store } from "../store";

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => (
  <>
    <h1>
      {isGameEnded
        ? `Победа:${currentPlayer}`
        : isDraw
        ? `Ничья`
        : `Ход:${currentPlayer}`}
    </h1>
  </>
);

export const Information = () => {
  const { currentPlayer, isGameEnded, isDraw } = store.getState();

  return (
    <>
      <InformationLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      ></InformationLayout>
    </>
  );
};
