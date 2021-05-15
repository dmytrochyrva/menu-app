import { useState, useEffect } from 'react';
import filterConfig from './filters_config.json';

const Filters = ({ dishes, setFilteredDishes, isLoading }) => {
  const { categories } = filterConfig;
  const [category, setCategory] = useState('hot_dishes');
  const [rating, setRating] = useState('all');
  console.log(rating);

  useEffect(() => {
    if (isLoading) return;

    const filtered = dishes.filter((dish) => {
      return dish.category === category;
    });

    setFilteredDishes(filtered);
  }, [category, isLoading]);

  return (
    <div className="filters">
      <ul className="categories">
        {categories.map((btn) => (
          <li
            key={btn.id}
            onClick={() => setCategory(btn.category)}
            className={category === btn.category ? 'active' : ''}
          >
            <button>{btn.name}</button>
            <span style={{ left: [`${categories.indexOf(btn) * 40}px`] }} />
          </li>
        )) }
      </ul>

      <hr />

      <form
        name="rating"
        className="rating"
        onInput={({ target }) => setRating(target.value)}
      >
        <h2>Choose Dishes</h2>

        <select>
          <option value="all">All</option>
          <option value="popular">Popular</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </form>
    </div>
  );
};

export default Filters;
