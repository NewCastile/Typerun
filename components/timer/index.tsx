import useTimer from "../../hooks/use-timer";

const Timer = () => {
  const { timeSpend } = useTimer();

  return (
    <>
      <span className={"w-[20ch] text-center"}>Time passed</span>
      <span className={"flex w-[8ch] flex-row items-center justify-center space-x-1"}>
        {Array.from(timeSpend).map((character, characterIdx) => {
          return (
            <span key={characterIdx} className={"inline-block w-3 text-center"}>
              {character}
            </span>
          );
        })}
      </span>
    </>
  );
};

export default Timer;
