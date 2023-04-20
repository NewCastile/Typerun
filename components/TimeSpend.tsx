/** @format */

import { useContext, useEffect, useState } from "react"
import { GameContext } from "./Game/GameContext"

export default function TimeSpend() {
	const { setCurrentCharCode, currentCharCode, gameState, answer, setAnswers } =
		useContext(GameContext)

	const [timeSpendInDs, setTimeSpendInDs] = useState<number>(0)
	const [timeSpend, setTimeSpend] = useState<string>("")

	useEffect(() => {
		const charInterval = setInterval(() => {
			setTimeSpendInDs((old) => old + 1)
		}, 100)
		if (gameState === "END" || gameState === "IDLE") {
			clearTimeout(charInterval)
			setTimeSpendInDs(0)
		}
		return () => {
			clearTimeout(charInterval)
		}
	}, [gameState])

	useEffect(() => {
		if (timeSpendInDs >= 900) {
			setAnswers((old) =>
				[
					{
						charCode: currentCharCode,
						timeTaken: timeSpendInDs,
						word: "Sin respuesta",
					},
				].concat(old)
			)
			setTimeSpendInDs(0)
			setCurrentCharCode((old) => old + 1)
			return
		}
	}, [timeSpendInDs])

	useEffect(() => {
		const decisecondPassed = timeSpendInDs % 10 === 0 ? 0 : timeSpendInDs % 10
		const secondsPassed = timeSpendInDs >= 600 ? Math.floor((timeSpendInDs % 600)/10) : Math.floor(timeSpendInDs / 10) 
		const minutesPassed = Math.floor(timeSpendInDs / 600)
		const secondsPassedString =
			secondsPassed < 10 ? `0${secondsPassed}` : `${secondsPassed}`
		const minutesPassedString =
			minutesPassed < 10 ? `0${minutesPassed}` : `${minutesPassed}`
		const dsPassedString =
			decisecondPassed < 10 ? `0${decisecondPassed}` : `${decisecondPassed}`
		setTimeSpend(`${minutesPassedString}:${secondsPassedString}:${dsPassedString}`)
		
	}, [timeSpendInDs])

	useEffect(() => {
		const timeSpendInSeconds = timeSpendInDs / 10
		if (answer.length) {
			setAnswers((old) =>
				[
					{
						charCode: currentCharCode,
						timeTaken: timeSpendInSeconds,
						word: answer,
					},
				].concat(old)
			)
			setTimeSpendInDs(0)
		}
	}, [answer])

	return (
		<>
			<span className='w-[20ch] text-center'>
				Tiempo transcurrido
			</span>
			<span className='w-[8ch] text-center'>
				{timeSpend}
			</span>
		</>
	)
}
