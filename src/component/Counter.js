import React from 'react';

export class Counter extends React.Component {
  state = {
    score: 0
  }
  constructor(props) {
    super(props);
  }
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
