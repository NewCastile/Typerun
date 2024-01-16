import { msToSeconds } from "../../../helpers/ms-to-sec";
import useGameData from "../../../hooks/use-game-data";
import useFetchDefinitions from "../../../hooks/use-fetch-definitions";

import GameResultsLoading from "./lib/game-results-loading";
import GameResultsError from "./lib/game-results-error";
import TotalTimeTaken from "./lib/total-time-taken";
import TryAgainButton from "./lib/try-again-button";
import ResultsList from "./lib/game-results-list";

const GameResults = () => {
  const {
    gameData: { answers },
  } = useGameData();

  const { data, error, isError, isLoading, isRefetching, refetch, status } = useFetchDefinitions({
    answers,
  });

  const totalTimeTaken = msToSeconds(
    answers.map((ans) => ans.timeTaken).reduce((prev, curr) => prev + curr),
  );

  if (isLoading || isRefetching) {
    return <GameResultsLoading />;
  }

  if (isError)
    return (
      <GameResultsError {...{ error }}>
        <button
          className={"btn-salmon"}
          onClick={() => {
            refetch();
          }}
        >
          Try again
        </button>
      </GameResultsError>
    );

  if (!data)
    return (
      <div>
        <pre>{JSON.stringify({ data, status, isError })}</pre>
      </div>
    );

  return (
    <div
      className={
        "flex w-full flex-col items-center justify-center space-x-0 space-y-4 px-24 text-2xl text-gray-600"
      }
      data-testid={"results-panel"}
    >
      <ResultsList items={data} />
      <TotalTimeTaken time={totalTimeTaken} />
      <TryAgainButton />
    </div>
  );
};

export default GameResults;
