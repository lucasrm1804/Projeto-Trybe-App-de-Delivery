import React from 'react';

import Header from '../../components/Header';
import TableOrderDetails from '../../components/TableOrderDetails';

function OrderDetails() {
  const dtId = 'customer_order_details__element-order-details-label-order-id';
  const dtSaller = 'customer_order_details__element-order-details-label-seller-name';
  const dtDate = 'customer_order_details__element-order-details-label-order-date';
  const dtStatus = 'customer_order_details__element-order-details-label-delivery-status';
  const dtCheck = 'customer_order_details__button-delivery-check';

  return (
    <div>
      <Header />
      <h2>Detalhes do Pedido</h2>
      <div>
        <div>
          <span
            data-testid={ dtId }
          >
            <h3>Pedido</h3>
            1
          </span>
          <span
            data-testid={ dtSaller }
          >
            Vendedor
          </span>
          <span
            data-testid={ dtDate }
          >
            07/04/2021
          </span>
          <span
            data-testid={ dtStatus }
          >
            Entregue
          </span>
          <button
            type="button"
            disabled="disabled"
            data-testid={ dtCheck }
          >
            MARCAR COMO URGENTE
          </button>
          <div>
            <TableOrderDetails />
          </div>
          <div>
            <button
              type="button"
              data-testid="customer_order_details__element-order-total-price"
            >
              Total: R$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
