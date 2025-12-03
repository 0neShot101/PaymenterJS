# PaymenterJS

<p align="center">
  <a href="https://www.npmjs.com/package/@oneshot101/paymenterjs"><img src="https://img.shields.io/npm/v/@oneshot101/paymenterjs?style=for-the-badge&logo=npm&logoColor=white" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@oneshot101/paymenterjs"><img src="https://img.shields.io/npm/dm/@oneshot101/paymenterjs?style=for-the-badge&logo=npm&logoColor=white" alt="npm downloads"></a>
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Runs on Bun"></a>
  <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://eslint.org"><img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"></a>
  <a href="https://prettier.io"><img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT"></a>
</p>

`PaymenterJS` is a developer-friendly Paymenter API client for TypeScript and JavaScript. This library provides a structured and typed way to interact with your Paymenter instance's API.

## Installation

```bash
# npm
npm install @oneshot101/paymenterjs

# pnpm
pnpm add @oneshot101/paymenterjs

# yarn
yarn add @oneshot101/paymenterjs

# bun
bun add @oneshot101/paymenterjs
```

## Quick start

To get started, you need to initialize the client with your Paymenter instance URL and API key.

```typescript
import { PaymenterClient } from '@oneshot101/paymenterjs';

const client = new PaymenterClient({
  baseUrl: 'https://your-paymenter-instance.com/api',
  apiKey: 'your-api-key',
});
```

## Usage

### Users

Manage user accounts and details.

```typescript
// List all users
const users = await client.users.list();

// Get a specific user
const user = await client.users.get(1);

// Create a new user
const newUser = await client.users.create({
  username: 'johndoe',
  email: 'john@example.com',
  password: 'securepassword',
  first_name: 'John',
  last_name: 'Doe',
});

// Update a user
await client.users.update(1, {
  first_name: 'Johnny',
});

// Delete a user
await client.users.delete(1);
```

### Tickets

Full support for the ticketing system.

```typescript
// List all tickets
const tickets = await client.tickets.list();

// Get a specific ticket
const ticket = await client.tickets.get(1);

// Create a new ticket
const newTicket = await client.tickets.create({
  subject: 'Help needed',
  user_id: 1,
  priority: 'high',
  status: 'open',
});

// Update a ticket
await client.tickets.update(1, {
  status: 'closed',
});
```

### Invoices

Create and manage invoices.

```typescript
// List all invoices
const invoices = await client.invoices.list();

// Get a specific invoice
const invoice = await client.invoices.get(1);

// Create a new invoice
const newInvoice = await client.invoices.create({
  user_id: 1,
  status: 'pending',
});
```

### Orders

Manage customer orders.

```typescript
// List all orders
const orders = await client.orders.list();

// Get a specific order
const order = await client.orders.get(1);

// Create a new order
const newOrder = await client.orders.create({
  user_id: 1,
  product_id: 1,
  billing_cycle: 'monthly',
});
```

### Services

Interact with services provided to users.

```typescript
// List all services
const services = await client.services.list();

// Get a specific service
const service = await client.services.get(1);

// Create a new service
const newService = await client.services.create({
  name: 'Web Hosting',
  description: 'Premium web hosting',
  price: 10.0,
});
```

### Affiliates

Manage affiliate programs and tracking.

```typescript
// List all affiliates
const affiliates = await client.affiliates.list();

// Get a specific affiliate
const affiliate = await client.affiliates.get(1);

// Create a new affiliate
const newAffiliate = await client.affiliates.create({
  user_id: 1,
  code: 'SPECIALOFFER',
  commission: 10,
});
```

### Credits

Handle user credits.

```typescript
// List all credits
const credits = await client.credits.list();

// Get a specific credit transaction
const credit = await client.credits.get(1);

// Add credits to a user
const newCredit = await client.credits.create({
  user_id: 1,
  amount: 50.0,
  description: 'Bonus credits',
});
```

## Links

- GitHub: [https://github.com/0neShot101/PaymenterJS](https://github.com/0neShot101/PaymenterJS)
- License: MIT
