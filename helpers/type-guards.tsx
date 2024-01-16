import { Word, WordFoundResponse, WordNotFoundError } from "../types";

export const instanceOfWordArray = (object: undefined | Array<Word>): object is Array<Word> => {
  return Array.isArray(object) && "sourceUrls" in object[0];
};

export const instanceOfWordNotFoundError = (object: any): object is WordNotFoundError => {
  return "title" in object;
};

export const instanceOfWordFoundResponse = (object: any): object is WordFoundResponse => {
  return "definition" in object;
};
