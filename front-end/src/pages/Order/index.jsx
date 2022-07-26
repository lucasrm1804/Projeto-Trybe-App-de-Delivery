import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import OrderItem from '../../components/OrderItem';

export default function Order() {
  const [orders, setOrders] = useState([]);
  const { id } = JSON.parse(localStorage.getItem('user'));

  const getOrders = async () => {
    axios.get('http://localhost:3001/customer/orders').then((response) => setOrders(response.data))
      .catch(() => console.log('error aqui'));
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div>
      <Header />
      {orders.length > 0 && orders.filter((o) => o.userId === id).map((order, index) => (
        <OrderItem
          key={ index }
          id={ order.id }
          totalPrice={ order.totalPrice }
          status={ order.status }
          data={ order.saleDate }
          index={ index }
        />
      ))}
    </div>
  );
}
