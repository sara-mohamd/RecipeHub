# Domain Layer

This layer contains the core business logic and entities of the application.

## Entities

- `User`: Represents a user with properties like `id`, `username`, `email`, and `password`.
- `Recipe`: Represents a recipe with properties like `id`, `title`, `ingredients`, and `instructions`.

## Interfaces

- [`IUserRepository.js`](./interfaces/IUserRepository.js): Defines the contract for accessing and managing user data in the system    
- [`IAuthRepository`](./interfaces/IAuthRepository.js): Defines the contract for handling authentication-related data access    
- [`ITokenRepository`](./interfaces/ITokenRepository.js): Defines the contract for interacting with tokens used for authentication and authorization    
- [`ITokenService`](./interfaces/ITokenService.js): Defines the contract for token-related operations in the business logic layer.  
- [`IAuthService`](./interfaces/IAuthService.js): Defines the contract for managing the authentication workflow.    

## DTO

Data Transfer Object(DTO) standardize the response.
- `userDTO.js` : format user structure being returned

## Utils

this folder contains **utility functions** or **helper modules** that are reusable.
- `PasswordHasher.js`: For hashing and comparing passwords.
- `TokenGenerator.js`: For generating and validating tokens.
- `EmailValidator.js`: For validating email addresses.
