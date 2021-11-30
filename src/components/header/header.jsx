import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.scss";

function Header({ currentUser }) {
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

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser: currentUser,
});

export default connect(mapStateToProps)(Header);
