# Community-Ink

## Overview

**Community-Ink** is a basic blog post website designed for sharing messages online. This project demonstrates the integration of modern web technologies to create a full-stack application. The focus is on simplicity, scalability, and efficient backend handling.

## Technologies Used

### Backend

- **Hono Library**: Lightweight and fast framework for serverless applications.
- **Cloudflare Workers**: Serverless architecture for handling backend logic.
- **Prisma ORM**: Database access and management with an intuitive API.
- **PostgreSQL**: Relational database for storing blog post data.

### Frontend

- **React**: For building interactive and responsive UI.
- **TypeScript**: Adding type safety and better maintainability.

## Features

- **Create Posts**: Users can create and share blog posts.
- **View Posts**: All shared posts are visible to other users.
- **Responsive Design**: Frontend ensures a seamless experience across devices.
- **Cloudflare Workers**: Ensures efficient request handling and scalability.
- **Prisma ORM**: Enables seamless integration with PostgreSQL.

## Getting Started

To run **Community-Ink** locally, follow these steps:

### Prerequisites

- Node.js and npm installed.
- PostgreSQL database setup.
- Prisma-accelerate URL
- Cloudflare account for deploying Workers.
- Fork of this repository.

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Ranjan-n/Community-Ink.git
   cd Community-Ink
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables:  
   Create a `.env` file in the root directory with the following details:

   ```bash
   DATABASE_URL=postgresql://user:password@localhost:5432/community_ink
   ```

4. Add the `wrangler.toml` file with the required database URL and JWT secret. Example:

   ```toml
   [vars]
   DATABASE_URL = "prisma://accelerate.prisma-data.net/?api_key=yourAPIKey"
   JWT_SECRET = "your-secret-password"
   ```

5. Apply Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Live Demo

Update
Check out the live version here: https://community-ink.vercel.app/

## Contribution

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/Ranjan-n/Community-Ink/issues) if you'd like to contribute.
