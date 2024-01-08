import axios from 'axios';


// let url = process.env.REACT_APP_DEVELOPMENT_SEARCH_SERVICE_URL;
// if (process.env.REACT_APP_ENVIRONMENT != 'prod') {
//     url = process.env.REACT_APP_DEVELOPMENT_URL;
// }
class LoadflowCollection {
    [x: string]: any;
    getAllLoadflow = async () => {
        const result = await axios.get(`http://localhost:3004/api/get/loadflow-nkforsyning`);

        return result.data
    }
}

export default new LoadflowCollection();