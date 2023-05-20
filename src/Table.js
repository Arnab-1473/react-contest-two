
import React from 'react';

const Table= ({ data }) => {
  const {image, name, symbol, id, total_volume,current_price} = data;

  return (
    <tr>
      <td>
        <img src={image} alt={name} width="20" height="20" />
      </td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{id}</td>
      <td>${total_volume}</td>
      <td>${current_price}</td>
    </tr>

  );
};

export default Table;
