import React, { Component } from "react";
import SocialItem from "./Social-item.component";
import ICONS from "../../assets/social.assets";
import "../../sass/components/social.styles.scss";

class Social extends Component {
	constructor() {
		super();

		this.state = {
			icons: ICONS
		};
	}

	render() {
		const { icons } = this.state;
		return (
			<div className="social">
				{icons.map(({ id, ...otherIconProps }) => (
					<SocialItem key={id} {...otherIconProps} />
				))}
			</div>
		);
	}
}

export default Social;
