import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Header() {
  return (
    <nav className={ styles.navbar }>
      <div data-testid="customer_products__element-navbar-link-products">
        <Link to="/customer/products">PRODUTOS</Link>
      </div>

      <div data-testid="customer_products__element-navbar-link-orders">
        <Link to="/customer/orders">MEUS PEDIDOS</Link>
      </div>

      <div data-testid="customer_products__element-navbar-user-full-name">
        <span>Nome Usuario</span>
      </div>

      <div data-testid="customer_products__element-navbar-link-logout">
        <Link to="/login">Sair</Link>
      </div>
    </nav>
  );
}

export default Header;
