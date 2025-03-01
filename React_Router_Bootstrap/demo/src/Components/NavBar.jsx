import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
