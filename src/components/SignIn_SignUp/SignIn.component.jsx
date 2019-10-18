import React from "react";
import {
	createMessageDocument,
	signInWithGoogle
} from "../../Firebase/Firebase.utils";
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../ContactForm/FormInput/FormInput.component";

import "./SignIn.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		createMessageDocument(this.state);
		this.setState({ email: "", password: "" });
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="SignIn">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>

					<FormInput
						name="password"
						type="text"
						value={this.state.password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>

					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle}>
						{""}Sign in with Google{""}
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
