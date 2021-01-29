import './Header';

const Header = () => {
  return (
    <nav>
      <ul className="Nav-bar">
        <li className="Nav-li">
          <a href="#">Home</a>
        </li>
        <li className="Nav-li">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </li>
        <li className="Nav-li">
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
