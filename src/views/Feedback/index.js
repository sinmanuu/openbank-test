import React from "react";

const Step3 = (props) => {
	return (
		<div>
			<h1>¡Tu Password Manager ya está creado!</h1>
			<button onClick={props.pasoAnterior}>Cancelar</button>
			<button onClick={props.siguientePaso}>Siguiente</button>
		</div>
	);
};

export default Step3;
