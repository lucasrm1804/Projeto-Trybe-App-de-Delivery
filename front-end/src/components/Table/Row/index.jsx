import React from 'react';
import PropTypes from 'prop-types';

function Row({ item, description, quantity, unitaryValue, subTotal, onClick, index }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {item}
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {description}
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {unitaryValue}
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {subTotal}
      </td>

      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ onClick }
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
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Row;
