/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import TrashCan from '../svg/TrashCan';

const ListItem = ({ order, orders, setOrders }) => {
  const [totalCost, setTotalCost] = useState(order.price);

  useEffect(() => {
    setTotalCost(order.portions * order.price);
  }, [orders]);

  const handleFormChange = ({ target }) => {
    if (target.name === 'portions'
        && target.value > order.available
    ) {
      target.value = order.portions;
      return;
    }

    if (target.value === '0') {
      target.value = 1;
      return;
    }

    const newOrders = orders.map((orderItem) => {
      if (orderItem.id === order.id) {
        return {
          ...orderItem,
          [target.name]: target.value,
        };
      }
      return orderItem;
    });

    setOrders(newOrders);
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
        onChange={handleFormChange}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          min="1"
          type="number"
          name="portions"
          placeholder={order.portions}
          max={order.available}
        />
      </form>

      <h4 className="total">{`$${totalCost.toFixed(2)}`}</h4>

      <form
        className="comment"
        onChange={handleFormChange}
        onSubmit={(event) => event.preventDefault()}
      >
        <input name="comment" type="text" placeholder={order.comment || 'Order Note...'} />
      </form>

      <button onClick={deletePosition}>
        <TrashCan />
      </button>
    </li>
  );
};
export default ListItem;
