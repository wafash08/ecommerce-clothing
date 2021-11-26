import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";

import "./App.css";

function HatsPage() {
  return <h1>Hats Page</h1>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
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
