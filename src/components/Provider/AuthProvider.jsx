import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { createContext, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { PropTypes } from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password

  const signInWithEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // create user with google account

  const createUserWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // sign in with google user

  const signInWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  };

  const data = {
    user,
    loading,
    createUser,
    signInWithEmailAndPass,
    createUserWithGoogle,
    signInWithGoogle,
    error,
    setError,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
