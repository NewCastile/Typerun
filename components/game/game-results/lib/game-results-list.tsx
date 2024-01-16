import { aplhSortedArray } from "../../../../helpers/alph-sort";
import { msToSeconds } from "../../../../helpers/ms-to-sec";
import {
  instanceOfWordFoundResponse,
  instanceOfWordNotFoundError,
} from "../../../../helpers/type-guards";
import useGameData from "../../../../hooks/use-game-data";
import { ResultItem } from "../../../../types";

import AnswerItemResult from "./result/answer-item-result";
import WordDefinitionResult from "./result/word-definition-result";
import WordNotFoundResult from "./result/word-not-found-result";

const ResultsList = ({ items }: { items: Array<ResultItem> }) => {
  const {
    gameData: { answers },
  } = useGameData();
  const sortedAnswers = aplhSortedArray({ sortingProp: "charCode", arr: answers });
  const sortedData = aplhSortedArray({ sortingProp: "word", arr: items });

  return (
    <div
      className={
        "neu-queue flex h-[400px] w-3/4 flex-col items-center justify-start space-y-4 overflow-y-scroll rounded-md border-2 border-neu-gray py-5"
      }
    >
      {sortedData.map((answer, answerIdx) => {
        const { charCode, timeTaken } = sortedAnswers[answerIdx];
        const character = String.fromCharCode(charCode);
        const timeTakenInSeconds = msToSeconds(timeTaken);

        if (instanceOfWordNotFoundError(answer)) {
          return (
            <WordNotFoundResult
              key={answerIdx}
              {...{ character, answer, timeTaken: timeTakenInSeconds }}
            />
          );
        }
        if (instanceOfWordFoundResponse(answer)) {
          const { word, definition, example } = answer;

          return (
            <WordDefinitionResult
              key={answerIdx}
              {...{ character, word, definition, example, timeTaken: timeTakenInSeconds }}
            />
          );
        }

        return <AnswerItemResult key={answerIdx} answer={answer} />;
      })}
    </div>
  );
};

export default ResultsList;
