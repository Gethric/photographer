import React from "react";

import "./video.styles.scss";

const Video = ({ videoUrl, type }) => (
	<video className="vid" loop autoPlay>
		<source src={videoUrl} type={type} />
	</video>
);

export default Video;
