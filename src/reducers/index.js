import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import wordReducer from "./wordReducer";

export default combineReducers({
  word: wordReducer,
  game: gameReducer,
});
