import React from "react";

const Step2 = (props) => {
	return (
		<div>
			<nav>
				<ul id="menu">
					<li>1</li>
					<li className="active">2</li>
					<li>3</li>
				</ul>
			</nav>
			<h1>Crea tu Password Manager</h1>
			<label htmlFor="">Crea tu Contraseña Maestra</label>
			<input type="password" name="pass1" onChange={props.handleInputChange} />
			<label htmlFor="">Repite tu Contraseña Maestra</label>
			<input type="password" name="pass2" onChange={props.handleInputChange} />
			<label htmlFor="">
				Crea tu pista para recordar tu contraseña maestra(opcional)
			</label>
			<input type="text" name="pista" onChange={props.handleInputChange} />
			<button className="atras" onClick={props.pasoAnterior}>
				Cancelar
			</button>
			<button className="siguiente" onClick={props.siguientePaso}>
				Siguiente
			</button>
		</div>
	);
};

export default Step2;
