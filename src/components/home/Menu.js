import { useState } from 'react';
import Header from './menu/Header';

const Menu = ({ page, dishes }) => {
  const [filteredDishes, setFilteredDishes] = useState([]);

  return (
    <main className="menu" hidden={page !== 'home'}>
      <Header
        dishes={dishes}
        setFilteredDishes={setFilteredDishes}
        filteredDishes={filteredDishes}
      />
    </main>
  );
};

export default Menu;
