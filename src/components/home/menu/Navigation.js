import navConfig from './nav_config.json';

const Navigation = ({ setCategory, category }) => {
  const { navigationBtns } = navConfig;

  return (
    <ul className="navigation">
      {navigationBtns.map((btn) => (
        <li
          key={btn.id}
          onClick={() => setCategory(btn.category)}
          className={category === btn.category ? 'active' : ''}
        >

          <button>{btn.name}</button>

          <span style={{ left: [`${navigationBtns.indexOf(btn) * 40}px`] }} />
        </li>
      )) }
    </ul>
  );
};

export default Navigation;
