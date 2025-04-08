// Components/ui/Navlink.js
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ target, href, text }) => {
    return (
        <li className="nav-item">
            <NavLink
                to={href}
                data-target={target}
                className={({ isActive }) =>
                    `nav-link text-white font-p poppins ${isActive ? 'active' : ''}`
                }
            >
                {text}
            </NavLink>
        </li>
    );
};

export default NavbarLink;