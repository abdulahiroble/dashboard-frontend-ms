import axios from 'axios';

let url = process.env.REACT_APP_PRODUCTION_THIRD_PARTY_URL;
if (process.env.REACT_APP_ENVIRONMENT !== 'prod') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}
class LoadForbrugsCollection {
    getAllForbrug = async () => {
        const result = await axios.get(`${url}api/get/all/forbrug`);

        return result.data
    }
}

export default new LoadForbrugsCollection();