const PrismaRecipe = require('../../infrastructure/database/repository/PrismaRecipeRepository');

const getRecipe = async (req, res) => {
  const { name } = req.body;
  try {
    const recipe = await PrismaRecipe.getRecipe(name);
    if (!recipe)
      res.status(404).json(`recipe not found constroller message`)
    res.status(200).json(`recipe: ${recipe}`);
  } catch (err) {
    res.status(400).json(`Error from controller: ${err}`);
  }
}

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await PrismaRecipe.getAllRecipes();
    if (!recipes)
      res.status(404).json(`Recipes not found constroller message`)
  } catch (err) {
    res.status(400).json(`Error from controller: ${err}`)
  }
}

const createRecipe = async (req, res) => {
  try {
    const recipe = await PrismaRecipe.createRecipe(req.body);
    if (!recipe)
      res.status(404).json(`Error while creating recipe controller error`);
    res.status(201).json({ message: recipe })
  } catch (err) {
    res.status(400).json({ error: `unexpected Error`, err })
  }
}

module.exports = { getAllRecipes, getRecipe, createRecipe }

// async getAllRecipesWithRating() { }
// async getTopRatedRecipes(limit = 10) { }
// async createRecipe(data) { }
// async updateRecipe(recipeId, data) { }