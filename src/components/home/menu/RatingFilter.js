import Select from './Select';

const RatingFilter = ({ rating, setRating }) => {
  return (
    <div
      name="ratingFilter"
      className="ratingFilter"
    >
      <h2>Choose Dishes</h2>

      <Select rating={rating} setRating={setRating} />
    </div>
  );
};

export default RatingFilter;
