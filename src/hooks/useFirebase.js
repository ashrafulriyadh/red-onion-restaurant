import { useEffect, useState } from "react";
import initializeAuthentication from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {

	const [user, setUser] = useState();

	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		signInWithPopup(auth,googleProvider)
		.then(result => {

		})
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user) {
				setUser(user);
			}
			else {
				setUser({});
			}
		})
	})



	return {
		user,
		signInUsingGoogle
	}
}

export default useFirebase;