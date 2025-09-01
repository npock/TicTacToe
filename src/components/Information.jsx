// import { store } from "../store";
import { Component } from "react";
//import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { mapStateToProps } from "./mapPropsRedux/mapPropsRedux";

// const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => (
//   <>
//     <h1>
//       {isGameEnded
//         ? `Победа:${currentPlayer}`
//         : isDraw
//         ? `Ничья`
//         : `Ход:${currentPlayer}`}
//     </h1>
//   </>
// );

// export const Information = () => {
//   const currentPlayer = useSelector((state) => state.currentPlayer);
//   const isGameEnded = useSelector((state) => state.isGameEnded);
//   const isDraw = useSelector((state) => state.isDraw);

//   return (
//     <>
//       <InformationLayout
//         currentPlayer={currentPlayer}
//         isGameEnded={isGameEnded}
//         isDraw={isDraw}
//       ></InformationLayout>
//     </>
//   );
// };

class InformationClassContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>
          {this.props.isGameEnded
            ? `Победа:${this.props.currentPlayer}`
            : this.props.isDraw
            ? `Ничья`
            : `Ход:${this.props.currentPlayer}`}
        </h1>
      </>
    );
  }
}

export const InformationClass = connect(mapStateToProps)(
  InformationClassContainer
);
