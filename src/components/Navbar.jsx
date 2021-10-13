import { NavLink } from "react-router-dom";
import "../assets/Navbar.css";
import "../index.css";

const Navbar = () => {
    return (
      <>
        <div className="navMenu">
          <NavLink to='/' className="navItem">
            Home
          </NavLink>
          <NavLink to='/pageA' className="navItem">
            PageA
          </NavLink>
          <NavLink to='/pageB' className="navItem">
            pageB
          </NavLink>
        </div>
      </>
    );
  };
  
  export default Navbar;