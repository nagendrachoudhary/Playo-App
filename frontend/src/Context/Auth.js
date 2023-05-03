import { createContext, useEffect, useState } from "react";
import { LoginApi, getLoggedInUser } from "../Api/Api";
import React from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = React.createContext({
    user: null,
    setUser: (user) => {},
    showLoginForm: false,
    setShowLoginForm: (show) => {},
    login: (email, password) => {},
    logout: () => {},
})
export function AuthContextProvider({children}){
    const [user, setUser] = useState(null);
    const [showLoginForm, setShowLoginForm] = useState(true);
    async function login(email, password) {
        LoginApi(email, password)
        .then(response => {
            const {token} = response.data;
            localStorage.setItem('token', JSON.stringify(token));
            setShowLoginForm(false);
            
            window.location.reload();
        })
        .catch(err => {
            alert(err.response.data.error, {
                type: 'error'
            })
        });
    }

    function logout() {
        localStorage.removeItem('token');
        setShowLoginForm(true);
        window.location.reload();
    }

    useEffect(() => {
        getLoggedInUser()
        .then(response => {
            console.log("response")
            const user = response.data;
            setUser(user);
        }).catch((err)=>{
            console.log(err)
        })
    }, [showLoginForm])

    return <AuthContext.Provider value={{
        user, setUser,
        showLoginForm, setShowLoginForm,
        login, logout,
    }}>
        {children}
    </AuthContext.Provider>
}