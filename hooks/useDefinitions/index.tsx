/** @format */

import { useEffect, useReducer } from "react"
import { DefinitonsReducer } from "./Reducer"
import { AnswerItem, ResponseData } from "../../types"

export default function useDefinitions(answers: AnswerItem[]) {
	const [state, dispatcher] = useReducer(DefinitonsReducer, {
		data: [],
		isLoading: false,
		error: null,
		isRetrying: false,
	})
	const fetchDefinitions = () => {
		const definitions: Promise<ResponseData>[] = answers.map((answer) => {
			return answer.word !== "Sin respuesta"
				? fetch(`api/definitions/${answer.word}`)
						.then((res) => res.json())
						.catch((reason) => {
							throw new Error(reason)
						})
				: new Promise((resolve) =>
						resolve({
							word: "Sin respuesta",
							definition: "Definición no encontrada",
						})
				  )
		})
		return definitions
	}
	useEffect(() => {
		const refetchDefinitions = async () => {
			try {
				const definitions = fetchDefinitions()
				Promise.all(definitions)
					.then((responses) =>
						dispatcher({ type: "SUCCESS", payload: responses })
					)
					.catch((reason) => {
						throw new Error(reason)
					})
			} catch (err) {
				console.error(err)
			}
		}
		if (state.isRetrying) refetchDefinitions()
	}, [state.isRetrying])

	useEffect(() => {
		const getDefinitions = async () => {
			dispatcher({ type: "LOADING" })
			try {
				const definitions = fetchDefinitions()
				Promise.all(definitions)
					.then((responses) =>
						dispatcher({ type: "SUCCESS", payload: responses })
					)
					.catch((reason) => {
						throw new Error(reason)
					})
			} catch (err) {
				console.error(err)
			}
		}
		getDefinitions()
	}, [])

	return [state, dispatcher] as const
}
