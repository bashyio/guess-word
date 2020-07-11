export default (state = [], action) => {
  switch (action.type) {
    case "LOADGAME":
      let iWord = action.payload.toUpperCase();
      let wordArray = [...iWord];
      let iletters = wordArray.filter(
        (e, index) => wordArray.indexOf(e) === index
      );
      return {
        word: iWord,
        letters: iletters,
        guessed: [],
        alltyped: [],
        attempt: wordArray.map((word) => "*").join(""),
        counter: iletters.length,
        cStatus: 1,
      };
    case "KEYPRESS":
      let key = action.payload;
      let {
        word,
        letters,
        guessed,
        counter,
        cStatus,
        alltyped,
        attempt,
      } = state;

      if (!alltyped.includes(key) && cStatus === 1) {
        alltyped.push(key);

        if (!guessed.includes(key) && letters.includes(key)) {
          guessed.push(key);
          attempt = [...word]
            .map((letter) => {
              if (guessed.includes(letter)) {
                return letter;
              }
              return "*";
            })
            .join("");
        } else {
          counter--;
        }
      }

      cStatus = letters.length === guessed.length ? 2 : 1;

      if (counter < 1) {
        cStatus = letters.length === guessed.length ? 2 : 3;
      }

      return {
        word,
        letters,
        guessed,
        alltyped,
        attempt,
        counter,
        cStatus,
      };

    default:
      return state;
  }
};
