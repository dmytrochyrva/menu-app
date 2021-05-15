/* eslint-disable no-nested-ternary */
import DishCard from './DishCard';

const Dishlist = ({ dishes, isLoading }) => (
  <ul className="dishList">
    {isLoading ? <h1>Loading...</h1>
      : dishes ? dishes.map((dish) => {
        return <DishCard key={dish.id} dish={dish} />;
      })
        : <h1>There is no dishes in this catecory yet</h1>}
  </ul>
);

export default Dishlist;
