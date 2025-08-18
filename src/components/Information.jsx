// import { store } from "../store";
import { useSelector } from "react-redux";

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
  //const { currentPlayer, isGameEnded, isDraw } = store.getState();
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const isGameEnded = useSelector((state) => state.isGameEnded);
  const isDraw = useSelector((state) => state.isDraw);

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
