import './App.css';
import DataTable from './components/DataTable';
import Sidebar from './components/Sidbar';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <DataTable />
      </Sidebar>
    </div>
  );
}

export default App;
