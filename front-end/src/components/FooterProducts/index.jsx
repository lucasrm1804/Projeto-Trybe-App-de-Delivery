import React, { useState } from 'react';

export default function FooterProducts() {
  const [total] = useState(0);
  return (
    <footer>
      <button type="button">{`Ver Carrinho: R$ ${total}`}</button>
    </footer>
  );
}
