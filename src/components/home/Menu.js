import { useState } from 'react';
import Header from './menu/Header';
import Filters from './menu/Filters';
import Dishlist from './menu/Dishlist';

const Menu = ({ page, dishes, isLoading }) => {
  const [filteredDishes, setFilteredDishes] = useState();

  return (
    <section hidden={page !== 'home'}>
      <div className="menu">
        <Header
          dishes={dishes}
          setFilteredDishes={setFilteredDishes}
          filteredDishes={filteredDishes}
        />

        <Filters
          dishes={dishes}
          isLoading={isLoading}
          setFilteredDishes={setFilteredDishes}
        />

        <Dishlist dishes={filteredDishes || dishes} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default Menu;
