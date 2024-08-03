import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        setCountry(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {country && (
        <>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital[0]}</p>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ width: '200px' }} />
        </>
      )}
    </div>
  );
}

export default CountryDetail;