import { useEffect, useState } from 'react';
import Options from './Options';
import ListItem from './ListItem';

const Order = ({ orders, setOrders }) => {
  const [option, setOption] = useState('dine_in');
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(0);
    if (orders.length) {
      orders.forEach((ord) => setSubtotal((subtotal + ord.price * ord.portions)));
    }
  }, [orders]);

  return (
    <div className="order">
      <h2>Orders #34562</h2>

      <Options setOption={setOption} option={option} />

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
    </div>
  );
};

export default Order;
