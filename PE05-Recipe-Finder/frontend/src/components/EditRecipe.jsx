import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL =
  "https://expert-space-engine-jr6gvpj49q62qgv4-5050.app.github.dev/recipe";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
  });

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    navigate("/");
  };

  return (
    <div>
      <h2>Edit Recipe</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="prepTime"
          value={recipe.prepTime}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Recipe
        </button>
      </form>
    </div>
  );
}

export default EditRecipe;