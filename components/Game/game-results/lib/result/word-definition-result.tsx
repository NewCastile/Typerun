const WordDefinitionResult = ({
  character,
  word,
  definition,
  example,
  timeTaken,
}: {
  character: string;
  word: string;
  definition: string;
  example?: string;
  timeTaken: number | string;
}) => {
  return (
    <div className={"group relative h-max w-11/12"}>
      <div
        className={
          "absolute inset-0.5 mb-6 rounded-xl bg-gradient-to-r from-neu-blue to-neu-red opacity-50 blur transition duration-700 group-hover:inset-0 group-hover:opacity-60 dark:inset-1 dark:group-hover:inset-0.5"
        }
      />
      <div className={"mb-6 w-full scale-100 rounded-xl p-1 transition-all"}>
        <div
          className={
            "flex flex-col items-start justify-center space-y-2 rounded-lg bg-neu-white p-4 text-xl"
          }
        >
          <div data-testid={"answer-definition"}>
            <span className={"capitalize"}>
              <strong data-testid={"answer-character"}>{character}. </strong>
              <strong className={"w-full break-words text-left"} data-testid={"answer-character"}>
                {word}
              </strong>
            </span>
            <p
              className={"w-full break-words text-left md:text-justify"}
              data-testid={"answer-content"}
            >
              {definition}
            </p>
            <i className={"block w-full break-words"} data-testid={"answer-example"}>
              {example}
            </i>
            <span className={"block w-full"}>
              Time taken: <strong data-testid={"answer-timetaken"}>{timeTaken}</strong> seconds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordDefinitionResult;
