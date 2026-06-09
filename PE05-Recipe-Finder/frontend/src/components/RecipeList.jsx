import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL =
  "https://expert-space-engine-jr6gvpj49q62qgv4-5050.app.github.dev/recipe";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);

  const deleteRecipe = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    setRecipes(recipes.filter((recipe) => recipe._id !== id));
  };

  return (
    <div>
      <h2>Recipe List</h2>

      {recipes.map((recipe) => (
        <div key={recipe._id} className="card">
          <h3>{recipe.name}</h3>

          <Link to={`/recipe/${recipe._id}`}>
            View Details
          </Link>

          {" | "}

          <Link to={`/edit/${recipe._id}`}>
            Edit
          </Link>

          {" | "}

          <button onClick={() => deleteRecipe(recipe._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;