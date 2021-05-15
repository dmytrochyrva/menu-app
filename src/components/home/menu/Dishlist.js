/* eslint-disable no-nested-ternary */
import DishCard from './DishCard';

const Dishlist = ({ dishes, isLoading }) => (
  <ul className="dishList">
    {isLoading ? <h1>Loading...</h1>
      : dishes.map((dish) => {
        return <DishCard key={dish.id} dish={dish} />;
      })}
  </ul>
);

export default Dishlist;
