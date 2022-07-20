import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ProductCards from '../../components/Cards';
import { requestData } from '../../services/requests';
import CartButton from '../../components/CartButton';
import styles from '../../components/Cards/index.module.css';

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

  useEffect(() => {
    // const verifyLs = localStorage.getItem('carrinho');
    const ls = [];
    products.map((product) => (
      ls.push({
        id: product.id,
        name: product.name,
        quantity: 0,
        value: product.price,
      })
    ));
    localStorage.setItem('carrinho', JSON.stringify(ls));
  });

  const [price, setPrice] = useState(0);

  const totalPrice = () => {
    const ls = JSON.parse(localStorage.getItem('carrinho'));
    return ls.map((p) => Number(p.quantity) * Number(p.value))
      .reduce((curr, acc) => {
        console.log(curr);
        acc += curr;
        return acc;
      }, 0);
  };

  useEffect(() => {
    setPrice(totalPrice());
  }, [setPrice]);

  console.log(price);

  return (
    <>
      <Header />
      <div className={ styles.cardContainer }>
        {products && products.map((product, i) => (
          <div key={ i }>
            <ProductCards
              valor={ product.price.toString().replace(/\./, ',') }
              img={ product.urlImage }
              name={ product.name }
              id={ product.id }
            />
          </div>
        ))}
      </div>
      <CartButton price={ price } />
    </>
  );
}
