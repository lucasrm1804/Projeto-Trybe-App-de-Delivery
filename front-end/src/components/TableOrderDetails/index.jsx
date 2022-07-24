import React, { useContext, useEffect } from 'react';
import appContext from '../../context/appContext';
import Row from './Row';

function TableOrderDetails() {
  const { setTotalPrice, pedido, setPedido } = useContext(appContext);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho) {
      setPedido(carrinho);
    }
  }, [setPedido]);
  const removeProduct = (target) => {
    const removeFilter = pedido.filter((p) => p.id !== target);
    setPedido(removeFilter);
  };
  useEffect(() => {
    const mapLs = pedido
      .map((p) => Number(p.quantity) * Number(p.value.replace(',', '.')));
    const newPrice = mapLs.reduce((curr, acc) => {
      acc += curr;
      return acc;
    }, 0);
    setTotalPrice(newPrice);
  });

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
        {pedido.map((item, index) => (
          <Row
            key={ item.id }
            item={ index + 1 }
            index={ index }
            description={ item.name }
            quantity={ item.quantity }
            unitaryValue={ item.value }
            subTotal={ (item.quantity * Number(item.value.replace(',', '.'))).toFixed(2)
              .toString().replace('.', ',') }
            onClick={ () => removeProduct(item.id) }
          />
        ))}

      </tbody>
    </table>
  );
}

export default TableOrderDetails;
