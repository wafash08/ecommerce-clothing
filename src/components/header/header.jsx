import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

export default function Header() {
  return (
    <header className='header'>
      <NavLink className='logo-container' to='/'>
        <Logo className='logo' />
      </NavLink>
      <nav className='options'>
        <NavLink
          className={({ isActive }) => (isActive ? "option active" : "option")}
          to='/shop'
        >
          SHOP
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "option active" : "option")}
          to='/'
        >
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
}
