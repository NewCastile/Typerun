/** @format */

import { createContext, SetStateAction } from "react"
import { GameState, AnswerItem } from "../../types"

export const GameContext = createContext<{
	currentCharCode: number
	setCurrentCharCode: React.Dispatch<SetStateAction<number>>
	answer: string
	setAnswer: React.Dispatch<SetStateAction<string>>
	answers: AnswerItem[]
	setAnswers: React.Dispatch<SetStateAction<AnswerItem[]>>
	gameState: GameState
	setGameState: React.Dispatch<SetStateAction<GameState>>
}>({
	currentCharCode: 65,
	setCurrentCharCode: (): void => {},
	answer: "",
	setAnswer: (): void => {},
	answers: [],
	setAnswers: (): void => {},
	gameState: "IDLE",
	setGameState: (): void => {},
})
