import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function Provider({ children }) {
  const [loginUser, setLoginUser] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pedido, setPedido] = useState([]);

  const contextValue = useMemo(() => ({ loginUser,
    setLoginUser,
    totalPrice,
    setTotalPrice,
    pedido,
    setPedido }), [loginUser, totalPrice]);
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
