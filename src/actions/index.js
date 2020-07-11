import puzzle from "../apis/puzzle";

export const fetchWord = () => async (dispatch) => {
  const response = await puzzle.get("/puzzle?wordCount=1");

  dispatch({ type: "FETCH_WORD", payload: response.data.puzzle });
};

export const gamePlay = (word) => {
  return {
    type: "LOADGAME",
    payload: word,
  };
};

export const keyPress = (game) => {
  return {
    type: "KEYPRESS",
    payload: game,
  };
};
