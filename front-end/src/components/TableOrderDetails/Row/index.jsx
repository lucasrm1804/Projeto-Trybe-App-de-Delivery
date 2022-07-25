import React from 'react';
import PropTypes from 'prop-types';

function RowOrderDetails({ item, description, quantity, unitaryValue, subTotal, index }) {
  return (
    <tr>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        {item}
      </td>

      <td
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        {description}
      </td>

      <td
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>

      <td
        data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
      >
        {unitaryValue}
      </td>

      <td
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        {subTotal}
      </td>
    </tr>
  );
}

RowOrderDetails.propTypes = {
  item: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  unitaryValue: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RowOrderDetails;
