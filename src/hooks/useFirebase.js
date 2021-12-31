import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const singInUsingGoogle = (location, navigate) => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setLoginError('');
                const user = result.user;
                const email = user.email;
                const displayName = user.displayName;
                saveUser(email, displayName, 'PUT');
                setLoginError('');

                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                setLoginError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }
    // GOOGLE EMAIL SIGN UP
    const signUpUsingEmail = (name, email, password, location, navigate) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setLoginError('');
                const newUser = { email, displayName: name }
                setUser(newUser);

                //Save to database
                saveUser(email, name, 'POST');
                updateEmailSignUpProfile(name);
                const destination = location?.state?.from || '/';
                navigate(destination);

            })
            .catch(error => {
                setLoginError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // GOOGLE EMAIL LOGIN
    const signInUsingEmail = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setLoginError('');
            })
            .catch(error => {
                setLoginError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const updateEmailSignUpProfile = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => { })
            .catch((error) => {
                // An error occurred
                // ...
            });
    }

    useEffect(() => {
        const unsbscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsbscribed;
    }, [])

    useEffect(() => {
        fetch(`https://powerful-sands-79915.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])
    const saveUser = (email, displayName, method) => {
        //email:email, displayName: displayName
        const user = { email, displayName };
        console.log("user:", user);
        fetch('https://powerful-sands-79915.herokuapp.com/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        })
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {

            })
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        admin,
        loginError,
        singInUsingGoogle,
        signUpUsingEmail,
        signInUsingEmail,
        updateEmailSignUpProfile,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;