import BarChart from '../components/BarChart'
import Sidebar from '../components/Sidbar'

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