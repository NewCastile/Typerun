const GameResultsError = ({
  error,
  children,
}: {
  error?: string | null | unknown;
  children?: React.ReactNode | Array<React.ReactNode>;
}) => {
  return (
    <div className={"text-gray-600"} data-testid={"error-panel"}>
      <p className={"text-2xl"}>Something wrong happened :c</p>
      <p className={"text-xl"}>{error ?? ""}</p>
      {children}
    </div>
  );
};

export default GameResultsError;
