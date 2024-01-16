import { useEffect, useRef, useState } from "react";

import { AnswerItem, GameState } from "../../types";

const useGame = () => {
  const startingCharCode = useRef<number>(65);
  const endCharCode = useRef<number>(90);
  const [currentCharCode, setCurrentCharCode] = useState<number>(startingCharCode.current);
  const [gameState, setGameState] = useState<GameState>("IDLE");
  const [answer, setAnswer] = useState<string | null | undefined>(null);
  const [answers, setAnswers] = useState<Array<AnswerItem>>([]);
  const wordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.code === "Space") {
        setGameState("START");
      }
      if (e.code === "Escape") {
        setGameState("IDLE");
      }
    });
  }, []);

  const resetGame = () => {
    setAnswer(null);
    setAnswers([]);
    setCurrentCharCode(startingCharCode.current);
  };

  useEffect(() => {
    if (gameState === "IDLE" || gameState === "START") {
      resetGame();
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === "IDLE" || gameState === "END" || !answer || !answer.length) return;
    if (currentCharCode < endCharCode.current) {
      setCurrentCharCode((old) => old + 1);

      return;
    }
    if (currentCharCode <= endCharCode.current) {
      setGameState("END");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  return {
    startingCharCode,
    endCharCode,
    currentCharCode,
    setCurrentCharCode,
    gameState,
    setGameState,
    answer,
    setAnswer,
    answers,
    setAnswers,
    wordInputRef,
  } as const;
};

export default useGame;
