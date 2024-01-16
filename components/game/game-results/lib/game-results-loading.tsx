import LoadingIcon from "../../../icons/loading-icon";

const GameResultsLoading = () => {
  return (
    <div
      className={"flex h-full w-full flex-col items-center justify-center"}
      data-testid={"loading-results-panel"}
    >
      <div className={"group relative h-max w-1/2"}>
        <div
          className={
            "absolute inset-0.5 mb-6 rounded-xl bg-gradient-to-r from-neu-blue to-neu-red opacity-50 blur transition duration-700 group-hover:inset-0 group-hover:opacity-60 dark:inset-1 dark:group-hover:inset-0.5"
          }
        />
        <div className={"mb-6 w-full scale-100 rounded-xl p-1 transition-all"}>
          <div
            className={
              "flex flex-col items-center justify-center space-y-2 rounded-lg bg-neu-white p-4 text-2xl"
            }
          >
            <div className={"hidden self-start md:block"}>
              <strong>Fetching definitions, please wait...</strong>
            </div>
            <div>
              <LoadingIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResultsLoading;
