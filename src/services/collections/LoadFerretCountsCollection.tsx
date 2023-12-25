import axios from 'axios';

class LoadFerretCountsCollection {
    getAllFerrets = async () => {
        const result = await axios.get(`http://localhost:3004/api/get/all/ferretCounts`);

        return result.data
    }
}

export default new LoadFerretCountsCollection();