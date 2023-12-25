import axios from 'axios';


// let url = process.env.REACT_APP_DEVELOPMENT_SEARCH_SERVICE_URL;
// if (process.env.REACT_APP_ENVIRONMENT != 'prod') {
//     url = process.env.REACT_APP_DEVELOPMENT_URL;
// }
class LoadStationsCollection {
    getAllStations = async () => {
        const result = await axios.get(`http://localhost:3004/api/get/all/stations`);

        return result.data
    }
}

export default new LoadStationsCollection();