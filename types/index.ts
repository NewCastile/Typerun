export type GameState = "START" | "IDLE" | "END";

export interface AnswerItem {
  charCode: number;
  timeTaken: number;
  word: string;
}

export interface SearchError {
  message: string;
  name?: string;
}

export interface WordNotFoundError extends SearchError {
  word: string;
  title: string;
  resolution: string;
}

export interface WordFoundResponse {
  charCode: number;
  word: string;
  definition: string;
  example?: string;
}

export type SearchResult = WordNotFoundError | WordFoundResponse;

export type ResultItem = SearchResult | AnswerItem;

export interface Word {
  word: string;
  phonetic: string;
  phonetics: Array<Phonetic>;
  meanings: Array<Meaning>;
  license: License;
  sourceUrls: Array<string>;
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Array<Definition>;
  synonyms: Array<string>;
  antonyms: Array<string>;
}

export interface Definition {
  definition: string;
  synonyms: Array<string>;
  antonyms: Array<string>;
  example?: string;
}

export interface Phonetic {
  text: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}
