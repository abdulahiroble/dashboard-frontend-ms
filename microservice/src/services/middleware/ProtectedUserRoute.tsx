import { useNavigate } from "react-router-dom";
import ApiContext from '../ApiContext'
import { useEffect, useState } from "react";

export const ProtectedUserRoute = ({ children }: { children: React.ReactNode }) => {
    const Navigate = useNavigate();

    useEffect(() => {
        async function hasJWT() {
            console.log("ID===222", localStorage.getItem('userId'))

            const signedIn = await ApiContext.LoadUserCollection.validateSignin(localStorage.getItem('token'), localStorage.getItem('userId'))
            console.log("SIGNEDIN====", signedIn)
            if (!signedIn.veryfied) {
                console.log("NOP")
                return Navigate('/login')
            }
        }

        hasJWT();
    }, [])
    return <>{children}</>
};