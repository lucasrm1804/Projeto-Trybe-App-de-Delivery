import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ProductCards from '../../components/Cards';
import FooterProducts from '../../components/FooterProducts';
import { requestData } from '../../services/requests';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const endpoint = '/products';
    if (!products.length) {
      requestData(endpoint)
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => console.log(error.response.data.message));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(products);

  return (
    <div>
      <Header />
      <div className="CardsContainer">
        {products && products.map((product, i) => (
          <div key={ i }>
            <ProductCards
              valor={ Number(product.price) }
              img={ product.urlImage }
              name={ product.name }
              id={ product.id }
            />
          </div>
        ))}
      </div>
      <FooterProducts />
    </div>
  );
}
