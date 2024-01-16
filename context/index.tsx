import { createContext, RefObject, SetStateAction } from "react";

import { GameState, AnswerItem } from "../types";

export const GameContext = createContext<{
  currentCharCode: number;
  setCurrentCharCode: React.Dispatch<SetStateAction<number>>;
  endCharCode: number;
  answer?: string | null;
  setAnswer: React.Dispatch<SetStateAction<string | null | undefined>>;
  answers: Array<AnswerItem>;
  setAnswers: React.Dispatch<SetStateAction<Array<AnswerItem>>>;
  gameState: GameState;
  setGameState: React.Dispatch<SetStateAction<GameState>>;
  wordInputRef?: RefObject<HTMLInputElement>;
}>({
  currentCharCode: 65,
  setCurrentCharCode: (): void => undefined,
  endCharCode: 90,
  answer: null,
  setAnswer: (): void => undefined,
  answers: [],
  setAnswers: (): void => undefined,
  gameState: "IDLE",
  setGameState: (): void => undefined,
  wordInputRef: undefined,
});
