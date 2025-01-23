# Infrastructure Layer

This layer handles external systems like databases, APIs, and frameworks.
## Database
This is responsible for data access logic
All database-related code is centralized in one place.
  ### Prisma
  ### Repositories
    - `UserRepository`: Implements the `IUserRepository` interface for database operations.
    - `RecipeRepository`: Implements the `IRecipeRepository` interface for database operations.

## Utilities
- `TokenGenerator`: Generates and validates JWT tokens.
- `PasswordHasher`: Hashes and compares passwords.
- `EmailSender`   :  for sending emails.

## Configuration
- `prisma/schema.prisma`: Prisma schema file for database modeling.
- `database.js`: Database connection configuration.