import React, { Component } from "react";

import Step1 from "./views/ProductInformation";
import Step2 from "./views/Form";
import Step3 from "./views/Feedback";

import "./App.scss";

class App extends Component {
	state = {
		paso: 1,
		pass1: "",
		pass2: "",
		pista: "",
	};
	//cada vez que se modifique un input, se guarda en el estado
	handleInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	//para movernos por los paneles
	siguientePaso = () => {
		const { paso } = this.state;
		this.setState({
			paso: paso + 1,
		});
	};
	pasoAnterior = () => {
		const { paso } = this.state;
		this.setState({
			paso: paso - 1,
		});
	};
	pasoFinal = () => {
		this.setState({
			paso: 1,
		});
	};

	render() {
		const valores = this.state;

		switch (this.state.paso) {
			case 1:
				return <Step1 siguientePaso={this.siguientePaso} />;
			case 2:
				return (
					<Step2
						handleInputChange={this.handleInputChange}
						siguientePaso={this.siguientePaso}
						pasoAnterior={this.pasoAnterior}
						valores={valores}
					/>
				);
			case 3:
				return (
					<Step3
						pasoFinal={this.pasoFinal}
						pasoAnterior={this.pasoAnterior}
						valores={valores}
					/>
				);
			default:
				return <div>Error</div>;
		}
	}
}

export default App;
