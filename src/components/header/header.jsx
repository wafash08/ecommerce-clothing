import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartIsHidden } from "../../redux/cart/cart.selector";

import "./header.scss";

function Header({ currentUser, isHidden }) {
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
          to='/contact'
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
        <CartIcon />
      </nav>
      {isHidden ? null : <CartDropdown />}
    </header>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartIsHidden,
});

export default connect(mapStateToProps)(Header);
