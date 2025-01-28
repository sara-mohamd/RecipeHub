# Source Directory

The `src` directory contains the main source code for the application, organized into several layers following the principles of Clean Architecture.

## Directory Structure

```graphql
src/
├── domain/
│   ├── entities/
│   │   └── User.js             # User entity (business logic)
│   ├── interfaces/
│   │   ├── IUserRepository.js  # User repository interface
│   │   ├── IAuthService.js     # Auth service interface
│   │   ├── ITokenService.js    # Token service interface
│   │   └── IAuthRepository.js  # Auth repository interface
│   └── utils/
│       ├── PasswordHasher.js   # Utility for password hashing
│       ├── TokenGenerator.js   # Utility for token generation/validation
│       └── EmailSender.js      # Utility for sending emails
├── application/
│   ├── services/
│   │   ├── AuthService.js      # Implements authentication logic
│   │   └── TokenService.js     # Implements token generation/validation
│   └── usecases/
│       ├── RegisterUser.js     # Use case for user registration
│       ├── LoginUser.js        # Use case for user login
│       ├── LogoutUser.js       # Use case for user logout
│       ├── RefreshToken.js     # Use case for refreshing tokens
│       └── ForgotPassword.js   # Use case for password reset
├── infrastructure/
│   ├── database/
│   │   ├── prisma/             # Prisma configuration
│   │   └── repository/
│   │       ├── UserRepository.js # Implements IUserRepository
│   │       ├── AuthRepository.js # Implements IAuthRepository
│   │       └── TokenRepository.js # Implements ITokenRepository
│   ├── auth/
│   │   ├── JwtStrategy.js      # JWT authentication strategy
│   │   └── LocalStrategy.js    # Local authentication strategy
│   └── utils/
│       └── TokenGenerator.js   # Utility for generating/validating tokens
├── presentation/
│   ├── controllers/
│   │   ├── AuthController.js   # Handles auth-related HTTP requests
│   │   └── UserController.js   # Handles user-related HTTP requests
│   ├── middleware/
│   │   ├── Authenticate.js     # Middleware for authentication
│   │   └── Authorize.js        # Middleware for authorization (roles/permissions)
│   └── routes/
│       ├── authRoutes.js       # Routes for authentication (login, register, etc.)
│       └── userRoutes.js       # Routes for user-related actions
└── config/
    ├── auth.js                 # Configuration for authentication (e.g., JWT secret)
    └── database.js             # Database configuration
```

## Overview

The `src` directory is organized to follow the principles of Clean Architecture, separating concerns into different layers:

- **Application Layer**: Contains use cases and services that implement the application's business logic.
- **Domain Layer**: Contains the core business logic and entities.
- **Infrastructure Layer**: Handles external systems like databases and APIs.
- **Presentation Layer**: Handles HTTP requests, responses, and routing.

This structure helps to maintain a clean and scalable codebase, making it easier to manage and extend the application.
