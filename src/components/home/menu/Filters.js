import { useState } from 'react';
import filterConfig from './filters_config.json';

const Filters = () => {
  const { categories } = filterConfig;
  const [category, setCategory] = useState('Hot Dishes');
  const [rating, setRating] = useState('all');
  console.log(category, rating);

  return (
    <div className="filters">
      <ul className="categories">
        {categories.map((btn) => (
          <li key={btn.id} onClick={() => setCategory(btn.name)}>
            <button
              className={category === btn.name ? 'active' : ''}
            >
              {btn.name}
            </button>
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
