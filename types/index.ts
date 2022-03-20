/** @format */

export interface AnswerItem {
	charCode: number
	timeTaken: number
	word: string
}

export type GameState = "START" | "IDLE" | "END"

export type ResponseData = { word: string; definition: string }

export interface FetchState {
	data: ResponseData[] | null
	error: string | null
	isLoading: boolean
	isRetrying: boolean
}

export interface OnErrorAction {
	type: "ERROR"
	payload: string
}

export interface OnSuccessAction {
	type: "SUCCESS"
	payload: ResponseData[]
}

export interface OnFetchAction {
	type: "LOADING"
}

export interface OnRetryAction {
	type: "RETRY"
}

export type FetchAction =
	| OnSuccessAction
	| OnErrorAction
	| OnFetchAction
	| OnRetryAction
