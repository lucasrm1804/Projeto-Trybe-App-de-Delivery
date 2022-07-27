import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import CostumerProducts from '../pages/CostumerProducts';
import Register from '../pages/Register/index';
import NotFound from '../pages/NotFound';
import Order from '../pages/Order';
import Checkout from '../pages/Checkout';
import OrderDetails from '../pages/OrderDetails';
import SellerOrderItem from '../components/SellerOrderItem';
import Adm from '../pages/Adm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/product" component={ NotFound } />
      <Route exact path="/customer/orders" component={ Order } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/customer/products" component={ CostumerProducts } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route path="/seller/orders" component={ SellerOrderItem } />
      <Route path="/admin/manage" component={ Adm } />
    </Switch>
  );
}
