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

### Document Processing

| Technology | Purpose |
|---|---|
| **HTML Templates** | Base structure for claim forms |
| **Handlebars** | Dynamic data rendering in templates |
| **PDF / DOCX generation** | Planned for a future phase |

---

## Project Structure

```text
src/
├── auth/                 # Authentication and authorization
├── users/                # Internal user management
├── customers/            # Claimant / shareholder data
├── templates/            # Form template management
├── documents/            # Generated document management
├── document-versions/    # Versioning for documents
├── common/               # Shared utilities, guards, decorators
└── app.module.ts         # Root application module
```

---

## Getting Started

> Setup instructions will be added as the project stabilizes.

---

## API Documentation

> GraphQL schema and query/mutation references will be documented here as endpoints are implemented.

---

## Roadmap

- [ ] Core module scaffolding (auth, users, customers)
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