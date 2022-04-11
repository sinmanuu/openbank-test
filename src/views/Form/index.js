import React, { useState } from "react";

import "./style.css";

const Step2 = (props) => {
	const [visiblePass1, setVisiblePass1] = useState(false);
	const [visiblePass2, setVisiblePass2] = useState(false);
	// const [validar, setValidar] = useState(false);

	const validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])[a-zA-Zd]{8,24}$");

	const changeVisiblePass1 = () => {
		setVisiblePass1(!visiblePass1);
	};
	const changeVisiblePass2 = () => {
		setVisiblePass2(!visiblePass2);
	};
	//validamos que las contraseñas y la pista cumplan los requisitos
	const validar = () => {
		if (
			validPassword.test(props.valores.pass1) &&
			validPassword.test(props.valores.pass2) &&
			props.valores.pista.length <= 255
		) {
			return props.siguientePaso();
		} else {
			alert(
				"La contraseña tiene que contener entre 8-24 caracteres y mínimo 1 mayuscula."
			);
		}
	};
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
					<form>
						<div className="pass">
							<div>
								<label htmlFor="pass1">Crea tu Contraseña Maestra</label>
								<input
									type={visiblePass1 ? "text" : "password"}
									name="pass1"
									onChange={props.handleInputChange}
									placeholder="Introduce tu contraseña"
								/>
								<i
									className={visiblePass1 ? "icon-eye-open" : "icon-eye-close"}
									onClick={changeVisiblePass1}
								></i>
							</div>
							<div>
								<label htmlFor="pass2">Repite tu Contraseña Maestra</label>
								<input
									type={visiblePass2 ? "text" : "password"}
									name="pass2"
									onChange={props.handleInputChange}
									placeholder="Repite tu constraseña"
								/>
								<i
									className={visiblePass2 ? "icon-eye-open" : "icon-eye-close"}
									onClick={changeVisiblePass2}
								></i>
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
					</form>
				</section>
				<section className="botones general-padding">
					<button className="atras" onClick={props.pasoAnterior}>
						Cancelar
					</button>
					{/* <button className="siguiente" onClick={props.siguientePaso}> */}
					<button className="siguiente" onClick={validar}>
						Siguiente {">"}
					</button>
				</section>
			</section>
		</>
	);
};

export default Step2;
