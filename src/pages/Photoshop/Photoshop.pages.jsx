import React from "react";
import Overview from "../../components/Overview/Overview.component";

import "./Photoshop.styles.scss";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection.page";

const Photoshop = ({ match }) => (
	<div className="photoshop-page">
		<Route exact path={`${match.path}`} component={Overview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

export default Photoshop;
