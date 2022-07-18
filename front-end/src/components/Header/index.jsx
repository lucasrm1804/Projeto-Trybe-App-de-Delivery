import React from 'react';

export default function Header() {
  return (
    <nav>
      <div data-testid="customer_products__element-navbar-link-products">
        <span>Produtos</span>
      </div>

      <div data-testid="customer_products__element-navbar-link-orders">
        <span>Meus pedidos</span>
      </div>

      <div data-testid="customer_products__element-navbar-user-full-name">
        <span>Nome Usuario</span>
      </div>

      <div data-testid="customer_products__element-navbar-link-logout">
        <span>Sair</span>
      </div>

    </nav>
  );
}
