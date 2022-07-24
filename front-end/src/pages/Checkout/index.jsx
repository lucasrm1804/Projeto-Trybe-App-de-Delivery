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
  } = useContext(appContext);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [saller, setSaller] = useState([]);
  const [sallerId, setSallerId] = useState('');

  const lsToken = () => {
    const ls = JSON.parse(localStorage.getItem('user'));
    const { token } = ls;
    return token;
  };

  const getSaller = async () => {
    await axios.get('http://localhost:3001/customer/checkout')
      .then((response) => {
        setSaller(response.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  const createOrder = async () => {
    const result = await axios.post('http://localhost:3001/customer/checkout', {
      order: {
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: addressNumber,
        saleDate: new Date().toISOString(),
        status: 'Pendente',
        userId: 3,
        sellerId: sallerId,
      },
      items: pedido,
    }, {
      headers: {
        authorization: lsToken(),
      },
    }).then((newOrder) => newOrder.data).catch((err) => {
      console.log(err);
    });
    return result;
  };

  const getSaleId = async () => {
    const id = await createOrder();
    if (id) {
      return history.push(`/customer/orders/${id}`);
    }
    return Number(globalSaleId);
  };

  useEffect(() => {
    getSaller();
  }, [setSaller]);

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
          value={ sallerId }
          onChange={ ({ target }) => setSallerId(target.value) }
        >
          <option>Selecione um vendedor</option>
          { saller.map((s) => (
            <option
              key={ s.id }
              value={ s.id }
            >
              {s.id}
            </option>
          ))}
        </select>
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
