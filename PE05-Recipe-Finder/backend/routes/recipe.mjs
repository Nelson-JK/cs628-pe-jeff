import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET all recipes
router.get("/", async (req, res) => {
  try {
    const collection = db.collection("recipes");
    const results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET one recipe by id
router.get("/:id", async (req, res) => {
  try {
    const collection = db.collection("recipes");
    const query = { _id: new ObjectId(req.params.id) };

    const result = await collection.findOne(query);

    if (!result) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE recipe
router.post("/", async (req, res) => {
  try {
    const newRecipe = {
      name: req.body.name,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      prepTime: req.body.prepTime
    };

    const collection = db.collection("recipes");
    const result = await collection.insertOne(newRecipe);

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE recipe
router.put("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const updates = {
      $set: {
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        prepTime: req.body.prepTime
      }
    };

    const collection = db.collection("recipes");
    const result = await collection.updateOne(query, updates);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE recipe
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("recipes");
    const result = await collection.deleteOne(query);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;