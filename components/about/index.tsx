import { ANSWER_LIMITED_TIME } from "../../constants";
import { msToSeconds } from "../../helpers/ms-to-sec";

const About = () => {
  return (
    <div
      className={
        "animated fade-in fast flex w-full flex-col items-center justify-center space-y-4 px-2 text-lg text-gray-600 lg:px-10"
      }
    >
      <div
        className={
          "my-5 mt-10 flex w-full flex-col items-start justify-center space-y-10 lg:flex-row lg:space-y-0"
        }
      >
        <section className={"w-full min-w-[200px]"} data-testid={"about-page-content"}>
          <h2 className={"text-2xl"}>
            <strong>What is Typerun?</strong>
          </h2>
          <br />
          <p>
            Typerun is a time trial game where you have to type a letter for each letter of the
            alphabet where the minimum time to answer is{" "}
            <strong>{`${msToSeconds(ANSWER_LIMITED_TIME)}`} seconds</strong>. To start just press
            the space bar and if you want to end or restart the game press the escape key.
            <br />
            <br />
            Once you start the game, on the left side of the square will be the letter in turn, and
            input and a timer, if you type a letter that does not begin with the corresponding
            letter the input will be cleared. On the right side of the square you will see a log
            where your answers will be shown with the letter, the word you typed and its time taken.
            When the limited time to answer has passed the game will move on to the next letter and
            the word of your answer will be shown as <strong>&quot;Unanswered&quot;</strong>.
            <br />
            <br />
            At the end of the game a log will be shown to you with all the words you typed in with
            its definitions in case the{" "}
            <a className={"font-bold hover:underline"} href={"https://dictionaryapi.dev"}>
              Free Dictionary API
            </a>{" "}
            founds it.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
