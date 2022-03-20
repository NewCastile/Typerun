/** @format */

import "../styles/globals.css"
import type { AppProps } from "next/app"
import Link from "next/link"
import QuestionIcon from "../components/QuestionIcon"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='w-full flex flex-col justify-start items-center space-y-10 mt-5'>
			<main className='h-full w-1/2 max-w-[1000px] min-w-[300px] lg:min-w-[650px]  flex flex-col justify-center items-center'>
				<div className='w-full neu-convex flex flex-col justify-center items-center py-10'>
					<header className='w-full flex flex-col justify-center relative h-[60px] text-5xl font-extrabold'>
						<Link href={"/"} passHref>
							<h1 className='self-center cursor-pointer'>Typerun</h1>
						</Link>
						<Link href={"/info"} passHref>
							<span className='group absolute top-[-20px] sm:top-0 right-4 sm:right-10 cursor-pointer'>
								<QuestionIcon />
								<span className='hidden rounded-md text-white text-center text-[1.4rem] group-hover:block animated fade-in fast bg-neutral-700 absolute top-[-40px] right-0 md:right-[-220px] w-[16ch] py-2'>
									Sobre la aplicación
								</span>
							</span>
						</Link>
					</header>
					<Component {...pageProps} />
				</div>
			</main>
			<footer className='h-[60px] flex flex-col justify-center text-xl'>
				<p className='text-3xl'>
					Done by{" "}
					<a href='https://github.com/NewCastile' target='__blank'>
						NewCastile
					</a>
				</p>
			</footer>
		</div>
	)
}

export default MyApp
