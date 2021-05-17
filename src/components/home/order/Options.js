const Options = ({ option, setOption }) => {
  const optionsBtns = [
    { id: 1, name: 'Dine In', value: 'dine_in' },
    { id: 2, name: 'To Go', value: 'to_go' },
    { id: 3, name: 'Delivery', value: 'delivery' },
  ];
  return (
    <ul className="options">
      {optionsBtns.map((btn) => {
        return (
          <li
            key={btn.id}
            onClick={() => setOption(btn.value)}
            className={option === btn.value ? 'active' : ''}
          >
            <button>{btn.name}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
