import React from 'react';
import PropTypes from 'prop-types';

function Row({ item, description, quantity, unitaryValue, subTotal }) {
  return (
    <tr>
      <td
        data-testid="customer_checkout__element-order-table-item-number-"
      >
        {item}
      </td>

      <td
        data-testid="customer_checkout__element-order-table-name-"
      >
        {description}
      </td>

      <td
        data-testid="customer_checkout__element-order-table-quantity-"
      >
        {quantity}
      </td>

      <td
        data-testid="customer_checkout__element-order-table-unit-price-"
      >
        {unitaryValue}
      </td>

      <td
        data-testid="customer_checkout__element-order-table-sub-total-"
      >
        {subTotal}
      </td>

      <td>
        <button
          data-testid="customer_checkout__element-order-table-remove-"
          type="button"
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

Row.propTypes = {
  item: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  unitaryValue: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
};

export default Row;
