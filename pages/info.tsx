/** @format */

import Head from "next/head"
import About from "../components/About"

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>Typerun - Info</title>
				<meta
					name='about'
					content='Información y uso apropiado de la aplicación'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<About />
		</>
	)
}
