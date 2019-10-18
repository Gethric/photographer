import React from "react";
import { createMessageDocument } from "../../Firebase/Firebase.utils";
import CustomButton from "../CustomButton/CustomButton.component";
import FormInput from "../ContactForm/FormInput/FormInput.component";

import "./ContactForm.styles.scss";

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			subject: "",
			message: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		createMessageDocument(this.state);
		this.setState({ name: "", email: "", subject: "", message: "" });
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="Contact_Form">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="name"
						type="text"
						handleChange={this.handleChange}
						value={this.state.name}
						label="Name"
						required
					/>

					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="Email"
						required
					/>

					<FormInput
						name="subject"
						type="text"
						value={this.state.subject}
						handleChange={this.handleChange}
						label="Subject"
						required
					/>

					<FormInput
						name="message"
						type="text"
						handleChange={this.handleChange}
						value={this.state.message}
						label="Message"
						required
					/>

					<CustomButton type="submit">Send</CustomButton>
				</form>
			</div>
		);
	}
}

export default ContactForm;
