export class DictionaryError extends Error {
  resolution: string;
  constructor(title: string, message: string, resolution: string) {
    super(title);
    this.name = "DictionaryError";
    this.message = message;
    this.resolution = resolution;
  }
}

export const NO_ANSWER_ERROR = {
  title: "No Answer Provided.",
  message: "You didn't typed any word that starts with this letter.",
  resolution: "Stay calm next time.",
};

export const NO_DEFINITION_FOUND_ERROR = {
  title: "No Definitions Found.",
  message: "Sorry pal, we couldn't find definitions for the word you were looking for.",
  resolution: "Try looking for this word in https://dictionaryapi.dev.",
};

export const UNKWOWN_ERROR_RESPONSE = {
  title: "Unkwown Error.",
  message: "Sorry an error ocurred while getting the word definition.",
  resolution: "Try again.",
};

export const NO_ANSWER_PLACEHOLDER = "Unanswered";

export const ANSWER_LIMITED_TIME = 60000; // in miliseconds
