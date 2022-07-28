import React, { useEffect } from 'react';
import axios from 'axios';
import appContext from '../../context/appContext';
import Header from '../../components/Header';
import TableSellerOrderDetails from '../../components/TableSellerOrderDetails';

function SellesOrderDetails() {
  // const { orderId } = useContext(appContext);
  // const [orderInfo, setOrderInfo] = useState({});
  const { orderDetail, setOrderDetail } = React.useContext(appContext);

  const dtId = 'seller_order_details__element-order-details-label-order-id';
  const dtDate = 'seller_order_details__element-order-details-label-order-date';
  const dtStatus = 'seller_order_details__element-order-details-label-delivery-status';
  const preparingButtonDt = 'seller_order_details__button-preparing-check';
  const dispatchButtonDt = 'seller_order_details__button-dispatch-check';

  const url = window.location.href;
  // https://www.codegrepper.com/code-examples/javascript/frameworks/nextjs/remove+string+before+last+slash+javascript
  const param = url.substring(url.lastIndexOf('/') + 1, url.length);

  const getSaleById = async (id) => {
    await axios.get(`http://localhost:3001/seller/orders/${id}`)
      .then((response) => {
        setOrderDetail(response.data);
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSaleById(param);
  }, []);

  const d = 10;

  console.log(orderDetail, 'estou no seller order details');

  return (
    <div>
      { orderDetail.id
      && (
        <>
          <Header />
          <h2>Detalhes do Pedido</h2>
          <div>
            <div>
              <span>
                <h3
                  data-testid={ dtId }
                >
                  Pedido
                  {' '}
                  { orderDetail.id }
                </h3>
              </span>
              <span
                data-testid={ dtDate }
              >
                { orderDetail && orderDetail.saleDate
                  .slice(0, d).split('-').reverse().join('/') }
              </span>
              <span
                data-testid={ dtStatus }
              >
                { orderDetail.status }
              </span>
              <button
                type="button"
                data-testid={ preparingButtonDt }
                disabled={ false }
              >
                PREPARAR PEDIDO
              </button>
              <button
                type="button"
                data-testid={ dispatchButtonDt }
                disabled
              >
                SAIU PARA ENTREGA
              </button>
              <div>
                <TableSellerOrderDetails />
              </div>
              <div>
                <button
                  type="button"
                  data-testid="seller_order_details__element-order-total-price"
                >
                  { orderDetail.totalPrice.replace('.', ',') }
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SellesOrderDetails;
