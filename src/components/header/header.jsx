import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.scss";

export default function Header({ currentUser }) {
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
        {currentUser ? (
          <button className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </button>
        ) : (
          <NavLink className='option' to='/signin'>
            SIGN IN
          </NavLink>
        )}
      </nav>
    </header>
  );
}
