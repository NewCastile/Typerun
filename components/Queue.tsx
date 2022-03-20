/** @format */

import { useContext } from "react"
import { msToSeconds } from "./Game"
import { GameContext } from "./Game/GameContext"

export default function Queue() {
	const { answers } = useContext(GameContext)

	return (
		<div className='h-max xl:h-full flex flex-row xl:flex-col justify-center items-center'>
			<div className='neu-queue w-64 h-[200px] xl:h-[400px] py-5 overflow-y-scroll flex flex-col justify-start items-center space-y-4 rounded-md border-2 border-[#c4c4c4]'>
				{answers.map((answer, answerIdx) => {
					const timeTakenInSeconds = msToSeconds(answer.timeTaken)
					return (
						<div
							className='w-11/12 flex flex-col justify-center items-start p-5 space-y-2 rounded-md border-2 border-[#c4c4c4]'
							key={answerIdx}>
							<span className='text-[18px]'>
								{String.fromCharCode(answer.charCode)}
							</span>
							<span className='text-3xl'>{answer.word}</span>
							<span className='text-sm'>
								Tiempo transcurrido: <strong>{timeTakenInSeconds}</strong>{" "}
								segundos
							</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}
