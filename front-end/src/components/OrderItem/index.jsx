import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function OrderItem({ id, status, data, totalPrice }) {
  return (
    <div>
      <Link to={ `/customer/orders/${id}` }>
        <p data-testid={ `customer_orders__element-order-id-${id}` }>
          Pedido:
          {id}
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {status}
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {data.split(' ')}
        </p>
        <p data-testid={ `customer_orders__element-card-price-${id}` }>{totalPrice}</p>
      </Link>
    </div>
  );
}

OrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
