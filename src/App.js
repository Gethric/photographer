import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/Body/Body.component";
import About from "./pages/About/About.pages";
import Photography from "./pages/Photography/Photography.pages";
import Film from "./pages/Film/Film.pages";
import ContactForm from "./pages/Contact/Contact.pages";
import SignInSignUp from "./pages/SignIn_SignUp/SignInSignUp.pages";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

import "./sass/app.styles.scss";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={Body} />
					<Route path="/about" component={About} />
					<Route path="/photography" component={Photography} />
					<Route path="/film" component={Film} />
					<Route path="/contact" component={ContactForm} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
						}
					/>
				</Switch>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
