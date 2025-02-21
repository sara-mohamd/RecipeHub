class IRecipeRepository {
  constructor() {
    if (new.target === IRecipeRepository) {
      throw new Error('Cannot instantiate IRecipeRepository directly.');
    }
  }

  async getAllRecipes() { }
  async getRecipe(name) { }
  async getAllRecipesWithRating() { }
  async getTopRatedRecipes(limit = 10) { }
  async createRecipe(data) { }
  async updateRecipe(recipeId, data) { }
  async deleteRecipe(id) { }
}
