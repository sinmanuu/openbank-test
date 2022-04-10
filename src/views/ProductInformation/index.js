import React from "react";

import img1 from "./img/group.svg";
import img2 from "./img/group-3.svg";
import "./style.css";

const Step1 = (props) => {
	return (
		<>
			<nav>
				<ul id="menu">
					<li className="active">1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</nav>
			<section id="step1">
				<h1>Crea tu Password Manager</h1>
				<hr />
				<section className="images general-padding">
					<div>
						<img src={img1} className="" alt={"img1"} />
						<p>
							Guarda aquí todas tus contraseñas, datos o cualquier información,
							olvida las notas de papel y las aplicaciones no protegidas.
						</p>
					</div>
					<div>
						<img src={img2} className="" alt={"img2"} />
						<p>
							Crea tu clave maestra: solo tú podrás acceder a tus secretos con
							ella.
						</p>
					</div>
				</section>
				<section className="info general-padding">
					<h3>Cómo funciona</h3>
					<p>
						En primer lugar, debes crear una contraseña diferente para sus
						pertenencias electrónicas. No podrás recuperar tu contraseña, así
						que recuérdela bien.
					</p>
					<h3>Qué datos puedes guardar</h3>
					<p>
						Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono
						móvil, el número de serie de alguno de tus dispositivos o cualquier
						información que necesites tener en lugar seguro.
					</p>
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

export default Step1;
