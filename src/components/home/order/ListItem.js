/* eslint-disable no-param-reassign */
import { useState } from 'react';
import TrashCan from '../svg/TrashCan';

const ListItem = ({ order, orders, setOrders }) => {
  const [totalCost, setTotalCost] = useState(order.price);

  const handleCommentChange = ({ target }) => {
    order.comment = target.value;
  };

  const handlePortionsChange = ({ target }) => {
    order.portions = Number(target.value);
    setTotalCost(order.price * order.portions);
  };

  const deletePosition = () => {
    setOrders(orders.filter((item) => {
      return item.id !== order.id;
    }));
  };

  return (
    <li className="listItem">
      <div className="description">
        <img src={order.image} alt="dish" />

        <div className="text">
          <h3>
            {`${order.name.slice(0, 20)} ...`}
          </h3>
          <h3>{`$ ${order.price}`}</h3>
        </div>
      </div>

      <form
        className="portions"
        onChange={handlePortionsChange}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          min="1"
          type="number"
          placeholder={order.portions}
          max={order.available}
        />
      </form>

      <h4 className="total">{`$${totalCost.toFixed(2)}`}</h4>

      <form
        className="comment"
        onChange={handleCommentChange}
        onSubmit={(event) => event.preventDefault()}
      >
        <input type="text" placeholder="Order Note..." />
      </form>

      <button onClick={deletePosition}>
        <TrashCan />
      </button>
    </li>
  );
};
export default ListItem;
