import axios from "axios";

// let url = process.env.REACT_APP_PRODUCTION_AUTH_URL;
// if (process.env.REACT_APP_ENVIRONMENT_PROD !== "false") {
//     console.log("hello?")
//     url = process.env.REACT_APP_DEVELOPMENT_AUTH_URL;
// }

class LoadUserCollection {

    registerUser = async (data: any) => {
        console.log("DATA===", data)
        // const result = await axios.post(`${url}/users`, data)
        const result = await axios.post(`http://34.135.100.245/api/create/user`, data)
        console.log("RESULT=====", result)

        return result;
    }

    authenticateUser = async (data: { key: string | undefined; }) => {
        try {
            data.key = process.env.REACT_APP_SECRET_KEY;
            console.log("loginData===", data)
            const result = await axios.post(`http://34.135.100.245/api/post/login`, data) as any
            console.log("RESULT=====", result)

            let errorMessage = ""

            if (result.response?.status === 401) {
                errorMessage = result.response.statusText
                return result.error = errorMessage;
            }

            return result;
        } catch (error: any) {
            let result = {} as any;
            let errorMessage = ""
            console.log("ERRORS====", error)
            if (error.response.status) {
                errorMessage = error.response.statusText
            }
            return result.error = errorMessage;
        }
    }

    validateSignin = async (token: any, userId: any) => {
        const header = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            },
            body: JSON.stringify({ userId: userId })
        }
        const result = await fetch(`http://34.135.100.245/api/get/login/verify`, header)
        const data = await result.json();


        return data;
    }

    // getUserProfile = async (id: any) => {
    //     const result = await axios.get(`${url}/users/${id}`)
    //     return result;
    // }

    // updateProfile = async (data: any) => {
    //     const result = await axios.put(`${url}/user`, data)

    //     return result;
    // }

    // verifyAccount = async (data: { token: any; }) => {
    //     console.log("DATA===", data)
    //     const result = await axios.get(`${url}/verify/account/${data.token}`)
    //     console.log("RESULT=====", result)

    //     return result;
    // }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LoadUserCollection();