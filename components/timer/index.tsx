import useTimer from "../../hooks/use-timer";

const Timer = () => {
  const { timeSpend } = useTimer();

  return (
    <>
      <span className={"w-[20ch] text-center"}>Time passed</span>
      <span className={"w-[8ch] text-center"}>{timeSpend}</span>
    </>
  );
};

export default Timer;
