import React from 'react';

export const Header = (props) => {
  console.log(props);
  //destruct assignment
  const {title, totalPlayers} = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className='stats'>Players: {totalPlayers}</span>
    </header>
  );
}