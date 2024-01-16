const TotalTimeTaken = ({ time }: { time: number }) => {
  return (
    <div className={"flex flex-col items-center justify-center space-y-2 text-neu-salmon"}>
      <span className={"block w-full text-center"}>Total time taken </span>
      <strong className={"w-full text-center"} data-testid={"total-time-taken"}>
        {time}
      </strong>
      <span className={"block w-full text-center"}>seconds</span>
    </div>
  );
};

export default TotalTimeTaken;
