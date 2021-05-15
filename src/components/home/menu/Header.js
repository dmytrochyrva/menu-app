import Search from '../svg/Search';

const Header = ({ setSymbols }) => {
  return (
    <div className="header">
      <div className="text">
        <h1>Jaegar Resto</h1>
        <p>Tuesday, 2 Feb 2021</p>
      </div>

      <form
        className="search"
        onInput={({ target }) => setSymbols(target.value.toLowerCase())}
        onSubmit={(event) => event.preventDefault()}
      >
        <Search />

        <input
          type="text"
          autoComplete="off"
          placeholder="Search for food, coffe, etc.."
        />
      </form>
    </div>
  );
};

export default Header;
