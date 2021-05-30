import Confirmation from './Confimation';
import Payment from './Payment';

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

        <Payment handleClosePayment={handleClosePayment} />
      </div>
    </section>
  );
};

export default PaymentMenu;
