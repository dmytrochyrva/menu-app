import DishCard from './DishCard';

const Dishlist = ({ dishes }) => (
  <ul className="dishList">
    {dishes.map((dish) => <DishCard key={dish.id} dish={dish} />)}
  </ul>
);

export default Dishlist;
