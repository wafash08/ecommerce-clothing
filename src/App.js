import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shopPage";
import SignInSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up";
import Checkoutpage from "./pages/checkoutpage/checkoutpage";
import Header from "./components/header/header";

import { selectCurrentUser } from "./redux/user/user.selector";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='shop/*' element={<ShopPage />} />
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

export default connect(mapStatetoProps)(App);
