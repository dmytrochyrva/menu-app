import { useState } from 'react';
import SelectArrow from './SelectArrow';
import ratingConfig from './rating_config.json';

/* eslint-disable jsx-a11y/no-static-element-interactions */
const Select = ({ setRating }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('All');

  return (
    <div className="select" onClick={() => setOpen(!open)}>
      <div className="selected">
        <SelectArrow />

        <h4>{selected}</h4>
      </div>

      <ul className="options">
        {open && ratingConfig.filter((option) => {
          return option.name !== selected;
        }).map((option) => {
          return (
            <li
              key={option.id}
              onClick={() => {
                setRating(option.value);
                setSelected(option.name);
              }}
            >
              <h4>{option.name}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
