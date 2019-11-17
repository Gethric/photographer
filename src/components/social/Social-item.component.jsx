import React from "react";
import "./social-item.styes.scss";

const SocialItem = ({ id, title, link, imageUrl }) => (
	<div className="social-item">
		<a href={link} target="_blank" rel="noopener noreferrer">
			<img src={imageUrl} alt="icons" />
		</a>
	</div>
);

export default SocialItem;
