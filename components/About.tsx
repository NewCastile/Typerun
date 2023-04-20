/** @format */

export default function About() {
	return (
		<div className='w-full animated fade-in fast flex flex-col justify-center items-center space-y-4 px-2 lg:px-10 text-lg text-gray-600'>
			<div className='w-full justify-center items-start my-5 mt-10 flex flex-col lg:flex-row space-y-10 lg:space-y-0'>
				<section className='w-full min-w-[200px]'>
					<h2 className='text-2xl'>
						<strong>¿En qué consiste?</strong>
					</h2>
					<br />
					<p>
						Typerun es un juego contrareloj en donde deberás escribir una
						palabra por cada letra del alfabeto donde el tiempo mínimo para
						responder será de minuto y medio. Para empezar presiona la barra de
						espacio y si deseas detener la partida presiona la tecla de escape.
						<br />
						<br />
						Como se indica en la parte inferior de la primera página al
						presionar <code>Esc</code>{" "}
						<strong>el juego será reiniciado</strong>, por lo que el marcador
						volverá a su estado original.
						<br />
						<br />
						En la parte derecha del recuadro verás un marco que és en donde se
						estarán acumulando las palabras que has introducido con la letra
						correspondiente y el tiempo que tomó tu respuesta. Si demoras más de
						minuto y medio pasaras a la siguiente letra y tu respuesta para la letra
						del momento quedará en fila como <strong>&quot;Sin respuesta&quot;</strong>.
					</p>
				</section>
				<section className='w-full min-w-[250px]'>
					<h2 className='text-2xl'>
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
		</div>
	)
}
