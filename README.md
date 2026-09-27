# Claim Nest Backend

Backend service for a **Share Claim Management System** that streamlines the processing of claims made by legal heirs or relatives of deceased shareholders for transferring or claiming their shares.

## Overview

Claim Nest provides a structured, digital workflow for managing the end-to-end lifecycle of share inheritance claims — from claimant registration and document collection to form generation and final document storage.

The backend exposes a GraphQL API and is designed to be modular, scalable, and maintainable as the system grows.

> **Note:** The project is in its initial development stage. Architecture details, module documentation, API references, and setup instructions will be added incrementally as development progresses.

---

## Features (Planned)

- Manage customer and claimant profiles
- Store and version form templates
- Generate claim forms dynamically from stored data
- Track and manage generated documents
- Store finalized, submission-ready documents
- Authentication and role-based access control

---

## Tech Stack

### Backend

| Technology | Purpose |
|---|---|
| **NestJS** | Server framework |
| **TypeScript** | Language |
| **GraphQL** | API layer |
| **MongoDB** | Database |
| **Mongoose** | ODM |

### Configuration & Security

| Technology | Purpose |
|---|---|
| **Joi** | Environment variable validation |
| **Argon2** | Password hashing |
| **JWT** | Authentication (planned) |

### Document Processing

| Technology | Purpose |
|---|---|
| **HTML Templates** | Base structure for claim forms |
| **Handlebars** | Dynamic data rendering in templates |
| **PDF / DOCX generation** | Planned for a future phase |

---

## Database

Claim Nest uses **MongoDB Atlas** with **Mongoose**.

### Collections

```text
claim_nest
├── roles
├── users
└── claims
```

#### Roles

Stored in the `roles` collection and seeded during project setup.

Current roles: `admin`, `user`

#### Users

Stored in the `users` collection. The initial admin user is seeded using credentials from environment variables. Passwords are hashed with **Argon2** before storage.

#### Claims

Stored in the `claims` collection. Each claim document contains company details, share details, bank details, claimant info, and deceased-person details.

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Application
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=

# Authentication
JWT_SECRET=
JWT_EXPIRES_IN=1d

# Admin Seed
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

> `.env` should not be committed. Use `.env.example` to document required variables.

---

## Project Structure

```text
src/
├── common/
│   └── validation/
│       └── env.validation.ts
│
├── config/
│   └── index.ts
│
├── database/
│   ├── schemas/
│   │   ├── claim.schema.ts
│   │   ├── role.schema.ts
│   │   └── user.schema.ts
│   ├── seeds/
│   │   ├── role.seed.ts
│   │   └── user.seed.ts
│   └── database.module.ts
│
├── modules/
│   ├── claims/
│   │   └── claims.module.ts
│   ├── roles/
│   │   ├── constant/
│   │   └── roles.module.ts
│   └── users/
│       └── users.module.ts
│
├── app.controller.ts
└── app.module.ts
```

---

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB / MongoDB Atlas

### Installation

```bash
npm install
```

### Database Setup

The project uses a dedicated `DatabaseModule` for the MongoDB connection. Feature modules register their Mongoose schemas via `MongooseModule.forFeature()`.

#### Seed Roles

```bash
npm run seed:roles
```

Creates predefined roles if they don't already exist.

#### Seed Admin User

```bash
npm run seed:user
```

Reads credentials from `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env`. Password is hashed with Argon2 before storage.

> Run `seed:roles` before `seed:admin` — the admin user requires the `admin` role to exist.

### Run the Application

```bash
# Development
npm run start:dev

# Production build
npm run build

# Production
npm run start:prod
```

The backend will run on `http://localhost:3000`.

---

## API Documentation

> GraphQL schema and query/mutation references will be documented here as the API is implemented.

---

## Roadmap

- [x] MongoDB connection setup
- [x] Mongoose schema setup
- [x] Schema registration
- [x] Role seeding
- [x] Admin user seeding
- [ ] User management module
- [ ] Claim management module
- [ ] Authentication and authorization
- [ ] Template management module
- [ ] Document generation with Handlebars
- [ ] PDF/DOCX export support
- [ ] Full API documentation
- [ ] Deployment guide

---

## Contributing

Contribution guidelines will be added once the project reaches a stable base.

---

## License

To be decided.