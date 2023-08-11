# 💰👨🏽‍💻 E-Commerce Transaction CRUD API (Version 1 - Alpha)

## API Endpoint: https://ecommerce-trx-api-v1a.fly.dev

Hello Friends! Introducing the E-Commerce Transaction CRUD API is a simple REST API server built using Node.js, Express, and TypeScript. It allows users to perform basic CRUD operations on financial transactions, including creating, reading, updating, and deleting transactions.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Data Structure](#data-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Retrieve a list of all user transaction data.
- Get a specific transaction by its ID.
- Create a new transaction.
- Update an existing transaction.
- Partially update an existing transaction.
- Delete a transaction.

### Features: API End points
- GET /transactions: Retrieve all transactions.
- GET /transactions/:id Get a specific transaction by ID.
- POST /transactions: Create a new transaction.
- PUT /transactions/:id Update an existing transaction by ID.
- PATCH /transactions/:id Partially update an existing transaction by ID.
- DELETE /transactions/:id Delete an existing transaction by ID.

### Features: Data Structure
The Transaction data structure consists of the following fields:
- id: Unique identifier for the transaction.
- userid: User ID associated with the transaction.
- description: Description of the transaction (buy/sell).
- amount: Transaction amount.

## Usage

You can interact with the API directly by using API client tools like Postman or curl to interact with the API endpoints at the following URL:

- [https://ecommerce-trx-api-v1a.fly.dev/transactions/](https://ecommerce-trx-api-v1a.fly.dev/transactions/)

### Retrieve All Transactions

Send a **GET** request to the base URL to retrieve all transactions.

```
GET https://ecommerce-trx-api-v1a.fly.dev/transactions/
```


### Create a New Transaction

Send a **POST** request to the base URL with a JSON payload to create a new transaction.

```
POST https://ecommerce-trx-api-v1a.fly.dev/transactions/
Content-Type: application/json

{
"userid": "user123",
"description": "buy",
"amount": 20000
}
```


### Update a Transaction

Send a **PUT** request to the base URL with a JSON payload to update an existing transaction.

```
PUT https://ecommerce-trx-api-v1a.fly.dev/transactions/{id}
Content-Type: application/json

{
"userid": "user456",
"description": "sell",
"amount": 30000
}
```

### Patch a Transaction

Send a **PATCH** request to /transactions/:id with a JSON payload to partially update an existing transaction.

```
PATCH https://ecommerce-trx-api-v1a.fly.dev/transactions/{id}
Content-Type: application/json

{
  "amount": 25000
}
```

### Delete a Transaction

Send a **DELETE** request to the base URL with a JSON payload to update an existing transaction.

```
DELETE https://ecommerce-trx-api-v1a.fly.dev/transactions/{id}
```

## Contributing

Contributions are welcome! If you find any bugs or want to enhance the app, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
