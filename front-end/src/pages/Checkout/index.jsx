import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Table from '../../components/Table/Table';
import appContext from '../../context/appContext';

function Checkout() {
  const { totalPrice } = useContext(appContext);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (address && addressNumber) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [address, addressNumber]);
  return (
    <>
      <Header />
      <div>
        <h2>Finalizar Pedido</h2>
        <Table />
        <span data-testid="customer_checkout__element-order-total-price">
          Total: R$
          { totalPrice.toFixed(2).toString().replace(/\./, ',')}
        </span>
      </div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
      </div>
      <label htmlFor="seller">
        <span>P. Vendedor Responsável:</span>
        <select
          id="seller"
          aria-label="seller"
          name="seller"
          data-testid="customer_checkout__select-seller"
        />
      </label>
      <label htmlFor="address">
        <span>Endereço</span>
        <input
          id="address"
          type="text"
          value={ address }
          onChange={ ({ target }) => setAddress(target.value) }
          placeholder="Digite seu endereço"
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        <span>Número</span>
        <input
          onChange={ ({ target }) => setAddressNumber(target.value) }
          id="number"
          type="number"
          value={ addressNumber }
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
      <div>
        <button
          type="button"
          text="FINALIZAR PEDIDO"
          data-testid="customer_checkout__button-submit-order"
          disabled={ disabled }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

export default Checkout;
