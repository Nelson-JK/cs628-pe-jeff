import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Cities({ cities }) {
  return (
    <div>
      <h2>Cities List</h2>

      {cities.length === 0 ? (
        <p>No cities added yet.</p>
      ) : (
        <ul>
          {cities.map((city) => (
            <li key={city.id}>
              <Link to={`/cities/${city.id}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
      )}

      <Outlet />
    </div>
  );
}

export default Cities;