import React, {useState, createContext} from 'react';


export const AuthContext = createContext();


const [auth, setAuth] = {
    token: localStorage.getItem('token'),
    isAuth: null,
    isLoading: false,
    user: null
}

export const AuthProvider = (props) => {

}

return (
    <AuthContext.Provider value={[auth, setAuth]}>
        { props.children }
    </AuthContext.Provider>
    );

