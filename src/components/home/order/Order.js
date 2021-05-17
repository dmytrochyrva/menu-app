import { useState } from 'react';
import Options from './Options';
import ListItem from './ListItem';

const Order = ({ orders, setOrders }) => {
  const [option, setOption] = useState('dine_in');

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
          <div>
            <span>hello</span>
            <span>hello</span>
          </div>
          <div>
            <span>hello</span>
            <span>hello</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
