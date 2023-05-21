/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut


} from "firebase/auth";
import { app } from './firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((err) => {
            });
    };
    const gitHubProvider = new GithubAuthProvider();

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((err) => {
                // console.log(err.message);
            });
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserDetails = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setUser("user updated");
            })
            .catch((err) => {
                // console.log(err.message);
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        registerUser,
        handleGoogleSignIn,
        user,
        handleGitHubSignIn,
        signIn,
        logOut,
        updateUserDetails,
        loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );


};

export default AuthProvider;