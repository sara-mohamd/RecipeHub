# Application Layer

This layer contains use cases and services that implement application-specific logic.

## Services
- `AuthService`: Handles authentication logic (e.g., login, register).
- `UserService`: Handles user-related logic (e.g., profile updates).

## Use Cases
- ### User
- `RegisterUser`: Registers a new user.
- `LoginUser`: Authenticates a user and generates a JWT token.

## Interactions
- Depends on the **domain layer** for business rules and entities.
- Depends on the **infrastructure layer** for data access (e.g., repositories).