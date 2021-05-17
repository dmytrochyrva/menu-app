import { useEffect, useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import RatingFilter from './RatingFilter';
import Dishlist from './Dishlist';

const Menu = ({
  dishes, isLoading, setOrders, orders,
}) => {
  // const [filteredDishes, setFilteredDishes] = useState();
  const [symbols, setSymbols] = useState('');
  const [rating, setRating] = useState('popular');
  const [category, setCategory] = useState('hot_dishes');
  const [shownDishes, setShownDishes] = useState(dishes);

  const filterDishes = () => {
    let result = dishes;

    if (symbols) {
      result = result.filter((item) => {
        return item.name.toLowerCase().includes(symbols);
      });
    }

    if (category) {
      result = result.filter((item) => {
        return item.category === category;
      });
    }

    if (rating === 'cheap') {
      result = result.sort((a, b) => {
        return a.price - b.price;
      });
    }

    setShownDishes(result);
  };

  useEffect(() => filterDishes(), [symbols, rating, category, isLoading]);

  return (
    <div className="menu">
      <Header
        setSymbols={setSymbols}
      />

      <Navigation
        category={category}
        setCategory={setCategory}
      />

      <RatingFilter setRating={setRating} />

      <Dishlist
        orders={orders}
        dishes={shownDishes}
        setOrders={setOrders}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Menu;
