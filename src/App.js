import React from 'react';
import './App.css';
//React Element

const Header = (props) => {
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

const Player = (props) => (

  <div className='player'>
    <span className='player-name'>
      <button className='remove-player' onClick={() => props.removePlayer(props.id)}>x</button>

    </span>
    <span className='player-name'>{props.name}</span>
    <Counter/>
  </div>
);
// const Player = (props) => (
//
//   <div className='player'>
//     <span className='player-name'>{props.name}</span>
//     <Counter score={props.score}/>
//   </div>
// );

class Counter extends React.Component {
  state = {
    score: 0
  }

//바인딩
  constructor(props) {
    super(props);
    // this.incrementScore = this.incrementScore.bind(this);
  }

  // incrementScore = () => {
  //   //arrow 펑션안의 this는 lexical this로 --> 바인드 불필요
  //   console.log(this); //잘안찍히며, 그래서 바인드 하는 것
  //   // 1. state를 변경하는 유일한 방법임 "모델및 ui 동시 변경위해
  //   // this.state.score +=1;  안됨
  //   //2. merge 된다. :   기존 속성은 그대로 유지
  //   //3. 비동기로처리된다 : 클릭시 큐에 넣어놓았다가 나중에 처리
  //   // this.setState({score: this.state.score +1});
  //   // json객체 리턴이므로, {}가 먼저오면 함수본문으로 인식함 ()로묶어야
  //   this.setState(prevState => ({
  //     score: prevState.score + 1
  //   }));
  // }
  //
  // decrementScore = () => {
  //   //arrow 펑션안의 this는 lexical this로 --> 바인드 불필요
  //   console.log(this); //잘안찍히며, 그래서 바인드 하는 것
  //   // 1. state를 변경하는 유일한 방법임 "모델및 ui 동시 변경위해
  //   // this.state.score +=1;  안됨
  //   //2. merge 된다. :   기존 속성은 그대로 유지
  //   //3. 비동기로처리된다 : 클릭시 큐에 넣어놓았다가 나중에 처리
  //   // this.setState({score: this.state.score +1});
  //   // json객체 리턴이므로, {}가 먼저오면 함수본문으로 인식함 ()로묶어야
  //   this.setState(prevState => ({
  //     score: prevState.score - 1
  //   }));
  // }

  changeScore = (delta) => {
    //arrow 펑션안의 this는 lexical this로 --> 바인드 불필요
    console.log(this); //잘안찍히며, 그래서 바인드 하는 것
    // 1. state를 변경하는 유일한 방법임 "모델및 ui 동시 변경위해
    // this.state.score +=1;  안됨
    //2. merge 된다. :   기존 속성은 그대로 유지
    //3. 비동기로처리된다 : 클릭시 큐에 넣어놓았다가 나중에 처리
    // this.setState({score: this.state.score +1});
    // json객체 리턴이므로, {}가 먼저오면 함수본문으로 인식함 ()로묶어야
    this.setState(prevState => ({
      score: prevState.score + delta
    }));
  }

  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={() => this.changeScore(-1)}> -</button>
        <span className='counter-score'>{this.state.score}</span>
        {/*<span className='counter-score'>{this.props.score}</span>*/}
        <button className='counter-action increment' onClick={() => this.changeScore(+1)}> +</button>
        {/*//onClick: 브라우저 추상화 this.incrementScore()안되고, function definition와야*/}
      </div>
    );
  }
}

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