import i from '../svg/index';

const PaymentForm = () => {
  return (
    <form className="payment-form" onSubmit={() => false}>
      <h2>Payment method</h2>

      <div className="payment-methods">
        <button>
          <div>
            <i.CreditCard />
            <h3>Credit Card</h3>
          </div>
        </button>

        <button>
          <div>
            <i.PayPal />
            <h3>PayPal</h3>
          </div>
        </button>

        <button>
          <div>
            <i.Cash />
            <h3>Cash</h3>
          </div>
        </button>
      </div>

      <label htmlFor="name">
        Cardholder Name
        <input type="text" name="name" placeholder="Levi Ackerman" />
      </label>
      <label htmlFor="name">
        Card Number
        <input type="tel" maxLength="19" inputMode="numeric" pattern="[0-9\s]{13,19}" name="numbers" placeholder="XXXX XXXX XXXX XXXX" />
      </label>

      <div className="flex divider">
        <label htmlFor="name">
          Expiration Date
          <input maxLength="5" type="text" name="number" placeholder="XX/XX" />
        </label>
        <label htmlFor="name">
          CVV
          <input type="password" name="number" maxLength="3" placeholder="XXX" />
        </label>

      </div>
      <hr />

      <div className="flex">
        <label htmlFor="order-type">
          Order Type
          <select name="order-type">
            <option value="dine in">Dine In</option>
          </select>
        </label>

        <label htmlFor="table">
          Table no.
          <input type="tel" maxLength="3" placeholder="12" />
        </label>
      </div>
    </form>
  );
};

export default PaymentForm;
