import { useContext } from "react";

import { GameContext } from "../../context";

const useGameData = () => {
  const context = useContext(GameContext);

  return { gameData: context };
};

export default useGameData;
