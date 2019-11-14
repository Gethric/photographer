import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CategoryComponent from "../Category/Category.component";
import { selectSectionsSections } from "../../redux/sections/sections.selectors";
import { selectVideo } from "../../redux/video/video.selectors";
import "./main.styles.scss";
import Video from "./Video.component";

const Main = ({ sections, videoUrl }) => (
	<div className="wrapper">
		<div className="main">
			{sections.map(({ id, ...otherSectionProps }) => (
				<CategoryComponent key={id} {...otherSectionProps} />
			))}
		</div>
		<div className="video-background">
			{videoUrl.map(({ id, ...otherVideoProps }) => (
				<Video key={id} {...otherVideoProps} />
			))}
			Your browser does not support the video tag.
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSectionsSections,
	videoUrl: selectVideo
});

export default connect(mapStateToProps)(Main);
