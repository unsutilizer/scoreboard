import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";
export const Counter = ({changeScore, id, score}) =>
  (
    <div className='counter'>
      <button className='counter-action decrement' onClick={() => changeScore(id, -1)}> -</button>
      <span className='counter-score'>{score}</span>
      {/*<span className='counter-score'>{score}</span>*/}
      <button className='counter-action increment' onClick={() => changeScore(id, +1)}> +</button>
      {/*//onClick: 브라우저 추상화 this.incrementScore()안되고, function definition와야*/}
    </div>
  );

Counter.propTypes = {
  changeScore: PropTypes.func,
  score: PropTypes.number,
  id: PropTypes.number
}

//id, score 를subscribe : store로부터 받는 것이 아니라, app으로부터 내려받아야 하므로, (plyaer가 store로부터 받으면 누구인지 모른다)..그냥둔다

const mapActionToProps = (dispatch) => ({
  changeScore: (id, delta) => dispatch(changeScore(id, delta)),
})

export default connect(null, mapActionToProps)(Counter);

// export class Counter extends React.Component {
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div className='counter'>
//         <button className='counter-action decrement' onClick={() => changeScore(id, -1)}> -</button>
//         <span className='counter-score'>{score}</span>
//         {/*<span className='counter-score'>{score}</span>*/}
//         <button className='counter-action increment' onClick={() => changeScore(id, +1)}> +</button>
//         {/*//onClick: 브라우저 추상화 this.incrementScore()안되고, function definition와야*/}
//       </div>
//     );
//   }
//
//
// }
