import './Header';

const Header = () => {
  return (
    <nav className="Header">
      <ul className="Header-bar">
        <li className="Header-li">
          <a href="#">Home</a>
        </li>
        <li className="Header-li">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </li>
        <li className="Header-li">
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
