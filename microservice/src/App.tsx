import './App.css';
import MapComponent from './components/MapComponent';
import Sidebar from './components/Sidbar';

function App() {
  return (
    <div className="App">
      <Sidebar>
        <MapComponent />
      </Sidebar>
    </div>
  );
}

export default App;
