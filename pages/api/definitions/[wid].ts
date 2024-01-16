import type { NextApiRequest, NextApiResponse } from "next";

import { SearchResult } from "../../../types";
import { instanceOfWordArray, instanceOfWordNotFoundError } from "../../../helpers/type-guards";
import { UNKWOWN_ERROR_RESPONSE, NO_DEFINITION_FOUND_ERROR } from "../../../constants";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SearchResult | { message: string }>,
) => {
  const { wid } = req.query;

  if (!wid) {
    return res.status(500).json({ message: "Missing 'wid' request parameter" });
  }

  if (Array.isArray(wid)) {
    return res.status(400).json({ message: "Request parameter is an array of strings" });
  }

  const charCode = wid[0].charCodeAt(0);

  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wid}`);

  const responseData = await response.json();

  if (instanceOfWordNotFoundError(responseData)) {
    return res.status(400).json({ ...NO_DEFINITION_FOUND_ERROR, word: wid });
  }

  if (!response.ok) {
    return res.status(400).json({ ...UNKWOWN_ERROR_RESPONSE, word: wid });
  }

  if (instanceOfWordArray(responseData)) {
    const [{ word, meanings }] = responseData;
    const [{ definitions }] = meanings;
    const [{ definition, example }] = definitions;

    return res.status(200).json({ word, charCode, definition, example });
  }
};

export default handler;
