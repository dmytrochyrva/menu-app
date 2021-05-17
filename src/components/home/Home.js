import Menu from './menu/Menu';
import Order from './order/Order';

const Home = ({
  page, dishes, isLoading, orders, setOrders,
}) => {
  return (
    <section hidden={page !== 'home'}>
      <div className="home">
        <Menu
          dishes={dishes}
          orders={orders}
          isLoading={isLoading}
          setOrders={setOrders}
        />

        <Order orders={orders} setOrders={setOrders} />
      </div>
    </section>
  );
};

export default Home;
