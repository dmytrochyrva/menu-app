/* eslint-disable no-param-reassign */
import TrashCan from '../svg/TrashCan';

const ListItem = ({ order, orders, setOrders }) => {
  const handleCommentChange = ({ target }) => {
    order.comment = target.value;
  };

  const handlePortionsChange = ({ target }) => {
    order.portions = Number(target.value);
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
          <h3>{order.price}</h3>
        </div>
      </div>

      <form
        className="portions"
        onChange={handlePortionsChange}
        onSubmit={(event) => event.preventDefault()}
      >
        <input type="number" placeholder={order.portions} />
      </form>

      <h4>Total Price</h4>

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
