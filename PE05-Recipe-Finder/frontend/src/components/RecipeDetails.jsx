import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL =
  "https://expert-space-engine-jr6gvpj49q62qgv4-5050.app.github.dev/recipe";

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>

      <p>
        <strong>Ingredients:</strong>
        <br />
        {recipe.ingredients}
      </p>

      <p>
        <strong>Instructions:</strong>
        <br />
        {recipe.instructions}
      </p>

      <p>
        <strong>Prep Time:</strong>
        {" "}
        {recipe.prepTime}
      </p>
    </div>
  );
}

export default RecipeDetails;