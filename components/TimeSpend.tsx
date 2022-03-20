/** @format */

import { useContext, useEffect, useState } from "react"
import { GameContext } from "./Game/GameContext"

export default function TimeSpend() {
	const { setCurrentCharCode, currentCharCode, gameState, answer, setAnswers } =
		useContext(GameContext)

	const [timeSpend, setTimeSpend] = useState<number>(0)

	useEffect(() => {
		const charInterval = setInterval(() => {
			setTimeSpend((old) => old + 100)
		}, 100)
		if (gameState === "END" || gameState === "IDLE") {
			clearTimeout(charInterval)
			setTimeSpend(0)
		}
		return () => {
			clearTimeout(charInterval)
		}
	}, [gameState])

	useEffect(() => {
		if (timeSpend >= 6000) {
			setAnswers((old) =>
				[
					{
						charCode: currentCharCode,
						timeTaken: timeSpend,
						word: "Sin respuesta",
					},
				].concat(old)
			)
			setTimeSpend(0)
			setCurrentCharCode((old) => old + 1)
		}
	}, [timeSpend])

	useEffect(() => {
		if (answer.length) {
			setAnswers((old) =>
				[
					{
						charCode: currentCharCode,
						timeTaken: timeSpend,
						word: answer,
					},
				].concat(old)
			)
			setTimeSpend(0)
		}
	}, [answer])

	return (
		<span className='w-[20ch] text-center p-3 flex flex-col justify-center items-center'>
			Tiempo transcurrido:{" "}
			<span className='block w-[4ch] self-center'>{timeSpend}</span> segundos
		</span>
	)
}
