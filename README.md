# Kanban Backend
This project provides a Kanban API implemented in Node.js using [Express](https://expressjs.com/) and Postgres


## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- Postgres DB
### Installation
1. Clone the repository and install dependencies:

   ```bash
   git clone git@github.com:sunny-shankar/kanban-backend.git
   cd kanban-backend
   npm install
   ```
2. Create a `.env` file in the project root and configure the following variables:
    ```
    PORT=3000
    DB_URI=postgres://localhost:PORT/kanban
    SECRET_KEY=secret_key
    ```
4. Start the server:

    ```bash
    npm run dev
    ```