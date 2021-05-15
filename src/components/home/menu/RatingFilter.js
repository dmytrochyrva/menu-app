const RatingFilter = () => {
  return (
    <form
      name="ratingFilter"
      className="ratingFilter"
    >
      <h2>Choose Dishes</h2>

      <select>
        <option value="all">All</option>
        <option value="popular">Popular</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </form>
  );
};

export default RatingFilter;
