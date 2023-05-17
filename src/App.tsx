import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './scenes/Layout';
import Dashboard from './scenes/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
