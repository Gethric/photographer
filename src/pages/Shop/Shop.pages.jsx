import React from "react";
import PHOTOS from "../../assets/photos.assets";

class Shop extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: PHOTOS
		};
	}

	render() {
		return <div>SHOP</div>;
	}
}

export default Shop;
