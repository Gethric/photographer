import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/Body/Body.component";
import About from "./pages/About/About.pages";
import Photography from "./pages/Photography/Photography.pages";
import Film from "./pages/Film/Film.pages";
import ContactForm from "./pages/Contact/Contact.pages";
import SignInSignUp from "./pages/SignIn_SignUp/SignInSignUp.pages";

import "./sass/app.styles.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Body} />
				<Route path="/about" component={About} />
				<Route path="/photography" component={Photography} />
				<Route path="/film" component={Film} />
				<Route path="/contact" component={ContactForm} />
				<Route path="/signin" component={SignInSignUp} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
