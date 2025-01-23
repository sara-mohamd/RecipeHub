# Domain Layer

This layer contains the core business logic and entities of the application.

## Entities
- `User`: Represents a user with properties like `id`, `username`, `email`, and `password`.
- `Recipe`: Represents a recipe with properties like `id`, `title`, `ingredients`, and `instructions`.

## Interfaces
- `IUserRepository`: Defines the contract for user data access (e.g., `findByEmail`, `save`).

## DTO
- standardize the response format across your application, using Data Transfer Object
- A DTO is a simple object that defines the structure of the data being returned

## <<< i should update it >>>
## Business Rules
- A user must have a valid email and a password of at least 6 characters.
- A recipe must have a title and at least one ingredient.