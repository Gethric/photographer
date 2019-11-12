import React from "react";
import ItemPreview from "../../components/Preview/ItemPreview.component";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectPhoto } from "../../redux/photoshop/photoshop.selectors";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map(item => (
					<ItemPreview key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectPhoto(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
