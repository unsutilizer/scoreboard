import React from 'react';

export class AddPlayerForm extends React.Component {
  textInput = React.createRef();
  
  constructor(props) {
    super(props);
  }

  
  handleSubmit = (e) => {
    //기본이벤트(새로고침)막기
    e.preventDefault();
    //이벤트 버블링 막기  e.stopPropagation();
    //this.textInput.current = document.getElementById(id)
    this.props.addPlayer(this.textInput.current.value);
    //reset(html dom submit object 중  submit 가진 모든 값을 초기화)
    //react 에서는 vue 와달리 ref를 많이 쓰지는 않음
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" ref ={this.textInput} 
              ></input>
        <input type="submit" value="Add Player"></input>

      </form>
    );
  }
}


// export class AddPlayerForm extends React.Component {
//   textInput = React.createRef();
//   state = {
//     value: ''
//   }
//
//   constructor(props) {
//     super(props);
//   }
//
//   handleChange = (e) => {
//     this.setState({value: e.target.value})
//   }
//
//   handleSubmit = (e) => {
//     //기본이벤트(새로고침)막기
//     e.preventDefault();
//     //이벤트 버블링 막기  e.stopPropagation();
//     this.props.addPlayer(this.state.value);
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" placeholder="enter a player's name" value={this.state.value}
//                onChange={this.handleChange}></input>
//         <input type="submit" value="Add Player"></input>
//
//       </form>
//     );
//   }
// }
