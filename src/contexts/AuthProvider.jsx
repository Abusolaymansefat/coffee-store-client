import React from 'react';
import { AuthContex } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
       createUser,
       singInUser
    }


    return (
        <div>
            <AuthContex value={userInfo}>
                {children}
            </AuthContex>
        </div>
    );
};

export default AuthProvider;