# 🚀 Employee Management System (EMS)

A modern **Employee Management System** built using **React.js** that allows administrators to assign tasks and employees to manage and track their task progress efficiently.

This project demonstrates **real-world dashboard functionality**, including task lifecycle management (New → Active → Completed → Failed) with responsive UI.

---
## 🔐 Demo Login Credentials

To explore the system, use the following credentials:

### 👨‍💼 Admin Login

```
Email: admin@me.com
Password: 123
```

### 👩‍💻 Employee Logins

```
Email: em@ex.com
Email: employee2@example.com
Email: employee3@example.com
Email: employee4@example.com
Email: employee5@example.com

Password (for all employees): 123
```

> 💡 All accounts use the same password for demo purposes.


## 📌 Features

### 👨‍💼 Admin Panel

* Create and assign tasks to employees
* View all employees' task statistics
* Monitor task status (New, Active, Completed, Failed)
* Real-time task count updates

### 👩‍💻 Employee Panel

* View assigned tasks
* Accept new tasks
* Mark tasks as completed
* Mark tasks as failed
* Retry failed tasks

### 📊 Task Status Flow

```
New Task → Active Task → Completed / Failed
```

### 🎨 UI / UX

* Fully responsive (Mobile, Tablet, Desktop)
* Dashboard layout
* Horizontal scroll tables for mobile
* Clean card-based task system
* Modern dark theme interface

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **State Management:** React Context API
* **Icons & UI:** Custom Tailwind components
* **Build Tool:** Vite / Create React App (based on your setup)

---

## 📂 Project Structure

```
src/
│── components/
│   │── AdminDashboard/
│   │── EmployeeDashboard/
│   │── TaskList/
│   │── others/
│
│── context/
│   └── AuthProvider.jsx
│
│── utils/
│   └── CountFunction.js
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ems-project.git
cd ems-project
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

or (if CRA)

```bash
npm start
```

---

## 🔐 Demo Login Credentials

### Admin

```
email: admin@example.com
password: 123
```

### Employee

```
email: employee1@example.com
password: 123
```

*(Update credentials based on your data file if needed.)*

---

## 📱 Responsive Support

| Device  | Supported |
| ------- | --------- |
| Mobile  | ✅         |
| Tablet  | ✅         |
| Desktop | ✅         |

---

## 🧠 Learning Objectives

This project demonstrates:

* React component architecture
* Context API state management
* Real-world CRUD operations
* Dashboard UI development
* Responsive design with Tailwind
* Task lifecycle logic handling

---

## 🚀 Future Improvements

* Backend integration (Node.js + MongoDB)
* Authentication with JWT
* Role-based access control
* Notifications system
* Charts & analytics dashboard
* Drag & drop task management

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Mohan Krishna**

Frontend Developer (React.js)

---

⭐ If you like this project, give it a star on GitHub!
