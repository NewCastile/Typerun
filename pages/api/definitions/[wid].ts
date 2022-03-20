/** @format */

import type { NextApiRequest, NextApiResponse } from "next"
import { ResponseData } from "../../../types"

const OXFORD_APP_ID = process.env.OXFORD_APP_ID as string
const OXFORD_API_KEY = process.env.OXFORD_API_KEY as string

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { wid } = req.query
	const response = await fetch(
		`https://od-api.oxforddictionaries.com:443/api/v2/entries/es/${wid}?strictMatch=true`,
		{
			headers: {
				app_id: OXFORD_APP_ID,
				app_key: OXFORD_API_KEY,
			},
		}
	)
		.then((res) => res.json())
		.catch((reason) => console.error(reason))
	if (response.error)
		return res
			.status(400)
			.json({ word: wid as string, definition: "Palabra no encontrada" })
	const definition: string =
		response.results[0].lexicalEntries[0].entries[0].senses[0].definitions
	res.status(200).json({ word: response.word as string, definition })
}
