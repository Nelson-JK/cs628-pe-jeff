import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ addCity }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newCity = {
      id: Date.now().toString(),
      name: name,
      country: country,
      population: population
    };

    addCity(newCity);

    setName('');
    setCountry('');
    setPopulation('');

    navigate('/cities');
  }

  return (
    <div>
      <h2>Add City</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name:</label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label>Country:</label>

          <input
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label>Population:</label>

          <input
            type="text"
            value={population}
            onChange={(event) => setPopulation(event.target.value)}
            required
          />
        </div>

        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;