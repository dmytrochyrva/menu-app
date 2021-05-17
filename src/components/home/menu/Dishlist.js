/* eslint-disable no-nested-ternary */
import DishCard from './DishCard';

const Dishlist = ({
  dishes, isLoading, setOrders, orders,
}) => (
  <ul className="dishList">
    {isLoading ? <h1>Loading...</h1>
      : dishes.map((dish) => {
        return (
          <DishCard
            dish={dish}
            key={dish.id}
            orders={orders}
            setOrders={setOrders}
          />
        );
      })}
  </ul>
);

export default Dishlist;
