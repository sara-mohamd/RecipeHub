const prisma = require('../../config/database')

class PrismaRecipe {

  static async getAllRecipes() {
    try {
      const recipes = await prisma.recipe.findMany({
        select: {
          name: true,
          description: true
        }
      })
      return recipes;
    } catch (err) {
      console.error(`Error fetching recipes: ${err}`);
    }
  }

  static async getRecipe(name) {
    try {
      const recipe = await prisma.recipe.findUnique({
        where: { name: name },
        include: {
          ingredients: true,
          categorise: true,
          ratings: true
        }
      });
      return recipe;
    } catch (err) {
      console.error(`Error while fetching a recipe: ${err}`);
    }
  }

  static async getAllRecipesWithRating() {
    try {
      const recipes = await prisma.recipe.findMany({
        include: {
          ratings: true
        }
      });
      return recipes;
    } catch (err) {
      console.error(`Error while fetching recipes with rating: ${err}`);
    }
  }

  static async createRecipe(obj) {
    const { name, description, steps, preparationTime, ingredientIds, categoryIds } = obj;
    try {
      const newRecipe = await prisma.recipe.create({
        data: {
          name: name,
          description: description,
          steps: steps,
          preparationTime: preparationTime,
          ingredients: {
            connect: ingredientIds.map((id) => ({ id }))
          },
          categorise: {
            connect: categoryIds.map((id) => ({ id }))
          }
        },
        include: {
          ingredients: true,
          category: true
        }
      })
      return newRecipe;
    } catch (err) {
      console.log(`Error creating recipe: ${err}`);
    }
  }
}

module.exports = { PrismaRecipe };