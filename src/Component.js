import React, { useState, useEffect } from 'react';
import Table from './Table';

const Component = () => {
  const [data, sethata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false', { crossDomain: 'true' });
        
        const jsonData = await response.json();
        console.log(jsonData)
        sethata(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1>Fetching Data from API</h1>
        <table>
   <thead>
   <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Id</th>
      <th>Total Volume</th>
      <th>Currett Price</th>
      </tr>
  </thead>
  <tbody>
    {data.map(item => (
      <Table key={item.id} data={item} />
    ))}
    </tbody>
  </table>
    </div>
    
   
  );
};

export default Component;
