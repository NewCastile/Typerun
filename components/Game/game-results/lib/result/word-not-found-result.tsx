import { NO_ANSWER_PLACEHOLDER } from "../../../../../constants";
import { WordNotFoundError } from "../../../../../types";

const WordNotFoundResult = ({
  character,
  answer,
  timeTaken,
}: {
  answer: WordNotFoundError;
  timeTaken: number | string;
  character: string;
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
          <div
            className={"flex w-full flex-col items-start justify-center break-words"}
            data-testid={"error-result"}
          >
            <span className={"w-full capitalize"}>
              <strong data-testid={"answer-character"}>{character}. </strong>
              <strong
                className={"w-full break-words text-left"}
                data-testid={answer.word === NO_ANSWER_PLACEHOLDER ? "no-answer" : "answer-word"}
              >
                {answer.word}
              </strong>
            </span>
            <strong className={"w-full break-words text-left"} data-testid={"answer-title"}>
              {answer.title}
            </strong>
            <p className={"w-full break-words text-justify"} data-testid={"answer-message"}>
              {answer.message}
            </p>
            <p className={"w-full break-words text-justify"} data-testid={"answer-resolution"}>
              {answer.resolution}
            </p>
            <span className={"w-full"}>
              Time taken: <strong data-testid={"answer-timetaken"}>{timeTaken}</strong> seconds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordNotFoundResult;
