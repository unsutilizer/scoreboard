import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';

// export const Header = (props) => {
//   console.log(props);
//   //destruct assignment
//   const {title, players} = props;
//   return (
//     <header>
//       <Statistics players={players}/>
//       <h1>{title}</h1>
//       <Stopwatch />
//
//     </header>
//   );
// }
export const Header = ({title,players}) => {
 // console.log(props);
  //destruct assignment
  //const {title, players} = props;
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <Stopwatch />

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
}
Header.defaultProps ={
  title: 'Defualt Title',
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    id: PropTypes.number
  })),
}

