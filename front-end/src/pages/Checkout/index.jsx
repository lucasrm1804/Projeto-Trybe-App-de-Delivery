import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Table from '../../components/Table/Table';

function Checkout({ total }) {
  return (
    <>
      <Header />
      <div>
        <h2>Finalizar Pedido</h2>
        <Table />
        <span data-testid="customer_checkout__element-order-total-price">
          Total: R$
          { total }
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
          placeholder="Digite seu endereço"
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        <span>Número</span>
        <input
          id="number"
          type="text"
          datat-testid="customer_checkout__input-addressNumber"
        />
      </label>
      <div>
        <button
          type="button"
          text="FINALIZAR PEDIDO"
          datat-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

Checkout.propTypes = {
  total: PropTypes.string.isRequired,
};

export default Checkout;
