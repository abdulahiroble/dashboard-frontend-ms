import axios from 'axios';

let url = process.env.REACT_APP_PRODUCTION_THIRD_PARTY_URL;
if (process.env.REACT_APP_ENVIRONMENT !== 'prod') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}
class LoadFerretConnectedness {
    getAllFerretConnectedness = async () => {
        const result = await axios.get(`http://34.171.198.65/api/get/all/ferretConnectedness`);

        return result.data
    }
}

export default new LoadFerretConnectedness();