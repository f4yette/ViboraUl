import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header id="main-header">
      <div className="logo">
        <Link to="/">
          <img src="/images/Vibora_UK_logo.png" alt="Vibora UK logo" />
          <span>VIBORA UK</span>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/rackets" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Rackets
            </NavLink>
          </li>
          <li>
            <NavLink to="/sportswear" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Sportswear
            </NavLink>
          </li>

          <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>
              More
            </a>
            <ul className="dropdown-menu">
              <li><NavLink to="/bags">Bags</NavLink></li>
              <li><NavLink to="/shoes">Shoes</NavLink></li>
              <li><NavLink to="/balls">Balls</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <div className="login">
        <Link to="/basket" className="basket-link">
          <img
            src="/images/shopping-basket-icon-png-3309830814.png"
            className="basket-icon"
            alt="Basket"
          />
        </Link>

        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </header>
  );
}

