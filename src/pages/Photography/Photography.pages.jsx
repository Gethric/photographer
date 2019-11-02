import React from "react";
import "./Photography.styles.scss";
import PHOTOS2 from "../../assets/Photos2.assets";
import Preview from "../../components/Preview/Preview.component";

class Photography extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: PHOTOS2
		};
	}

	render() {
		const { photos } = this.state;
		return (
			<div className="photography-page">
				{photos.map(({ id, ...otherPhotosProps }) => (
					<Preview key={id} {...otherPhotosProps} />
				))}
			</div>
		);
	}
}

export default Photography;
