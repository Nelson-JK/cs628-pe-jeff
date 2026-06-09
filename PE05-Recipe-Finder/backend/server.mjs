import express from "express";
import cors from "cors";
import db from "./db/conn.mjs";
import recipes from "./routes/recipe.mjs";

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.use("/recipe", recipes);

app.get("/", (req, res) => {
  res.send("Recipe Finder API Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});