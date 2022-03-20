/** @format */

import type { NextPage } from "next"
import Head from "next/head"
import Game from "../components/Game"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Typerun</title>
				<meta
					name='description'
					content='Página principal de la aplicación y pantalla de juego'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Game />
		</>
	)
}

export default Home
