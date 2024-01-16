import useGameData from "../../hooks/use-game-data";
import Timer from "../timer";
import Queue from "../queue";
import WordInput from "../word-input";

const GameStarter = () => {
  const {
    gameData: { currentCharCode, wordInputRef },
  } = useGameData();

  return (
    <>
      <div
        className={
          "animated fade-in fast flex h-full w-full flex-col items-center justify-center space-x-0 space-y-4 px-24 text-2xl xl:flex-row xl:space-x-24 xl:space-y-0"
        }
        data-testid={"game-starter-panel"}
      >
        <div
          className={
            "flex h-full w-1/3 flex-col items-center justify-center space-y-2 xl:h-[360px]"
          }
        >
          <div className={"neu-concave flex h-40 w-[150px] flex-row justify-center rounded-full"}>
            <span
              className={"self-center text-8xl font-extrabold"}
              data-testid={"current-character"}
            >
              {String.fromCharCode(currentCharCode)}
            </span>
          </div>
          <Timer />
          <WordInput {...{ wordInputRef }} />
        </div>
        <Queue />
      </div>
      <div className={"flex flex-col items-center justify-center space-y-2"}>
        <span className={"block text-center text-2xl"}>Space to start</span>
        <span className={"block text-center text-2xl"}>Escape to stop</span>
      </div>
    </>
  );
};

export default GameStarter;
