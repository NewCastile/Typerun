import { MouseEvent } from "react";

import useGameData from "../../../../hooks/use-game-data";

const GoBackButton = () => {
  const {
    gameData: { setGameState },
  } = useGameData();
  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setGameState("IDLE");
  };

  return (
    <button className={"btn-salmon"} data-testid={"go-back-button"} onClick={onClickHandler}>
      Go back
    </button>
  );
};

export default GoBackButton;
