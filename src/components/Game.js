import React, { useEffect } from "react";
import { connect } from "react-redux";
import { gamePlay, keyPress, fetchWord } from "../actions";
import Loading from "./Loading";

import Status from "./Status";

const App = (props) => {
  const { game, word, gamePlay, fetchWord, keyPress } = props;

  const restart = () => {
    fetchWord();
  };

  useEffect(() => {
    gamePlay(word);
  }, [gamePlay, word]);

  useEffect(() => {
    const onkeyPress = (e) => {
      if (
        (e.keyCode >= 97 && e.keyCode <= 122) ||
        (e.keyCode >= 65 && e.keyCode <= 90)
      ) {
        keyPress(e.key.toUpperCase());
      }
    };
    document.addEventListener("keypress", onkeyPress);

    return () => {
      document.removeEventListener("keypress", onkeyPress);
    };
  }, [keyPress, props]);

  if (!game.cStatus) {
    return <Loading />;
  }
  return (
    <div className="inner">
      <h1>Guess the Word</h1>
      <div className="guess">{game.attempt}</div>
      <div className="tries">{game.counter} tries left</div>
      <Status status={game.cStatus} word={word} counter={game.counter} />
      <div className="play">
        <button onClick={() => restart()}>Play Again!</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { game: state.game, word: state.word };
};

export default connect(mapStateToProps, { fetchWord, gamePlay, keyPress })(App);
