const Navbar = () => {
  return (
    <aside className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__elem">
          <a href="#" className="nav-bar__link">
            Profile
          </a>
        </li>
        <li className="nav-bar__elem">
          <a href="#" className="nav-bar__link">
            Messages
          </a>
        </li>
        <li className="nav-bar__elem">
          <a href="#" className="nav-bar__link">
            News
          </a>
        </li>
        <li className="nav-bar__elem">
          <a href="#" className="nav-bar__link">
            Music
          </a>
        </li>
        <li className="nav-bar__elem_setting">
          <a href="#" className="nav-bar__link">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
