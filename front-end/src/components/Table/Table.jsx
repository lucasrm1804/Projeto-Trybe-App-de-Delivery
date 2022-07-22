import React from 'react';
import Row from './Row';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        <Row
          item="item"
          description="descricao"
          quantity="0"
          unitaryValue="0"
          subTotal="0"
        />
      </tbody>
    </table>
  );
}

export default Table;
