import { Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>Recipe Finder</h1>
        <div>
          <Link to="/">Recipe List</Link>
          <Link to="/add">Add Recipe</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
      </Routes>
    </div>
  );
}

export default App;