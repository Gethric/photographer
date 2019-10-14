import React from "react";
import "../../sass/components/social-item.styes.scss";

const SocialItem = ({ id, title, link, imageUrl }) => {
	return (
		<div className="social-item">
			<a href={link}>
				<img src={imageUrl} alt="icons" />
			</a>
		</div>
	);
};

export default SocialItem;
