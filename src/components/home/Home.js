import { useState } from 'react';
import Menu from './menu/Menu';
import Order from './order/Order';
import PaymentMenu from './payment/PaymentMenu';

const Home = ({
  page, dishes, isLoading, orders, setOrders,
}) => {
  const [openPayment, setOpenPayment] = useState(false);

  return (
    <section hidden={page !== 'home'}>
      <div className="home">
        <Menu
          dishes={dishes}
          orders={orders}
          isLoading={isLoading}
          setOrders={setOrders}
        />

        <Order
          orders={orders}
          setOrders={setOrders}
          openPayment={openPayment}
          setOpenPayment={setOpenPayment}
        />

        <PaymentMenu
          orders={orders}
          setOrders={setOrders}
          openPayment={openPayment}
          setOpenPayment={setOpenPayment}
        />
      </div>
    </section>
  );
};

export default Home;
