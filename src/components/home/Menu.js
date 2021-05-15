import { useState } from 'react';
import Header from './menu/Header';
import Navigation from './menu/Navigation';
import RatingFilter from './menu/RatingFilter';
import Dishlist from './menu/Dishlist';

const Menu = ({ page, dishes, isLoading }) => {
  const [filteredDishes, setFilteredDishes] = useState();
  const [shownCategory, setShownCategory] = useState('hot_dishes');

  return (
    <section hidden={page !== 'home'}>
      <div className="menu">
        <Header
          dishes={dishes[shownCategory]}
          filteredDishes={filteredDishes}
          setFilteredDishes={setFilteredDishes}
        />

        <Navigation
          shownCategory={shownCategory}
          setShownCategory={setShownCategory}
        />

        <RatingFilter />

        <Dishlist dishes={filteredDishes || dishes[shownCategory]} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default Menu;
