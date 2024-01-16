import { msToSeconds } from "../../helpers/ms-to-sec";
import useGameData from "../../hooks/use-game-data";

const Queue = () => {
  const {
    gameData: { answers },
  } = useGameData();

  return (
    <div
      className={
        "flex h-max w-[200px] flex-row items-center justify-center lg:w-3/4 xl:h-full xl:w-[200px] xl:flex-col"
      }
    >
      <div
        className={
          "neu-queue flex h-[200px] w-full flex-col items-center justify-start space-y-4 overflow-y-scroll rounded-md border-2 border-neu-gray py-5 xl:h-[300px]"
        }
      >
        {answers.map((answer, answerIdx) => {
          const timeTakenInSeconds = msToSeconds(answer.timeTaken);

          return (
            <div
              key={answerIdx}
              className={
                "flex w-11/12 flex-col items-start justify-center space-y-2 rounded-md border-2 border-neu-gray p-5"
              }
            >
              <span className={"text-lg"}>{String.fromCharCode(answer.charCode)}</span>
              <span className={"w-full break-words text-2xl"}>{answer.word}</span>
              <span className={"text-sm"}>
                Time taken: <strong>{timeTakenInSeconds}</strong> seconds
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Queue;
