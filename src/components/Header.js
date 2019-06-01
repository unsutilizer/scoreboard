import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

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