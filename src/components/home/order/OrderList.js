import { useEffect, useState } from 'react';
import ListItem from './ListItem';

const OrderList = ({ orders, setOrders }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (orders.length) {
      orders.forEach((order) => setSubtotal(subtotal + order.price * order.portions));
    }
  }, [orders]);

  return (
    <div className="orderList">
      <div className="header">
        <p>Item</p>
        <p>Qty</p>
        <p>Price</p>
      </div>

      <ul className="list">
        {orders.map((order) => {
          return (
            <ListItem
              order={order}
              key={order.id}
              orders={orders}
              setOrders={setOrders}
            />
          );
        })}
      </ul>

      <div className="footer">
        <div className="row">
          <h4>Discount</h4>
          <p>$0</p>
        </div>
        <div className="row">
          <h4>Subtotal</h4>
          <p>{`$${subtotal.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
