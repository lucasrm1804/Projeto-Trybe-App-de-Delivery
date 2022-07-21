import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function ProductCards(props) {
  const { id, valor, img, name } = props;
  const [count, setCount] = useState(0);

  const addQuantity = () => {
    setCount(count + 1);
    const productList = JSON.parse(localStorage.getItem('carrinho'));
    if (productList.some((p) => p.id === id)) {
      productList.forEach((p) => {
        if (p.id === id) {
          p.quantity += 1;
        }
      });
      localStorage.setItem('carrinho', JSON.stringify(productList));
    } else {
      productList.push({
        id,
        name,
        quantity: 1,
        value: valor,
      });
      localStorage.setItem('carrinho', JSON.stringify(productList));
    }
  };

  const removeQuantity = () => {
    setCount(count - 1);
    const productList = JSON.parse(localStorage.getItem('carrinho'));
    if (count <= 0) {
      setCount(0);
    } else {
      productList.forEach((p) => {
        if (p.id === id && count > 0) {
          p.quantity -= 1;
        }
      });
      localStorage.setItem('carrinho', JSON.stringify(productList));
    }
  };

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem('carrinho'));
    const removeProduct = productList.filter((p) => p.quantity !== 0);
    localStorage.setItem('carrinho', JSON.stringify(removeProduct));
  }, [count]);

  return (
    <div className={ styles.cardDiv }>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {valor}
      </span>
      <img
        style={ { width: '150px' } }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ img }
        alt={ name }
      />
      <h2 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h2>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => {
          removeQuantity();
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
          addQuantity();
        } }
        id={ id }
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
