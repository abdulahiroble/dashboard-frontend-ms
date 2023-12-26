import axios from 'axios';

class LoadForbrugsCollection {
    getAllForbrug = async () => {
        const result = await axios.get(`http://localhost:3004/api/get/all/forbrug`);

        return result.data
    }
}

export default new LoadForbrugsCollection();