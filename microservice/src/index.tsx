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
import { ProtectedUserRoute } from './services/middleware/ProtectedUserRoute';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedUserRoute><App /></ProtectedUserRoute>} />
        <Route path='login' element={<Login />} />
        {/* <Route path="profile/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
        <Route path="/registration" element={<Registration />} />
        <Route path="contact" element={<ContactFormComponent />} />
        <Route path="map" element={<ProtectedUserRoute><AssetQualityMap /></ProtectedUserRoute>} />
        <Route path="table" element={<ProtectedUserRoute><AssetQualityTable /></ProtectedUserRoute>} />
        <Route path="chart" element={<ProtectedUserRoute><AssetQualityChart /></ProtectedUserRoute>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
