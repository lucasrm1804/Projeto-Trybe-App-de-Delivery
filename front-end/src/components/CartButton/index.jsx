import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

function CartButton({ price }) {
  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
      className={ styles.cartButton }
    >
      {`Ver Carrinho: R$ ${price}`}
    </button>
  );
}

CartButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default CartButton;
