import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBHeCSTRn1wqJLfC-jrr6MzKeRUB_R3BA0",
	authDomain: "photostore-8b61e.firebaseapp.com",
	databaseURL: "https://photostore-8b61e.firebaseio.com",
	projectId: "photostore-8b61e",
	storageBucket: "photostore-8b61e.appspot.com",
	messagingSenderId: "217172679174",
	appId: "1:217172679174:web:16431405f3f775bdc80187",
	measurementId: "G-9RYRZ2QPCR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createMessageDocument = ({ name, email, subject, message }) => {
	firestore
		.collection("messages")
		.add({
			name: name,
			message: message,
			email: email,
			subject: subject
		})

		.then(function() {
			console.log("Document successfully written!");
		})
		.catch(function(error) {
			console.error("Error writing document: ", error);
		});
};

export default firebase;
