import GoBackButton from "../../components/game/game-results/lib/go-back-button";
import TotalTimeTaken from "../../components/game/game-results/lib/total-time-taken";
import WordDefinitionResult from "../../components/game/game-results/lib/result/word-definition-result";
import { msToSeconds } from "../../helpers/ms-to-sec";

import { MOCK_DATA } from "./data";

const GameResultsMock = () => {
  const totalTimeTakenInSeconds = MOCK_DATA.map((answer) => answer.timeTaken).reduce(
    (prev, curr) => prev + curr,
  );

  const totalTimeTaken = totalTimeTakenInSeconds / 1000;

  return (
    <div
      className={
        "animated fade-in fast flex w-full flex-col items-center justify-center space-x-0 space-y-4 px-24 text-2xl text-gray-600"
      }
    >
      <TotalTimeTaken time={totalTimeTaken} />
      <QueueMock />
      <GoBackButton />
    </div>
  );
};

const QueueMock = () => {
  return (
    <div
      className={
        "neu-queue flex h-[400px] w-3/4 flex-col items-center justify-start space-y-4 overflow-y-scroll rounded-md border-2 border-[#c4c4c4] py-5"
      }
    >
      {MOCK_DATA.map((answer, answerIdx) => {
        const { definition, timeTaken, word } = answer;
        const timeTakenInSeconds = msToSeconds(timeTaken);

        return (
          <WordDefinitionResult
            key={answerIdx}
            {...{ word, definition, timeTaken: timeTakenInSeconds }}
          />
        );
      })}
    </div>
  );
};

export default GameResultsMock;
