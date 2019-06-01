const playerInitialState = {
  title: 'Redux Scoreboard',
  players: [
    {name: 'LDK1', score: 0, id: 1},
    {name: 'LDK2', score: 0, id: 2},
    {name: 'LDK3', score: 0, id: 3},
    {name: 'LDK4', score: 0, id: 4}
  ]
}

export const playerReducer = (state=playerInitialState, action) => {
  return state;
}