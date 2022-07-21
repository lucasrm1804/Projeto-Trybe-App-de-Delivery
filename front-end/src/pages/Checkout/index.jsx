import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Table from '../../components/Table';

function Checkout({ total }) {
  return (
    <>
      <Header />
      <div>
        <h2>Finalizar Pedido</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            <Table
              item="item"
              description="descricao"
              quantity="0"
              unitaryValue="0"
              subTotal="0"
            />
          </tbody>
        </table>
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
        <label htmlFor="button">
          <button
            type="button"
            text="FINALIZAR PEDIDO"
            datat-testid="customer_checkout__button-submit-order"
          >
            FINALIZAR PEDIDO
          </button>
        </label>
      </div>
    </>
  );
}

Checkout.propTypes = {
  total: PropTypes.string.isRequired,
};

export default Checkout;
