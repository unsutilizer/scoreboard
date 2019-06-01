import {ADD_PLAYER, CHANGE_SCORE} from "./actionType";

const playerInitialState = {
  title: 'Redux Scoreboard',
  players: [
    {name: 'LDK1', score: 0, id: 1},
    {name: 'LDK2', score: 0, id: 2},
    {name: 'LDK3', score: 0, id: 3},
    {name: 'LDK4', score: 0, id: 4}
  ]
}

let maxId=4;
export const playerReducer = (state=playerInitialState, action) => {
  switch(action.type){
    case ADD_PLAYER :
      //새로운 객체,  deepcopy title은 변경 없지만, players는 변경,,,중첩
      return {
        ...state,
        players: [...state.players, {name: action.name, score:0, id: ++maxId}]
      }
    case CHANGE_SCORE:
      state.players.forEach(item => {
        if(item.id ===action.payload.id){
          item.score +=action.payload.delta;
        }
      })
      return {
        ...state,
        players: [...state.players]//deepcopy
      }
      default:
      return state;
  }


}