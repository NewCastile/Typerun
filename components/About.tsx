/** @format */

export default function About() {
	return (
		<div className='w-full animated fade-in fast flex flex-col justify-center items-center space-y-4 px-2 lg:px-10 text-2xl text-gray-600'>
			<div className='w-full justify-center items-start my-5 mt-10 flex flex-col lg:flex-row space-y-10 lg:space-y-0'>
				<section className='w-full min-w-[200px]'>
					<h2 className='text-3xl'>
						<strong>¿En qué consiste?</strong>
					</h2>
					<br />
					<p>
						Typerun es un juego contrareloj en donde deberás escribir una
						palabra por cada letra del alfabeto donde el tiempo mínimo para
						responder será de 6 segundos. Para empezar presiona la barra de
						espacio y si deseas detener la partida presiona la tecla de escape.
						<br />
						<br />
						Como se indica en la parte inferior de la primera página al
						presionar <code>Escape</code>{" "}
						<strong>el juego será reiniciado</strong>, por lo que el marcador
						volverá a su estado original.
						<br />
						<br />
						Por defecto el orden del alfabeto es creciente, yendo de la A hasta
						la Z. Más adelante se añadirán nuevas modalidades.
						<br />
						<br />
						En la parte derecha del recuadro verás un marco que és en donde se
						estarán acumulando las palabras que has introducido con la letra
						correspondiente y el tiempo que tomó tu respuesta. Si demoras mas de
						6 segundos pasaras a la siguiente letra y tu respuesta para la letra
						del momento será <strong>&quot;Sin respuesta&quot;</strong>.
					</p>
				</section>
				<section className='w-full min-w-[250px]'>
					<h2 className='text-3xl'>
						<strong>Reglas</strong>
					</h2>
					<br />
					<p>
						Al final de la partida se te mostrará un registro con todas las
						palabras que ingresaste junto a sus definiciones. Para ello el juego
						utiliza la API del diccionario Oxford. Faltan algunas pruebas por
						realizar por tanto debes tener en cuenta lo siguiente:
						<br />
						<br />
						<ol className='flex flex-col justify-center items-start space-y-4 pl-8 text-justify'>
							<li>
								<p>
									Debes escribir todas las palabras con sus signos
									correspondientes, de otra forma no se encontrará su
									definición.
								</p>
							</li>
							<li>
								<p>
									La definición del adjetivo o nombre femenino de algunas
									palabras no son encontradas, eg: <i>muchacho/</i>
									<i className='block'>muchacha</i>
								</p>
							</li>
							<li>
								<p>
									<strong>No jugar más de 3 partidas completas</strong>. La API
									del diccionario Oxford en su versión Prototype no permite
									realizar más de 1000 peticiones al més.
								</p>
							</li>
						</ol>
					</p>
				</section>
			</div>
			<blockquote className='w-full lg:w-2/3'>
				<p>
					De sobrepasar dicho límite esto afectará a demás jugadores y al
					desarrollador por tanto se pide discreción en el consumo. A futuro el
					número de partidas será <strong>restringido</strong> por la misma
					aplicación.
				</p>
			</blockquote>
		</div>
	)
}
