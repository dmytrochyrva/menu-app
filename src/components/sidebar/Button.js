const Button = ({
  Img,
  page,
  setPage,
  currentPage,
}) => {
  const pageToggle = () => {
    setPage(page);
  };

  return (
    <li
      onClick={pageToggle}
      className={page === currentPage ? 'active' : ''}
    >
      <button>
        <Img />
      </button>
      <span />
    </li>
  );
};

export default Button;
