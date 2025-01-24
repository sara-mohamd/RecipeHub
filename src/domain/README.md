# Domain Layer

This layer contains the core business logic and entities of the application.

## Entities
- `User`: Represents a user with properties like `id`, `username`, `email`, and `password`.
- `Recipe`: Represents a recipe with properties like `id`, `title`, `ingredients`, and `instructions`.

## Interfaces
- `IUserRepository.js`: Defines the contract for user data access ().
## DTO
Data Transfer Object(DTO) standardize the response.
- `userDTO.js` : format user structure being returned

## Utils
this folder contains **utility functions** or **helper modules** that are reusable.
- `PasswordHasher.js`: For hashing and comparing passwords.
- `TokenGenerator.js`: For generating and validating tokens.
- `EmailValidator.js`: For validating email addresses.
