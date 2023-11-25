import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AssetQualityMap from './pages/AssetQualityMap';
import AssetQualityTable from './pages/AssetQualityTable';
import AssetQualityChart from './pages/AssetQualityChart';
import Login from './pages/Login';
import ContactFormComponent from './components/ContactFormComponent';
import Registration from './pages/Registration';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='login' element={<Login />} />
          {/* <Route path="profile/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
          <Route path="/Registration" element={<Registration />} />
          <Route path="contact" element={<ContactFormComponent />} />
          <Route path="map" element={<AssetQualityMap />} />
          <Route path="table" element={<AssetQualityTable />} />
          <Route path="chart" element={<AssetQualityChart />} />
          {/* <Route path="admin" element={<ProtectedAdminRoute><AdminUI /></ProtectedAdminRoute>} /> */}
          {/* <Route path="admin/logs" element={<ProtectedAdminRoute><AdminLog /></ProtectedAdminRoute>} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
