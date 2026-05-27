import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Cities from './components/Cities';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  function addCity(newCity) {
    setCities([...cities, newCity]);
  }

  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <h1>Cities Application</h1>

          <nav>
            <Link to="/cities">Cities List</Link>
            <Link to="/add-city">Add City</Link>
          </nav>
        </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<Cities cities={cities} />}>
              <Route path="cities/:id" element={<CityDetails cities={cities} />} />
            </Route>

            <Route path="/cities" element={<Cities cities={cities} />}>
              <Route path=":id" element={<CityDetails cities={cities} />} />
            </Route>

            <Route path="/add-city" element={<AddCity addCity={addCity} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;