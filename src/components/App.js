import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Category from "./Category";
import Categories from "./Categories";
import About from "./About";
import Header from "./Header";
import Session from "./Session";
import Register from "./Register";


function App() {
const[catId, setCatId] = useState(null)
  function getCatId(catId){
    setCatId(catId);
    console.log(catId);
  }
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category getCatId={getCatId} />}>
            <Route path=":sessionId" element={<Session catId={catId}/>} />
          </Route>
          <Route index element={<h3>Select a category above</h3> } />
        </Route>

        <Route path='*' element={<h1 className="not-found">Page Not Found</h1> }/>

      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
