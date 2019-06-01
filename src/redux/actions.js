import {ADD_PLAYER, CHANGE_SCORE} from "./reducers/actionType";

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
})

export const changeScore = (id, delta) => ({
  type: CHANGE_SCORE,
  payload:{id,
  delta}
})