import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header-wrapper">
      <Link to="/">
        The Dot. <span>Studio</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/studio">Studio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
