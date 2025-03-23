# eBuddy Test

## 🚀 Project Overview

**eBuddy Test** is a monorepo project built using **Turborepo**, which includes:

- **Backend**: An Express.js server for handling API requests.
- **Frontend**: A Next.js application for the user interface.

This monorepo structure ensures efficient code sharing and faster builds across multiple applications.

---

## 📁 Project Structure

```
/ebuddy-test
├── apps
│   ├── backend-repo  # Express.js backend service
│   ├── frontend-repo # Next.js frontend application
│
├── packages
│   ├── shared   # Shared logic (e.g., models, utilities)
│
├── tsconfig.base.json  # Shared TypeScript configuration
├── turbo.json  # Turborepo configuration
└── package.json  # Root package manager configuration
```

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-repo/ebuddy-test.git
cd ebuddy-test
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start Development Server

Run the entire monorepo:

```sh
npm run dev
```

Or start each service separately:

- **Backend:** `npm run dev --workspace=backend`
- **Frontend:** `npm run dev --workspace=frontend`

---

## 🔑 User Login for Testing

To test the authentication system, use the following credentials:

- **Email:** `test@example.com`
- **Password:** `123456`

---

## 🚀 Deployment

For production builds, run:

```sh
npm run build
```

And start the project with:

```sh
npm start
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

🚀 **Happy Coding!**
