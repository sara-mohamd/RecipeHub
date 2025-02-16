const { v4: uuid } = require('uuid');

// User Class
class User {
  constructor(id, username, password, createdAt = new Date().now(), updatedAt = new Date()) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.recipes = []; // Array of UserFavouriteRecipe instances
    this.ratings = []; // Array of Rating
  }
}

// Recipe Class
class Recipe {
  constructor(id, name, description, steps = "not Added", preparationTime, createdAt = new Date()) {
    this.id = id || uuid();
    this.name = name;
    this.description = description;
    this.steps = steps;
    this.preparationTime = preparationTime;
    this.createdAt = createdAt;
    this.users = []; // Array of UserFavouriteRecipe instances
    this.ingredients = []; // Array of RecipeIngredient instances
    this.ratings = []; // Array of Rating instances
    this.categorise = []; // Array of RecipeCategory instances
  }
}

// Ingredient Class
class Ingredient {
  constructor(id, name, quantity) {
    this.id = id || uuid();
    this.name = name;
    this.quantity = quantity;
    this.recipes = []; // Array of RecipeIngredient instances
  }
}

// RecipeIngredient Class (Join Table for Recipe and Ingredient)
class RecipeIngredient {
  constructor(recipeId, ingredientId) {
    this.recipeId = recipeId;
    this.ingredientId = ingredientId;
  }
}

// UserFavouriteRecipe Class (Join Table for User and Recipe)
class UserFavouriteRecipe {
  constructor(userId, recipeId) {
    this.userId = userId;
    this.recipeId = recipeId;
  }
}

// Category Class
class Category {
  constructor(id, name) {
    this.id = id || uuid(); // UUID generated if not provided
    this.name = name;
    this.recipes = []; // Array of RecipeCategory instances
  }
}

// Rating Class
class Rating {
  constructor(id, userId, recipeId) {
    this.id = id || uuid(); // UUID generated if not provided
    this.userId = userId;
    this.recipeId = recipeId;
  }
}

// RecipeCategory Class (Join Table for Recipe and Category)
class RecipeCategory {
  constructor(recipeId, categoryId) {
    this.recipeId = recipeId;
    this.categoryId = categoryId;
  }
}

// Export all classes
module.exports = {
  User,
  Recipe,
  Ingredient,
  RecipeIngredient,
  UserFavouriteRecipe,
  Category,
  Rating,
  RecipeCategory,
};