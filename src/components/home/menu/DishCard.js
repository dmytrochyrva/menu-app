const DishCard = ({ dish, orders, setOrders }) => {
  function handleClick() {
    const idCheck = (order) => order.id === dish.id;

    if (!orders.some(idCheck)) {
      setOrders([{ ...dish, portions: 1 }, ...orders]);
    }
  }

  return (
    <li className="dishCard" onClick={handleClick}>
      <img src={dish.image} alt="" draggable="false" />
      <div className="card">
        <div className="text">
          <h3>{dish.name}</h3>
          <h4>{`$ ${dish.price}`}</h4>
          <h4>
            {`${dish.available} Bowls available`}
          </h4>
        </div>
      </div>
    </li>
  );
};

export default DishCard;
