import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shopPage";
import SignInSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up";
import Header from "./components/header/header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInSignUp />} />
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

export default App;
