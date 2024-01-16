import useGameData from "../../hooks/use-game-data";

import GameStarter from "./game-starter";
import GameResults from "./game-results";

const Game = () => {
  const {
    gameData: { gameState },
  } = useGameData();

  return <>{gameState === "END" ? <GameResults /> : <GameStarter />}</>;
};

export default Game;
