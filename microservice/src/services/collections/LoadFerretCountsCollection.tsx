import axios from 'axios';

let url = process.env.REACT_APP_PRODUCTION_THIRD_PARTY_URL;
if (process.env.REACT_APP_PRODUCTION == "0") {
    url = process.env.REACT_APP_DEV_THIRD_PARTY_URL;
}
class LoadFerretCountsCollection {
    getAllFerrets = async () => {
        const result = await axios.get(`${url}api/get/all/ferretCounts`);

        return result.data
    }
}

export default new LoadFerretCountsCollection();