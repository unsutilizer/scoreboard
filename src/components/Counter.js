import React from 'react';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
        <span className='counter-score'>{this.props.score}</span>
        {/*<span className='counter-score'>{this.props.score}</span>*/}
        <button className='counter-action increment' onClick={() => this.props.changeScore(this.props.id, +1)}> +</button>
        {/*//onClick: 브라우저 추상화 this.incrementScore()안되고, function definition와야*/}
      </div>
    );
  }


}
