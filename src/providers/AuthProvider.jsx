import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName,
      photoURL
    );
  };

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logInUser = result.user;
        setUser(logInUser);
        toast.success("Signed in with Google successfully!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };

  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        toast.success("Signed in with GitHub successfully!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loading,

    logOut,
    signIn,
    googleSignIn,
    githubLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
