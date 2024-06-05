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
import useAxiosPublic from "../hooks/useAxiosPublic";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
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
  const axiosPublic = useAxiosPublic();

  // const setDefaultRole = async (uid) => {
  //   const userRef = doc(db, "users", uid);
  //   const docSnap = await getDoc(userRef);

  //   if (!docSnap.exists()) {
  //     await setDoc(userRef, {
  //       role: "member",
  //     });
  //   }
  // };
  
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const logInUser = result.user;
        setUser(logInUser);
        toast.success("Signed in with Google successfully!");

        // Prepare user data for the API
        const user = {
          displayName: logInUser.displayName,
          email: logInUser.email,
          photoURL: logInUser.photoURL,
          role: "member",
        };

        // Make a POST request to the API
        try {
          const response = await axiosPublic.post("/users", user);
          if (response.data.insertedId) {
            // toast.success("User data inserted successfully!");
          } else if (response.data.message === "user already exists") {
            toast.warn("User already exists!");
          }
        } catch (error) {
          console.error("Error inserting user data:", error);
          toast.error("Failed to insert user data!");
        }
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
