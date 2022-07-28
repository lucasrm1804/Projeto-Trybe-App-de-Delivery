import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import CostumerProducts from '../pages/CostumerProducts';
import Register from '../pages/Register/index';
import NotFound from '../pages/NotFound';
import Order from '../pages/Order';
import Checkout from '../pages/Checkout';
import OrderDetails from '../pages/OrderDetails';
import SellerOrder from '../pages/SellerOrders';
import SellerOrderDetails from '../pages/SellerOrderDetails';
import Adm from '../pages/Adm';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/product" component={ NotFound } />
      <Route exact path="/customer/orders" component={ Order } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/customer/products" component={ CostumerProducts } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route exact path="/seller/orders" component={ SellerOrder } />
      <Route exact path="/seller/orders/:id" component={ SellerOrderDetails } />
      <Route exact path="/admin/manage" component={ Adm } />
    </Switch>
  );
}
