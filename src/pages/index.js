import React from "react"
import { Link } from "gatsby"

import Button from "../components/widgets/button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"


export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {visible: ''}
	}

	render() {
		return (
			<div className="font-mono bg-gray-400 h-screen flex items-center">
				<div className="container mx-auto">
					<div className="flex justify-center px-6">
						<div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl">
							<div
								className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
								style={{backgroundImage: `url('https://source.unsplash.com/L0jLHqF7Q94/600x800')`}}
							></div>
							<div className="w-full lg:w-1/2 bg-white p-12 rounded-lg lg:rounded-l-none">
								<div className="px-8 mb-4 text-center">
									<h3 className="pt-4 mb-2 text-2xl">Liceo Nibaldo Sepúlveda Fernández</h3>
									<p className="mb-4 text-sm text-gray-700">
										Estimada comunidad, tenemos nuevas noticias para las clases de abril, con nuestro cuerpo docente estamos actualizando todas las semanas el material. Saludos a ustedes y sus familias.
									</p>
								</div>
								<div className="flex flex-col justify-center items-center">
									<Link to="/material">
										<Button color="gray-400" text="Material por curso" icon={faGraduationCap}></Button>
									</Link>
									<div className="text-center text-gray-700 mt-5">
										<a href="https://www.facebook.com/profile.php?id=100011171174507" target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon size="3x" icon={faFacebook}/>
										</a>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}