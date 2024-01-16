import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/");
  };

  return (
    <div className={"flex h-3/4 w-3/4 flex-col items-start justify-center space-y-8"}>
      <h1 className={"w-full text-left text-4xl"}>404 - Page Not Found</h1>
      <button className={"btn-salmon"} data-testid={"go-back-button"} onClick={onClickHandler}>
        Go back
      </button>
    </div>
  );
};

export default Custom404;
