import BarChart from '../components/BarChart'
import Sidebar from '../components/Sidbar'
import { Counter } from '../features/counter/Counter'

const AssetQualityChart = () => {
    return (
        <div className="App">
            <Sidebar>
                <BarChart />
            </Sidebar>
        </div>
    )
}

export default AssetQualityChart