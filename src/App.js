import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="container">
      <h1 className="my-4">Country Information</h1>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
