import { useEffect, useState } from "react";

import useGameData from "../use-game-data";
import { ANSWER_LIMITED_TIME, NO_ANSWER_PLACEHOLDER } from "../../constants";
import { msToCentiseconds } from "../../helpers/ms-to-centisec";

const useTimer = () => {
  const {
    gameData: { setCurrentCharCode, currentCharCode, gameState, answer, setAnswers },
  } = useGameData();

  const [timeSpendInCentiseconds, setTimeSpendInCentiseconds] = useState<number>(0);
  const [timeSpend, setTimeSpend] = useState<string>("");

  const pause = (interval: NodeJS.Timeout) => {
    clearInterval(interval);
    setTimeSpendInCentiseconds(0);
  };

  useEffect(() => {
    const timespendInterval = setInterval(() => {
      setTimeSpendInCentiseconds((old) => old + 1);
    }, 10);

    if (gameState !== "START") {
      pause(timespendInterval);
    }

    return () => {
      clearInterval(timespendInterval);
    };
  }, [gameState]);

  useEffect(() => {
    if (timeSpendInCentiseconds >= msToCentiseconds(ANSWER_LIMITED_TIME)) {
      setAnswers((old) =>
        [
          {
            charCode: currentCharCode,
            timeTaken: timeSpendInCentiseconds * 10,
            word: NO_ANSWER_PLACEHOLDER,
          },
        ].concat(old),
      );
      setTimeSpendInCentiseconds(0);
      setCurrentCharCode((old) => old + 1);

      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeSpendInCentiseconds]);

  useEffect(() => {
    if (!timeSpendInCentiseconds) {
      setTimeSpend(`00:00:00`);

      return;
    }
    const timeSpendInMiliseconds = timeSpendInCentiseconds * 10;
    const decisecondsPassed =
      timeSpendInCentiseconds % 100 === 0 ? 0 : timeSpendInCentiseconds % 100;

    const secondsPassed =
      timeSpendInMiliseconds >= 60000
        ? Math.floor((timeSpendInMiliseconds - 60000) / 1000)
        : Math.floor(timeSpendInMiliseconds / 1000);
    const minutesPassed = Math.floor(timeSpendInCentiseconds / 60000);
    const secondsPassedString = secondsPassed < 10 ? `0${secondsPassed}` : `${secondsPassed}`;
    const minutesPassedString = minutesPassed < 10 ? `0${minutesPassed}` : `${minutesPassed}`;
    const dsPassedString =
      decisecondsPassed < 10 ? `0${decisecondsPassed}` : `${decisecondsPassed}`;

    setTimeSpend(`${minutesPassedString}:${secondsPassedString}:${dsPassedString}`);
  }, [timeSpendInCentiseconds]);

  useEffect(() => {
    if (gameState !== "START") {
      return;
    }
    if (answer && answer.length) {
      setAnswers((old) =>
        [
          {
            charCode: currentCharCode,
            timeTaken: timeSpendInCentiseconds * 10,
            word: answer,
          },
        ].concat(old),
      );
      setTimeSpendInCentiseconds(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, gameState]);

  return { timeSpend } as const;
};

export default useTimer;
