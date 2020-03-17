import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

export default () => (
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
								En estos momentos estamos trabajando en un sitio web institucional y material para nuestros estudiantes en este periodo critico para nuestro sistema de salud y educativo. Los mantendremos informados por las redes sociales.
							</p>
						</div>
                        <div className="text-center text-gray-700">
							<a href="https://www.facebook.com/profile.php?id=100011171174507" target="_blank" rel="noopener noreferrer">
                            	<FontAwesomeIcon size="3x" icon={faFacebook}/>
							</a>
                        </div>

					</div>
				</div>
			</div>
		</div>
	</div>
)