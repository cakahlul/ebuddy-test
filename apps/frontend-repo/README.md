# eBuddy Test

## 🚀 Project Overview

**eBuddy Test** is a monorepo project built using **Turborepo**, which includes:

- **backend-repo**: An Express.js server for handling API requests.
- **frontend-repo**: A Next.js application for the user interface.

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

### 3️⃣ Setup Backend Credentials

1. **Download the Firebase service account JSON file** from the Firebase Console.
2. **Paste the file** into `apps/backend-repo/` and rename it to **`key.json`**.

### 4️⃣ Setup Frontend Environment Variables

1. **Copy** `.env.example` inside `apps/frontend-repo`.
2. **Rename it** to `.env` and update the required values.

### 5️⃣ Start Development Server

Run the entire monorepo:

```sh
npm run dev
```

Or start each service separately:

- **Backend:** `npm run dev --workspace=backend-repo`
- **Frontend:** `npm run dev --workspace=frontend-repo`

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
