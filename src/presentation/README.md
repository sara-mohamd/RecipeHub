# Presentation Layer

This layer handles HTTP requests, responses, and routing.

## Controllers
- `AuthController`: Handles authentication-related requests (e.g., login, register).
- `UserController`: Handles user-related requests (e.g., profile updates).

## Middleware
- `Authenticate`: Verifies JWT tokens and authenticates users.
- `Authorize`: Checks user roles/permissions for authorization.

## Routes
- `/auth/login`: Route for user login.
- `/auth/register`: Route for user registration.
- `/user/profile`: Route for accessing user profile.