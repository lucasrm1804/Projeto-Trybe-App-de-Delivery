import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function ProductCards(props) {
  const { id, valor, img, name } = props;
  const [count, setCount] = useState(0);
  return (
    <div className={ styles.cardDiv }>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {valor}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ img }
        alt={ name }
      />
      <h2 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h2>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => {
          setCount(count - 1);
        } }
        type="button"
      >
        -
      </button>
      <label htmlFor="quantity">
        <input
          value={ count }
          id="quantity"
          name="quantity"
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
      </label>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => {
          setCount(count + 1);
        } }
        type="button"
      >
        +
      </button>
    </div>
  );
}

ProductCards.propTypes = {
  id: PropTypes.number.isRequired,
  valor: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
