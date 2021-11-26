import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shopPage";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
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
