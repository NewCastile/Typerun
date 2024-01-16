import type { AppProps } from "next/app";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";

import { GameContext } from "../context";
import useGame from "../hooks/use-game";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const {
    answer,
    setAnswer,
    answers,
    setAnswers,
    currentCharCode,
    setCurrentCharCode,
    endCharCode,
    gameState,
    setGameState,
    wordInputRef,
  } = useGame();

  return (
    <QueryClientProvider client={queryClient}>
      <GameContext.Provider
        value={{
          currentCharCode,
          setCurrentCharCode,
          endCharCode: endCharCode.current,
          answer,
          setAnswer,
          answers,
          setAnswers,
          gameState,
          setGameState,
          wordInputRef,
        }}
      >
        <div className={"mt-5 flex w-full flex-col items-center justify-start space-y-10"}>
          <main
            className={
              "flex h-auto min-h-[612px] w-1/2 min-w-[300px] max-w-[1000px] flex-col items-center justify-center lg:min-w-[650px]"
            }
          >
            <div
              className={
                "neu-convex relative flex h-full w-full flex-col items-center justify-start space-y-5 py-10"
              }
            >
              <Header />
              <Component {...pageProps} />
            </div>
          </main>
          <Footer />
        </div>
      </GameContext.Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
