import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';
import appContext from '../../context/appContext';

function CartButton() {
  const { totalPrice } = useContext(appContext);
  const history = useHistory();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleDisabled = () => {
    if (totalPrice > 0) {
      setButtonDisabled(false);
    }
    if (totalPrice === 0) {
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    handleDisabled();
  }, [totalPrice]);

  return (
    <button
      disabled={ buttonDisabled }
      onClick={ () => history.push('/customer/checkout') }
      data-testid="customer_products__button-cart"
      type="button"
      className={ styles.cartButton }
    >
      <div data-testid="customer_products__checkout-bottom-value">
        {`Ver Carrinho: R$${totalPrice.toFixed(2).toString().replace(/\./, ',')}` }
      </div>
    </button>
  );
}

// CartButton.propTypes = {
//   price: PropTypes.number.isRequired,
// };

export default CartButton;
