import ListItem from '../order/ListItem';
import BackArrow from '../svg/BackArrow';

const PaymentMenu = ({
  orders, setOrders, openPayment, setOpenPayment,
}) => {
  const handleClosePayment = () => {
    setOpenPayment(!openPayment);
  };

  return (
    <section className="paySection" hidden={!openPayment}>
      <div className={openPayment ? 'open content' : ' content closed'}>
        <div className="confirmation">
          <button className="back" onClick={handleClosePayment}>
            <BackArrow />
          </button>

          <div className="header">
            <h1>Confirmation</h1>
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
        </div>

        <div className="payment">
          <h1>Payment</h1>

          <div className="control">
            <button
              className="btn cancel"
              onClick={handleClosePayment}
            >
              Cancel
            </button>
            <button className="btn confirm">Confirm Payment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMenu;
