# Recipe Website

Welcome to the **Recipe Website**! This project is a web application that allows users to explore, rate, and save their favorite recipes. It includes features like user authentication, recipe categorization, and personalized favorite lists. The backend is built using **Node.js**, **Express.js**, and **Prisma ORM**, with **JWT** for authentication and authorization.

---

## Features

### 1. **Authentication & Authorization**

- User registration and login.
- Secure authentication using **JWT (JSON Web Tokens)**.
- Protected routes for authenticated users only.
- Logout functionality to invalidate the session.

### 2. **Home Page**

- Displays top-rated recipes based on user ratings.
- Recipes are categorized for easy navigation (e.g., Breakfast, Lunch, Dinner, Desserts).
- Users can browse recipes without logging in.

### 3. **User-Specific Features**

- Each user has a **favorite list** where they can save their preferred recipes.
- Favorite recipes are not categorized and are unique to each user.

### 4. **Backend**

- Built with **Node.js** and **Express.js** for the server.
- Uses **Prisma ORM** for database management and interactions.
- RESTful API design for seamless communication between the frontend and backend.

---

## Technologies Used

- **Runtime**: Node.js
- **Backend Framework**: Express.js
- **Database ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: (e.g., PostgreSQL, MySQL, or SQLite - depending on your setup)
- **API Testing**: Postman or Insomnia
- **Version Control**: Git

---

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A database (e.g., PostgreSQL, MySQL, or SQLite).
- Git for version control.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sara-mohamd/Recipe.git
   cd Recipe
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:
   - Update the `.env` file with your database credentials:

     ```env
     DATABASE_URL="your-database-connection-string"
     JWT_SECRET="your-jwt-secret-key"
     ```

   - Run Prisma migrations to set up the database schema:

     ```bash
     npx prisma migrate dev --name init
     ```

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

---

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in and receive a JWT.
- **POST /api/auth/logout**: Log out and invalidate the JWT.

### Recipes

- **GET /api/recipes**: Get all recipes (categorized and top-rated).
- **GET /api/recipes/:id**: Get details of a specific recipe.
- **POST /api/recipes**: Add a new recipe (protected route).
- **PUT /api/recipes/:id**: Update a recipe (protected route).
- **DELETE /api/recipes/:id**: Delete a recipe (protected route).

### Favorites

- **GET /api/favorites**: Get the logged-in user's favorite recipes.
- **POST /api/favorites/:recipeId**: Add a recipe to favorites.
- **DELETE /api/favorites/:recipeId**: Remove a recipe from favorites.

---

## Database Schema (Prisma)

Here’s an overview of the database schema:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  email     String   @unique
  password  String
  favorites Favorite[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Recipe {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  category    String
  rating      Float    @default(0)
  favorites   Favorite[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Favorite {
  id      Int    @id @default(autoincrement())
  userId  Int
  user    User   @relation(fields: [userId], references: [id])
  recipeId Int
  recipe  Recipe @relation(fields: [recipeId], references: [id])
  createdAt DateTime @default(now())
}
```

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: <saraamohamed0038@gmail.com>
- **GitHub**: [sara-mohamd](https://github.com/sara-mohamd)

---

Enjoy cooking and exploring recipes! 🍳
