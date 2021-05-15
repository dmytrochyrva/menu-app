import { useState } from 'react';
import SelectArrow from './SelectArrow';

/* eslint-disable jsx-a11y/no-static-element-interactions */
const Select = ({ rating, setRating }) => {
  const [open, setOpen] = useState(false);
  const options = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Popular',
    },
    {
      id: 3,
      name: 'Cheap',
    },
  ];
  return (
    <div className="select" onClick={() => setOpen(!open)}>
      <div className="selected">
        <SelectArrow />

        <h4>{rating}</h4>
      </div>

      <ul className="options">
        {open && options.map((option) => {
          return (
            <li key={option.id} onClick={() => setRating(option.name)}>
              <h4>{option.name}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
