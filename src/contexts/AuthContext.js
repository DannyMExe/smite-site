import React, { useContext, useState, useEffect } from "react";
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

  // const users = useSelector((state) => state.users);

  async function signup(username, email, password) {
    try {
    const response = await axios.post("/api/users", { username: username, email: email, password: password });
    await login({username, email, password});
    } catch (error) {
      console.log(error);
      }

    // return createUserWithEmailAndPassword(auth, email, password);
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
    const response = await axios.post("/api/auth", credentials);
    const { token } = response.data;
    window.localStorage.setItem("token", token);
    await attemptToLogin();
  };

//   const updateUser = async() => {
//     console.log('b4')
//     const {data: myUser} = await axios.get("/api/user/", {
//         params: sign.auth
//       })
//       console.log('here')
//       setCurrentUser(myUser);
//   }

  const attemptToLogin = async () => {
    const token = window.localStorage.getItem("token");

    if (token) {
      console.log('here')
      const { data: response } = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      setSign({ auth: response });
      // console.log(response);
      window.localStorage.setItem("user", JSON.stringify(response));
      return response;
    } else {
      return "Not signed in";
    }
  };

  // React.useEffect(()=>{
  //     login();
  // },[])

  function logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    setSign({ auth: {} });
    return 'success';
  }

  function resetPassword(email) {
    // return sendPasswordResetEmail(auth, email);
  }

  function runUpdateEmail(user, email) {
    // axios.post('/api/users/update')
    // return updateEmail(user, email);
  }

  function runUpdatePassword(user, password) {
    // return updatePassword(user, password);
  }

  useEffect(() => {
    setLoading(false);
    // const unsubscribe = auth.onAuthStateChanged((user) => {
      // setLoading(false);
    // });

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
