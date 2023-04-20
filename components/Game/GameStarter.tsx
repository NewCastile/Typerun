/** @format */

import { RefObject, useContext } from "react"
import { GameContext } from "./GameContext"
import TimeSpend from "../TimeSpend"
import Queue from "../Queue"

export default function GameStarter({
	wordInput,
}: {
	wordInput: RefObject<HTMLInputElement>
}) {
	const { currentCharCode, gameState, setAnswer } = useContext(GameContext)
	return (
		<div>
			<div className='w-full animated fade-in fast flex flex-col justify-center items-center text-2xl space-x-0 xl:space-x-10 xl:flex-row space-y-4 xl:space-y-0'>
				<div className='h-max xl:h-[360px] flex flex-col justify-center items-center space-y-2'>
					<div className='neu-concave flex flex-row justify-center rounded-full w-40 h-40'>
						<span className='self-center text-8xl font-extrabold'>
							{String.fromCharCode(currentCharCode)}
						</span>
					</div>
					<TimeSpend />
					{gameState === "START" && (
						<input
							className='mb-2 w-[15ch] xl:w-[20ch]'
							ref={wordInput}
							autoFocus
							type={"text"}
							color={"black"}
							maxLength={12}
							onKeyUp={(event) => {
								if (event.code === "Enter") {
									const introducedWord = event.currentTarget.value
									const introducedWordFirstChar = introducedWord
										.toUpperCase()
										.charCodeAt(0)
									console.log(`intro ${introducedWordFirstChar}`)
									console.log(`current ${currentCharCode}`)
									if (wordInput.current) {
										if (introducedWordFirstChar !== currentCharCode) {
											wordInput.current.value = ""
											return
										} else {
											setAnswer(event.currentTarget.value)
										}
									}
								}
							}}
						/>
					)}
				</div>
				<Queue />
			</div>
			<span className='mt-10 block text-center text-2xl'>
				Espacio para empezar
			</span>
			<span className='mt-2 block text-center text-2xl'>
				Escape para reiniciar
			</span>
		</div>
	)
}
