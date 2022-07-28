import React from 'react';
import appContext from '../../context/appContext';
import RowSellerOrderDetails from './Row';

function TableSellerOrderDetails() {
  const { orderDetail } = React.useContext(appContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {orderDetail.Product.map((item, index) => (
          <RowSellerOrderDetails
            key={ item.id }
            item={ index + 1 }
            index={ index }
            description={ item.name }
            quantity={ item.SalesProducts.quantity }
            unitaryValue={ Number(item.price.replace(',', '.')).toFixed(2) }
            subTotal={ (Number(item.SalesProducts.quantity) * Number(item.price))
              .toFixed(2) }
          />
        ))}
      </tbody>
    </table>
  );
}

export default TableSellerOrderDetails;
