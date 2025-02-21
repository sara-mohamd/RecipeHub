# Domain Layer

This layer contains the core business logic and entities of the application.

## Entity

[`entity.js`](./entity.js): Class based implementation of [`schema.prisma`](../infrastructure/database/prisma/schema.prisma) entites

## Interfaces

Defines the contract for accessing and managing user data in the system:  

- [`IUserRepository.js`](./interfaces/IUserRepository.js)
- [`IRecipeRepository`](./interfaces/IRecipeRepository.js)
- [`ICategoryRepository`](./interfaces/ICategoryRecipe.js)

## DTO

Data Transfer Object(DTO) standardize the response.

- `userDTO.js` : format user structure being returned