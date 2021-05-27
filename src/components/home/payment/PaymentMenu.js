import Confirmation from './Confimation';

const PaymentMenu = ({
  orders, setOrders, openPayment, setOpenPayment,
}) => {
  const handleClosePayment = () => {
    setOpenPayment(!openPayment);
  };

  return (
    <section className="paySection" hidden={!openPayment}>
      <div className={openPayment ? 'open content' : ' content closed'}>
        <Confirmation
          orders={orders}
          setOrders={setOrders}
          handleClosePayment={handleClosePayment}
        />

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
