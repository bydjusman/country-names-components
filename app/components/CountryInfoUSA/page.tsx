import React from 'react';

const CountryInfoUSA = () => {
  const countryData = {
    name: 'United States',
    population: '331 million',
    capital: 'Washington, D.C.',
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '300px', margin: '10px' }}>
      <h2>Country: {countryData.name}</h2>
      <p><strong>Population:</strong> {countryData.population}</p>
      <p><strong>Capital:</strong> {countryData.capital}</p>
    </div>
  );
};

export default CountryInfoUSA;