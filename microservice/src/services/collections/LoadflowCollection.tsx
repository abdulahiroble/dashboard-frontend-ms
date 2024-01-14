import axios from 'axios';


let url = process.env.REACT_APP_PRODUCTION_THIRD_PARTY_URL;
if (process.env.REACT_APP_PRODUCTION == "0") {
    url = process.env.REACT_APP_DEV_THIRD_PARTY_URL;
}
class LoadflowCollection {
    [x: string]: any;
    getAllLoadflow = async () => {
        console.log("URLO===",url)

        const result = await axios.get(`${url}api/get/loadflow-nkforsyning`);

        return result.data
    }
}

export default new LoadflowCollection();