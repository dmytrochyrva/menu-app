import Select from './Select';

const RatingFilter = ({ setRating }) => {
  return (
    <div
      name="ratingFilter"
      className="ratingFilter"
    >
      <h2>Choose Dishes</h2>

      <Select setRating={setRating} />
    </div>
  );
};

export default RatingFilter;
