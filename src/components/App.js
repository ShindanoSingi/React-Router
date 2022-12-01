import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Category from "./Category";
import Categories from "./Categories";
import About from "./About";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path='*' element={<h1 className="not-found">Page Not Found</h1> }/>

      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
