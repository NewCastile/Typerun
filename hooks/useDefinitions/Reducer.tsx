/** @format */

import { FetchAction, FetchState } from "../../types"

export const DefinitonsReducer = function (
	state: FetchState,
	action: FetchAction
) {
	switch (action.type) {
		case "ERROR":
			return {
				...state,
				error: action.payload,
				isLoading: false,
				isRetrying: false,
			}
		case "SUCCESS":
			return {
				data: action.payload,
				error: null,
				isLoading: false,
				isRetrying: false,
			}
		case "LOADING":
			return {
				data: null,
				error: null,
				isLoading: true,
				isRetrying: false,
			}
		case "RETRY":
			return {
				data: null,
				error: null,
				isLoading: false,
				isRetrying: true,
			}
		default:
			return state
	}
}
