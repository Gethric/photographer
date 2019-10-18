import React, { Component } from "react";
import "./about.styles.scss";
import AboutTitle from "../../components/About/AboutTitle";
import ABOUT from "../../components/About/aboutdata";
import AboutText from "../../components/About/AboutText";

class About extends Component {
	constructor() {
		super();

		this.state = {
			about: ABOUT
		};
	}

	render() {
		const { about } = this.state;
		return (
			<div className="about">
				<AboutTitle />
				{about.map(({ id, ...otherAboutProps }) => (
					<AboutText key={id} {...otherAboutProps} />
				))}
			</div>
		);
	}
}

export default About;
