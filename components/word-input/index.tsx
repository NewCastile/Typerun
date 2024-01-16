import { RefObject } from "react";

import useGameData from "../../hooks/use-game-data";

const WordInput = ({ wordInputRef }: { wordInputRef?: RefObject<HTMLInputElement> }) => {
  const {
    gameData: { currentCharCode, gameState, setAnswer },
  } = useGameData();

  return (
    <>
      {gameState === "START" && (
        <input
          ref={wordInputRef}
          autoFocus
          className={"mb-2 w-[15ch]"}
          color={"black"}
          data-testid={"word-input"}
          type={"text"}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              const introducedWord = event.currentTarget.value;
              const introducedWordFirstChar = introducedWord.toUpperCase().charCodeAt(0);

              if (wordInputRef && wordInputRef.current) {
                if (introducedWordFirstChar !== currentCharCode) {
                  wordInputRef.current.value = "";

                  return;
                } else {
                  setAnswer(event.currentTarget.value);
                  wordInputRef.current.value = "";
                }
              }
            }
          }}
        />
      )}
    </>
  );
};

export default WordInput;
