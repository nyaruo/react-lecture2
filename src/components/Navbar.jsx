import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/pageA'>
                PageA
            </NavLink>
            <NavLink to='/pageB'>
                pageB
            </NavLink>
        </>
    );
};

export default Navbar;