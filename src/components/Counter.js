import React from 'react';
import PropTypes from 'prop-types';
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
