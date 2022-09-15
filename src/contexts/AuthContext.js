import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import axios from "axios";
import { useSelector } from "react-redux";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [sign, setSign] = useState();

  const users = useSelector((state) => state.users);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // function login(email, password) {
  //     return signInWithEmailAndPassword(auth, email, password)
  // }

//   const login = async (email, password) => {
//     user = users.find(
//       (user) => user.email === email && user.password === password
//     );
//     if (user) {
//       return user.id;
//     }
//     const error = Error("Bad Credentials");
//     error.status = 401;
//     throw error;
//   };

//   const loginWithEmailAndPassword = async (email, password) => {
//     user = users.find(
//       (user) => user.email === email && user.password === password
  const login = async (credentials) => {
    console.log(credentials)
    const response = await axios.post('/api/auth', credentials);
        const { token } = response.data;
        window.localStorage.setItem('token', token);
        attemptToLogin();
  }

  const attemptToLogin = async () => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const { data: response } = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      setSign({ auth: response });
      console.log(response);
    }
  };

  // React.useEffect(()=>{
  //     login();
  // },[])

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function runUpdateEmail(user, email) {
    return updateEmail(user, email);
  }

  function runUpdatePassword(user, password) {
    return updatePassword(user, password);
  }

  useEffect(() => {
    setLoading(false);
    // const unsubscribe = auth.onAuthStateChanged((user) => {
    //   setCurrentUser(user);
    //   setLoading(false);
    // },);

    // return unsubscribe;
  }, [sign]);

  const value = {
    currentUser,
    sign,
    signup,
    login,
    logout,
    resetPassword,
    runUpdateEmail,
    runUpdatePassword,
    attemptToLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
