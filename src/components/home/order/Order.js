import { useState } from 'react';
import Options from './Options';
import OrderList from './OrderList';

const Order = ({
  orders, setOrders, setOpenPayment, openPayment,
}) => {
  const [option, setOption] = useState('dine_in');

  const handleClick = () => {
    setOpenPayment(!openPayment);
  };

  return (
    <div className="order">
      <h2>Orders #34562</h2>

      <Options setOption={setOption} option={option} />

      <OrderList orders={orders} setOrders={setOrders} />

      <button
        className="pay"
        onClick={handleClick}
      >
        Continue To Payment
      </button>
    </div>
  );
};

export default Order;
