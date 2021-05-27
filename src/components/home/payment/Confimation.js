import ListItem from '../order/ListItem';
import BackArrow from '../svg/BackArrow';
import PlusSign from '../svg/PlusSign';

const Confirmation = ({ orders, setOrders, handleClosePayment }) => {
  return (
    <section className="confirmation">
      <button className="back" onClick={handleClosePayment}>
        <BackArrow />
      </button>

      <div className="header">
        <div className="text">
          <h1>Confirmation</h1>
          <p>Orders #34562</p>
        </div>
        <button className="add-order"><PlusSign /></button>
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
          <p>$0</p>
        </div>
      </div>
    </section>

  );
};

export default Confirmation;
