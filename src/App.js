import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Footer, Recipes, Blog, RecipeDetails } from "./container";

const App = () => {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipes">
            <Route index element={<Recipes />} />
            <Route path=":recipeId" element={<RecipeDetails />} />
          </Route>
          <Route path="/blog">
            <Route index element={<Blog />} />
            <Route path=":recipeId" element={<RecipeDetails />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
