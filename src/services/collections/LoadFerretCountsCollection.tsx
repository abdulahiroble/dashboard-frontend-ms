import axios from 'axios';

class LoadFerretCountsCollection {
    getAllTickets = async () => {
        const result = await axios.get(`http://localhost:8080/api/tickets`);

        return result.data
    }
}

export default new LoadFerretCountsCollection();