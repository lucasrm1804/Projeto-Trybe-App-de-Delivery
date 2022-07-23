import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Table from '../../components/Table/Table';
import appContext from '../../context/appContext';

function Checkout() {
  const history = useHistory();
  const {
    totalPrice,
    pedido,
    // setPedido,
    globalSaleId,
    setGlobalSaleId,
  } = useContext(appContext);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [disabled, setDisabled] = useState(true);

  //   {
  //     "order": {
  //       "totalPrice": "50.00",
  //       "deliveryAddress": "Rua 123",
  //       "deliveryNumber": "4680",
  //       "saleDate": "1970-01-01 00:00:01.000000",
  //       "status": "pendente",
  //       "userId": "3",
  //       "sellerId": "2"
  //     },
  //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsImlhdCI6MTY1ODUyMTgyNiwiZXhwIjoxNjU5MTI2NjI2fQ.xBDwpXrJtDliyNCyLGHPpf3uXSY6CUHprKCWo1q_sMo"
  // }

  const lsToken = () => {
    const ls = JSON.parse(localStorage.getItem('user'));
    const { token } = ls;
    return token;
  };

  // const dezenove = 19;

  const createOrder = async () => {
    await axios.post('http://localhost:3001/customer/checkout', {
      order: {
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: addressNumber,
        saleDate: '1970-01-01 00:00:01.000000',
        // saleDate: Date().toISOString().slice(0, dezenove).replace('T', ' '),
        status: 'pendente',
        userId: 3,
        sellerId: 2,
      },
      token: lsToken(),
    }).then((newOrder) => {
      setGlobalSaleId(newOrder.data);
      // setPedido([...pedido, newOrder.data]);
    }).catch((err) => {
      console.log(err);
    });
  };

  const createSalesProducts = async () => {
    await axios.post('http://localhost:3001/customer/salesProduct', { // nome de exemplo
      saleId: globalSaleId,
      productId: pedido.id,
      quantity: pedido.quantity,
    }).catch((err) => {
      console.log(err);
    });
  };

  const getSaleId = async () => {
    const id = await createOrder();
    if (id) {
      createSalesProducts();
      return history.push(`customer/orders/${id}`);
    }
    return id;
  };

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
          onClick={ () => getSaleId() }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

export default Checkout;
