import React from "react"
// import { Link } from "gatsby"
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';

import 'primeicons/primeicons.css';

// import Button from "../components/widgets/button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import {Dialog} from 'primereact/dialog'
import {Button} from 'primereact/button'
// import CardProfile from '../components/card-profile'


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
										Para nuestros alumnos y sus famlias, actualmente nos encontramos actualizando la plataforma web, pronto tendremos nuevas noticias. Que se encuentren muy bien, y saludos a la comunidad.
									</p>
								</div>
								<div className="flex flex-col justify-center items-center">
									{/*<Link to="/material">
										<Button color="gray-400" text="Material por curso" icon={faGraduationCap}></Button>
									</Link>*/} 
									<div className="text-center text-gray-700 mt-5">
										<a href="https://www.facebook.com/profile.php?id=100011171174507" target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon size="3x" icon={faFacebook}/>
										</a>
									</div>
								</div>
								<div>
								<Dialog header="Nuestra Vision Y Mision" visible={this.state.visible} style={{width: '50vw'}} modal={true} onHide={() => this.setState({visible: false})}>
									<span className="font-bold">Vision: </span>Ser una comunidad educativa que propicie un proceso de enseñanza
									aprendizaje de calidad, integral e inclusivo; desarrollando jóvenes lideres,
									autónomos, con pensamiento crítico reflexivo y valórico; promocionando la
									identidad y diversidad artístico - cultural, las normas de convivencia y hábitos
									de vida sana.<hr className="my-2"/>
									<span className="font-bold">Mision: </span>Desarrollar una formación científico – humanista de calidad,
									potenciando al máximo el desarrollo integral de las habilidades cognitivas,
									artísticas - culturales, afectivo - sociales, valóricas y de vida sana de todos los
									miembros que conforman la comunidad educativa, en un ambiente de
									respeto mutuo y de sana convivencia. 
								</Dialog>

<div className="flex justify-around items-center mt-4">

								<Button label="Vision Y Mision" icon="pi pi-info-circle" onClick={(e) => this.setState({visible: true})} />
</div>
<div className="flex items-center justify-center mt-4">

								<h1><span className="font-bold">Directora: </span>Macarena Martinez</h1>
								<h1><span className="font-bold">Jefe UTP: </span>Gabriela Dunn Carvajal</h1>
</div>
<div className="text-center mt-2 font-bold">San Martín 386 - Portezuelo, Chile</div>

								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}