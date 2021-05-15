import Button from './Button';
import { mainBtns, exitBtn, logoBtn } from './config.json';
import i from './svg/index';

const Sidebar = ({ setPage, page }) => (
  <ul className="sidebar">
    <Button
      setPage={setPage}
      page={logoBtn.page}
      Img={i[logoBtn.img]}
    />

    <ul className="menuButtons">
      {mainBtns.map((btn) => (
        <Button
          key={btn.id}
          page={btn.page}
          Img={i[btn.img]}
          setPage={setPage}
          currentPage={page}
        />
      ))}
    </ul>

    <Button
      setPage={setPage}
      page={exitBtn.page && page}
      Img={i[exitBtn.img]}
    />
  </ul>
);

export default Sidebar;
