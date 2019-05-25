import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

//React Element
const players = [
  {name: 'LDK', score: 30, id: 1},
  {name: 'HONG', score: 40, id: 2},
  {name: 'KIM', score: 50, id: 3},
  {name: 'PARK', score: 70, id: 4},
];




// const Player = (props) => (
//
//   <div className='player'>
//     <span className='player-name'>{props.name}</span>
//     <Counter score={props.score}/>
//   </div>
// );

class App extends React.Component {

  state = {
    players: [
      {name: 'LDK1', id: 1},
      {name: 'LDK2', id: 2},
      {name: 'LDK3', id: 3},
      {name: 'LDK4', id: 4}
    ]
  }
  //1) player 삭제 로직 선언
  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => ({
      // shallow comparison
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' totalPlayers={11}/>
        {/*<Player name='LDK1' score={50} />*/}
        {/*<Player name='LDK2' score={60} />*/}
        {/*<Player name='LDK3' score={70} />*/}
        {/*<Player name='LDK4' score={80} />*/}
        {
          // prop으로 삭제 넘겨줌
          this.state.players.map(player => <Player name={player.name} key={player.id} id={player.id}
                                                   removePlayer={this.handleRemovePlayer}/>)
        }
      </div>

    )
  }
}


// ReactDOM.render(<App initialPlayers={players} />, document.getElementById('root'));

export default App;