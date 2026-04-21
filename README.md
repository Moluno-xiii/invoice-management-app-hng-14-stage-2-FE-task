# Invoicr — Invoice Management App

A responsive invoice management app built with React 19, TypeScript, and IndexedDB. Submitted for **HNG-14 Stage 2 Frontend Track**.

Users can create, view, edit, delete, filter, and mark invoices as paid. Data persists locally via IndexedDB, theme preference persists via `localStorage`, and the UI adapts cleanly.

Design from [Figma File](https://www.figma.com/design/40HcEbp7sTVEinPMQKkRi9/invoice-app--Copy-?node-id=0-1&t=hO6jIR0Cid91w4kr-0).

---

## Technologies used

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) via [`idb`](https://github.com/jakearchibald/idb)
- [Zod](https://zod.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [League Spartan](https://fonts.google.com/specimen/League+Spartan) (Google Fonts)

---

## Running locally

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- [pnpm](https://pnpm.io/) (recommended) — `npm install -g pnpm`
- [Git](https://git-scm.com/)

### 1. Clone the repository

Using the [GitHub CLI](https://cli.github.com/):

```bash
gh repo clone https://github.com/Moluno-xiii/invoice-management-app-hng-14-stage-2-FE-task
```

Or with plain git:

```bash
git clone https://github.com/Moluno-xiii/invoice-management-app-hng-14-stage-2-FE-task
```

Then enter the project directory:

```bash
cd invoice-management-app-hng-14-stage-2-FE-task
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the dev server

```bash
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Build & preview

```bash
pnpm build
pnpm preview
```

---

## Features

- **CRUD** — create, read, update, delete invoices.
- **Filter** — multi-select status filter (Paid / Pending / Draft).
- **Theme toggle** — light / dark / system-auto, persisted in `localStorage`, applied pre-paint so there's no flash.
- **Validation** — required fields, email format, ≥1 item, non-negative quantity & price.
- **Local persistence** — IndexedDB survives reload; user edits preserved.
- **Loading / error states** — skeleton invoice rows + centered error with retry.
- `and of course` **Fully Responsive** — mobile, tablet, and desktop layouts tested down to 320 px.

---

## Author

Built by **@Moluno-xiii** for HNG-14 Stage 2 Frontend.
