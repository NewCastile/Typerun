import Link from "next/link";

import QuestionIcon from "../../icons/question-icon";

const Header = () => {
  return (
    <header
      className={
        "flex h-[60px] w-full flex-row items-center justify-center text-5xl font-extrabold"
      }
    >
      <Link passHref href={"/"}>
        Typerun
      </Link>
      <Link
        passHref
        className={"absolute right-5 top-5 lg:right-8 lg:top-6"}
        data-testid={"about-page-link"}
        href={"/about"}
      >
        <QuestionIcon />
        <span className={"group right-4 top-[-20px] cursor-pointer sm:right-10 sm:top-0"}>
          <span
            className={
              "animated fade-in fast absolute right-0 top-[-40px] hidden w-[16ch] rounded-md bg-neutral-700 py-2 text-center text-[1.4rem] text-white group-hover:block md:right-[-220px]"
            }
          >
            About
          </span>
        </span>
      </Link>
    </header>
  );
};

export default Header;
