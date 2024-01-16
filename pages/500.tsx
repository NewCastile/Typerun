import { useRouter } from "next/router";

const Custom500Page = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.reload();
  };

  return (
    <div className={"flex h-3/4 w-3/4 flex-col items-start justify-center space-y-8"}>
      <h1 className={"w-3/4 text-left text-4xl"}>500 - An error ocurred while loading this page</h1>
      <button className={"btn-salmon"} data-testid={"refresh-button"} onClick={onClickHandler}>
        Try again
      </button>
    </div>
  );
};

export default Custom500Page;
