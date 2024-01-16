import { WORDS } from "../../cypress/constants";

export const MOCK_DATA = WORDS.map((word, idx) => {
  return { word, timeTaken: (idx + 1) * 1000, definition: "Lorem ipsum" };
});
