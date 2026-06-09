import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://expert-space-engine-jr6gvpj49q62qgv4-5050.app.github.dev/recipe";

function AddRecipe() {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    navigate("/");
  };

  return (
    <div>
      <h2>Add Recipe</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Recipe Name"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="ingredients"
          placeholder="Ingredients"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="instructions"
          placeholder="Instructions"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="prepTime"
          placeholder="Prep Time"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;