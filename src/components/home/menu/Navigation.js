import navConfig from './nav_config.json';

const Filters = ({ setShownCategory, shownCategory }) => {
  const { navigationBtns } = navConfig;

  return (
    <ul className="navigation">
      {navigationBtns.map((btn) => (
        <li
          key={btn.id}
          onClick={() => setShownCategory(btn.category)}
          className={shownCategory === btn.category ? 'active' : ''}
        >

          <button>{btn.name}</button>

          <span style={{ left: [`${navigationBtns.indexOf(btn) * 40}px`] }} />
        </li>
      )) }
    </ul>
  );
};

export default Filters;
