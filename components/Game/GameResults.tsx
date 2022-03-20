/** @format */

import { useContext } from "react"
import { msToSeconds } from "."
import { GameContext } from "./GameContext"
import LoadingIcon from "../LoadingIcon"
import useDefinitions from "../../hooks/useDefinitions"

export default function GameResults() {
	const { answers, setGameState } = useContext(GameContext)
	const [{ data, isLoading, isRetrying, error }, definitonsDispatcher] =
		useDefinitions(answers)

	const totalTimeTaken = msToSeconds(
		answers.map((ans) => ans.timeTaken).reduce((prev, curr) => prev + curr)
	)
	const capitalizeFirstLetter = (word: string) => {
		return `${word[0].toUpperCase()}${word.slice(1)}`
	}
	if (isLoading)
		return (
			<div className='w-full h-[800px] min-h-[200px] flex flex-col justify-center items-center'>
				<div className='relative w-1/2 h-max group'>
					<div className='absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r from-[#0091ff] to-[#ff0000] opacity-50 group-hover:opacity-60 transition duration-900 rounded-xl blur mb-6'></div>
					<div className='transform transition-all rounded-xl w-full p-1 mb-6 '>
						<div className='flex flex-col justify-center items-center text-2xl space-y-2 bg-[#dedede] rounded-lg p-4'>
							<div className='self-start hidden md:block'>
								<strong>Cargando resultados, por favor espere...</strong>
							</div>
							<div>
								<LoadingIcon />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	if (isRetrying) return <div>Recargando...</div>
	if (error)
		return (
			<div>
				<p>Ha ocurrido un error: {error}</p>
				<button
					onClick={() => {
						definitonsDispatcher({ type: "RETRY" })
					}}>
					Reintentar
				</button>
			</div>
		)
	if (!data || data === undefined) return null
	return (
		<div className='h-[800px] w-full self-center md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center text-gray-600'>
			<div className='h-[600px] flex flex-col justify-center items-center space-y-5'>
				<strong className='text-center text-3xl font-extrabold mb-10'>
					Registro de partida
				</strong>
				<div className='neu-queue w-full min-h-[200px] h-[400px] py-5 overflow-y-scroll flex flex-col justify-start items-center space-y-4 rounded-md border-2 border-[#c4c4c4]'>
					{data.map((ans, ansIdx) => {
						const timeTakenInSeconds = msToSeconds(answers[ansIdx].timeTaken)
						return (
							<div key={ansIdx} className='relative w-11/12 h-max group'>
								<div className='absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r from-[#0091ff] to-[#ff0000] opacity-50 group-hover:opacity-60 transition duration-900 rounded-xl blur mb-6'></div>
								<div className='transform transition-all rounded-xl w-full p-1 mb-6 '>
									<div className='flex flex-col justify-center items-start text-xl space-y-2 bg-[#dedede] rounded-lg p-4'>
										<strong>{capitalizeFirstLetter(ans.word)}</strong>
										<span>
											Tiempo trancurrido: <strong>{timeTakenInSeconds}</strong>{" "}
											segundos
										</span>
										<p className='text-left md:text-justify'>
											{ans.definition}
										</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className='flex flex-col items-center space-y-5 text-3xl text-[#f75a5a]'>
				<span className='block'>Tiempo total: </span>
				<strong className='text-[#ff3434]'>{totalTimeTaken}</strong>
				<span className='block'>segundos</span>
				<button
					className='w-[120px] h-[60px] border-2 border-[#f75a5a] rounded-lg text-2xl'
					onClick={() => setGameState("IDLE")}>
					Go back
				</button>
			</div>
		</div>
	)
}
