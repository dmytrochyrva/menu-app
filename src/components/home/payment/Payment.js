import PaymentForm from './PaymentForm';

const Payment = ({ handleClosePayment }) => {
  return (
    <div className="payment">
      <header className="header">
        <h1>Payment</h1>
        <p>3 payment methods available</p>
      </header>
      <hr />

      <PaymentForm />

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
  );
};

export default Payment;
