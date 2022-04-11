import React from "react";

import "./style.css";

const Step3 = (props) => {
	//si las contraseñas coinciden mostramos el OK, si no el KO y podemos volver a la pantalla anterior para modificar las pass
	if (props.valores.pass1 === props.valores.pass2) {
		return (
			<section id="step3">
				<section className="info general-padding">
					<div>
						<i className="icon-ok-circle"></i>
					</div>
					<div>
						<h1>¡Tu Password Manager ya está creado!</h1>
						<p>
							Lore Ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
							varius tortor nibh.
						</p>
					</div>
				</section>
				<section className="botones general-padding">
					<button className="error" onClick={props.pasoFinal}>
						Acceder {">"}
					</button>
				</section>
			</section>
		);
	} else {
		return (
			<section id="step3">
				<section className="info general-padding">
					<div>
						<i className="icon-warning-sign"></i>
					</div>
					<div>
						<h1>Ha habido un error</h1>
						<p>
							No hemos podido modificar tu Contraseña Maestra. Inténtalo más
							tarde.
						</p>
					</div>
				</section>
				<section className="botones general-padding">
					<button className="error" onClick={props.pasoAnterior}>
						Volver a Password Manager {">"}
					</button>
				</section>
			</section>
		);
	}
};

export default Step3;
