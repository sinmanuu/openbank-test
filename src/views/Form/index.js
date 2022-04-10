import React from "react";

import "./style.css";

const Step2 = (props) => {
	return (
		<>
			<nav>
				<ul id="menu">
					<li className="done">
						<i className="icon-ok"></i>
					</li>
					<li className="active">2</li>
					<li>3</li>
				</ul>
			</nav>
			<section id="step2">
				<h1>Crea tu Password Manager</h1>
				<hr />
				<section className="info general-padding">
					<p>
						En primer lugar, debes crear una contraseña diferente para sus
						pertenencias electrónicas.
					</p>
					<p>No podrás recuperar tu contraseña, así que recuérdala bien.</p>
				</section>
				<section className="form general-padding">
					<div className="pass">
						<div>
							<label htmlFor="pass1">Crea tu Contraseña Maestra</label>
							<input
								type="password"
								name="pass1"
								onChange={props.handleInputChange}
								placeholder="Introduce tu contraseña"
							/>
						</div>
						<div>
							<label htmlFor="pass2">Repite tu Contraseña Maestra</label>
							<input
								type="password"
								name="pass2"
								onChange={props.handleInputChange}
								placeholder="Repite tu constraseña"
							/>
						</div>
					</div>
					<div className="pista">
						<p>
							También puedes crear una pista que te ayude a recordar tu
							contraseña maestra.
						</p>
						<label htmlFor="">
							Crea tu pista para recordar tu contraseña maestra(opcional)
						</label>
						<input
							type="text"
							name="pista"
							onChange={props.handleInputChange}
							placeholder="Introduce tu pista"
						/>
					</div>
				</section>
				<section className="botones general-padding">
					<button className="atras" onClick={props.pasoAnterior}>
						Cancelar
					</button>
					<button className="siguiente" onClick={props.siguientePaso}>
						Siguiente {">"}
					</button>
				</section>
			</section>
		</>
	);
};

export default Step2;
