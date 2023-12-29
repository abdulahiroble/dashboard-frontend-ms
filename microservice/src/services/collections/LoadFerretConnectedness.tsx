import axios from 'axios';

class LoadFerretConnectedness {
    getAllFerretConnectedness = async () => {
        const result = await axios.get(`http://localhost:3004/api/get/all/ferretConnectedness`);

        return result.data
    }
}

export default new LoadFerretConnectedness();