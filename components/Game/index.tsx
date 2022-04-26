/** @format */

import React, { useEffect, useRef, useState } from "react"
import { GameContext } from "./GameContext"
import GameResults from "./GameResults"
import GameStarter from "./GameStarter"
import { AnswerItem, GameState } from "../../types"

const Game = () => {
	const startingCharCode = useRef<number>(65)
	const endCharCode = useRef<number>(90)
	const [currentCharCode, setCurrentCharCode] = useState<number>(
		startingCharCode.current
	)
	const [gameState, setGameState] = useState<GameState>("IDLE")
	const [answer, setAnswer] = useState<string>("")
	const [answers, setAnswers] = useState<AnswerItem[]>([])
	const wordInputRef = useRef<HTMLInputElement>(null)

	const resetGame = () => {
		setCurrentCharCode(startingCharCode.current)
		setAnswers([])
		setAnswer("")
	}

	useEffect(() => {
		window.addEventListener("keyup", (e) => {
			if (e.code === "Space") {
				setGameState("START")
			}
			if (e.code === "Escape") {
				setGameState("IDLE")
			}
		})
	}, [])

	useEffect(() => {
		if (gameState === "START" || gameState === "IDLE") {
			resetGame()
		}
	}, [gameState])

	useEffect(() => {
		if (!answer.length || gameState === "END" || gameState === "IDLE") return
		if (currentCharCode >= endCharCode.current) {
			setCurrentCharCode(startingCharCode.current)
			setGameState("END")
			return
		}
		if (wordInputRef.current) {
			wordInputRef.current.value = ""
		}
		setCurrentCharCode((old) => old + 1)
	}, [answer])

	return (
		<GameContext.Provider
			value={{
				currentCharCode,
				setCurrentCharCode,
				answer,
				setAnswer,
				answers,
				setAnswers,
				gameState,
				setGameState,
			}}>
			<div className='max-h-max flex flex-row items-center justify-center w-full px-10 my-5 space-x-10'>
				{gameState === "END" ? (
					<GameResults />
				) : (
					<GameStarter wordInput={wordInputRef} />
				)}
			</div>
		</GameContext.Provider>
	)
}

export const msToSeconds = (miliseconds: number): number => {
	return miliseconds / 1000
}

export default Game
