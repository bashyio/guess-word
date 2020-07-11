import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWord } from "../actions";

import Loading from "./Loading";
import Game from "./Game";

const App = (props) => {
  const { word, fetchWord } = props;

  useEffect(() => {
    fetchWord();
  }, [fetchWord]);
  const renderGame = () => {
    if (word.length < 1) {
      return <Loading />;
    } else {
      return <Game word={word} />;
    }
  };
  return <div className="main">{renderGame()}</div>;
};

const mapStateToProps = (state) => {
  return { word: state.word };
};

export default connect(mapStateToProps, { fetchWord })(App);
