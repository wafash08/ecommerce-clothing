import { Component } from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shopPage";
import SignInSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up";
import Checkoutpage from "./pages/checkoutpage/checkoutpage";

import Header from "./components/header/header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";

import "./App.css";
import Category from "./pages/categorypage/category";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Outlet />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='shop' element={<ShopPage />}>
            <Route path=':category' element={<Category />} />
          </Route>
          {/* <Route
            path='/signin'
            render={() =>
              currentUser ? <Navigate to='/' /> : <SignInSignUp />
            }
          /> */}
          <Route path='signin' element={<SignInSignUp />} />
          <Route path='checkout' element={<Checkoutpage />} />
          <Route
            path='*'
            element={
              <main>
                <p>There's nothing here!</p>
                <Link to='/'>Back to home!</Link>
              </main>
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
