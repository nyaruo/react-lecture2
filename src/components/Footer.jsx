import { NavLink } from "react-router-dom";
import "../assets/Footer.css";

const Footer = () => {
    return (
        <>
            <NavLink to="/" className="footer">
                    React Portfolio ©︎2021-2022
            </NavLink>
        </>
    );
};

export default Footer;