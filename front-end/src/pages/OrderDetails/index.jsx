import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import appContext from '../../context/appContext';

import Header from '../../components/Header';
import TableOrderDetails from '../../components/TableOrderDetails';

function OrderDetails() {
  const { orderId } = useContext(appContext);
  const [orderInfo, setOrderInfo] = useState({});
  console.log('id orderDetails', orderId);

  const dtId = 'customer_order_details__element-order-details-label-order-id';
  const dtSaller = 'customer_order_details__element-order-details-label-seller-name';
  const dtDate = 'customer_order_details__element-order-details-label-order-date';
  const dtStatus = 'customer_order_details__element-order-details-label-delivery-status';
  const dtCheck = 'customer_order_details__button-delivery-check';

  const getSaleById = async (id) => {
    await axios.get(`http://localhost:3001/customer/orders/${id}`)
      .then((response) => {
        setOrderInfo(response.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSaleById(orderId);
  }, []);
  console.log('info', orderInfo);

  const d = 10;

  return (
    <div>
      { orderInfo.id
      && (
        <>
          <Header />
          <h2>Detalhes do Pedido</h2>
          <div>
            <div>
              <span>
                <h3
                  data-testid={ dtId }
                >
                  Pedido
                  {' '}
                  { orderInfo.id }
                </h3>
              </span>
              <span
                data-testid={ dtSaller }
              >

                Vendedor
                {' '}
                {orderInfo && orderInfo.User.name }

              </span>
              <span
                data-testid={ dtDate }
              >
                { orderInfo && orderInfo.saleDate
                  .slice(0, d).split('-').reverse().join('/') }
              </span>
              <span
                data-testid={ dtStatus }
              >
                { orderInfo.status }
              </span>
              <button
                type="button"
                disabled={ orderInfo.status !== 'Entregue' }
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
                  { orderInfo.totalPrice.replace('.', ',') }
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderDetails;
