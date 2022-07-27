import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SellerOrderItem(props) {
  const { id, status, data, totalPrice, index, deliveryAddress, deliveryNumber } = props;
  const d = 10;
  return (
    <div>
      <Link to={ `/seller/orders/${id}` }>
        <p data-testid={ `seller_orders__element-order-date-${index}` }>
          Pedido:
          {id}
        </p>
        <p
          data-testid={ `seller_orders__element-delivery-status-${index}` }
        >
          {status}
        </p>
        <p
          data-testid={ `seller_orders__element-order-date-${index}` }
        >
          {data.slice(0, d).split('-').reverse().join('/')}
        </p>
        <p
          data-testid={ `seller_orders__element-card-price-${index}` }
        >
          {totalPrice}

        </p>
        <p
          data-testid={ `seller_orders__element-card-address-${index}` }
        />
        { `${deliveryAddress}, ${deliveryNumber}` }
      </Link>
    </div>
  );
}

SellerOrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
};
