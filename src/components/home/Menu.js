import { useEffect, useState } from 'react';
import Header from './menu/Header';
import Navigation from './menu/Navigation';
import RatingFilter from './menu/RatingFilter';
import Dishlist from './menu/Dishlist';

const Menu = ({ page, dishes, isLoading }) => {
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
    <section hidden={page !== 'home'}>
      <div className="menu">
        <Header
          setSymbols={setSymbols}
        />

        <Navigation
          category={category}
          setCategory={setCategory}
        />

        <RatingFilter setRating={setRating} />

        <Dishlist dishes={shownDishes} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default Menu;
