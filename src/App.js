import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./sass/app.styles.scss";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp.page.";
import Gallery from "./components/Gallery/Gallery.component";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Gallery} />
				<Route path="/signin" component={SignInSignUp} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
