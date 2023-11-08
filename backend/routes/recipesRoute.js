import express from "express";
import { Recipe } from "../models/recipeModel.js";

const router = express.Router();

//Route for Save a new Recipe
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.ingredients ||
      !request.body.description
    ) {
      return response.status(400).send({
        message: "Send all reuired fields: name, ingredients, description",
      });
    }
    const newRecipe = {
      name: request.body.name,
      ingredients: request.body.ingredients,
      description: request.body.description,
    };

    const recipe = await Recipe.create(newRecipe);

    return response.status(201).send(recipe);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get all the recipes from the database
router.get("/", async (request, response) => {
  try {
    const recipes = await Recipe.find({});
    return response.status(200).json({
      count: recipes.length,
      data: recipes,
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//Route for Get one recipe from the database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const recipe = await Recipe.findById(id);
    return response.status(200).json(recipe);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//Route for Update a recipe
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.ingredients ||
      !request.body.description
    ) {
      return response.status(400).send({
        message: "Send all reuired fields: name, ingredients, description",
      });
    }

    const { id } = request.params;

    const result = await Recipe.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Recipe not found" });
    }

    return response
      .status(200)
      .send({ message: "Recipe successfully updated!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Delete a recipe
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Recipe.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Recipe not found!" });
    }

    return response
      .status(200)
      .send({ message: "Recipe successfylly deleted!" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;