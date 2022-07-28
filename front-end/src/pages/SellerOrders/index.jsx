import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import SellerOrderItem from '../../components/SellerOrderItem';

export default function SellerOrders() {
  const [orders, setOrders] = React.useState([]);
  // const { id } = JSON.parse(localStorage.getItem('user'));

  const getOrders = async () => {
    await axios.get('http://localhost:3001/seller/orders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => console.log(error.message.data));
  };

  React.useEffect(() => {
    getOrders();
  }, []);

  console.log(orders);

  return (
    <div>
      <Header />
      {orders.length > 0 && orders.map((order, index) => (
        <SellerOrderItem
          key={ index }
          id={ order.id }
          totalPrice={ order.totalPrice }
          status={ order.status }
          data={ order.saleDate }
          index={ index }
          deliveryAddress={ order.deliveryAddress }
          deliveryNumber={ order.deliveryNumber }
        />
      ))}
    </div>
  );
}
