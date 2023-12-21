import { useNavigate } from "react-router-dom";
import ApiContext from '../ApiContext'
import { useEffect, useState } from "react";

export const ProtectedRoute = ({ children }: { children: any }) => {
    const Navigate = useNavigate();

    useEffect(() => {
        async function hasJWT() {
            const signedIn = await ApiContext.LoadUserCollection.validateSignin(localStorage.getItem('token'), localStorage.getItem('userId'))
            if (!signedIn.veryfied)
                return Navigate('/login')
        }

        hasJWT();
    }, [Navigate])
    return children
};