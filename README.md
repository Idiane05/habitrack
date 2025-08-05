# HabitTrack 

HabitTrack is a full-stack habit tracker application that helps users build, maintain, and visualize progress on their daily routines. Designed with simplicity and consistency in mind, HabitTrack offers an intuitive interface and robust backend to make habit tracking a rewarding experience.

##  Project Structure

```

habitrack/
├── client/     # Frontend - React
├── server/     # Backend - Node.js / Express
├── .github/    # GitHub Actions workflows
└── README.md   # Project documentation

````

##  Features

- Add, update, and delete daily habits
- Mark habits as complete
- See habit progress over time
- Responsive frontend built with React
- RESTful API backend built with Node.js & Express
- Code quality checks via ESLint
- Automated testing with Vitest
- Continuous Integration using GitHub Actions

---

## Getting Started

Follow these instructions to run the app locally on your machine.

### Prerequisites

Make sure you have these installed:

- Node.js v18+
- npm (comes with Node.js)

---

###  Clone the Repository

```bash
git clone https://github.com/Idiane05/habitrack.git
cd habitrack
````

###  Setup Backend (server)

```bash
cd server
npm install
npm start
```

Server runs on `http://localhost:5000`

---

###  Setup Frontend (client)

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

###  Running Tests

```bash
# From the client folder
npm test
```

---

###  Linting

```bash
# From either client or server folder
npx eslint .
```

---

##  Continuous Integration (CI)

This project uses **GitHub Actions** for CI. On every Pull Request:

* Code is linted
* Unit tests are run
* Merge is blocked unless checks pass and at least one reviewer approves

---

##  GitHub Project Board

Track progress, milestones, and tasks on the [Project Board](https://github.com/Idiane05/habitrack/projects/YOUR-PROJECT-ID)

---

##  Branch Protection Rules

* All changes to `main` must go through Pull Requests
* At least 1 reviewer approval required
* CI checks must pass before merging

---

##  License

This project is for educational purposes as part of the DevOps course assignment. Feel free to explore and learn!



