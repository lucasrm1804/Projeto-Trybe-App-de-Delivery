import React from 'react';
import Header from '../../components/Header';
import ProductCards from '../../components/Cards';

export default function CustomerProducts() {
  const produtos = [{
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  }];

  return (
    <div>
      <Header />
      {produtos.map((produto, i) => (
        <div key={ i }>
          <ProductCards
            valor={ produto.price }
            img={ produto.url_image }
            name={ produto.name }
            id={ produto.id }
          />
        </div>
      ))}
    </div>
  );
}
