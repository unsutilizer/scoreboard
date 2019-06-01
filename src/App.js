import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

//React Element


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
      {name: 'LDK1', score: 0, id: 1},
      {name: 'LDK2', score: 0, id: 2},
      {name: 'LDK3', score: 0, id: 3},
      {name: 'LDK4', score: 0, id: 4}
    ]
  }

  maxId =4;
  //1) player 삭제 로직 선언
  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => ({
      // shallow comparison
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  handleChangeScore = (id, delta) => {
    console.log(id, delta);
    this.setState(prevState => {
      this.state.players.forEach(item => {
        if (item.id === id) {
          item.score += delta;
        }
      });
      return {
        players: [...prevState.players]
      }
    })
  }

  handleAddPlayer = (name) => {
    console.log(name);
    this.setState(prevState => ({
      players: [...prevState.players, {name:name, score:0, id: ++this.maxId}] //key와 value가 같으면, shorthand property라하여 하나는 생략가능
    }))
  }

  render() {
    return (
      <div className='scoreboard'>
        {/*<Header title='My Scoreboard' players={this.state.players}/>*/}
        <Header  players={this.state.players}/>
        {/*<Player name='LDK1' score={50} />*/}
        {/*<Player name='LDK2' score={60} />*/}
        {/*<Player name='LDK3' score={70} />*/}
        {/*<Player name='LDK4' score={80} />*/}
        {
          // prop으로 삭제 넘겨줌
          this.state.players.map(player => <Player name={player.name} key={player.id} id={player.id}
                                                   score={player.score} changeScore={this.handleChangeScore}
                                                   removePlayer={this.handleRemovePlayer}/>)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>

    )
  }
}


// ReactDOM.render(<App initialPlayers={players} />, document.getElementById('root'));

export default App;