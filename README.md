# Full Stack Developer Assessment - FyndMe

This is a full-stack implementation of a data-driven single-page application based on a provided Figma design and CSV dataset.

## 🔧 Tech Stack

- Frontend: Next.js (App Router), Tailwind CSS, Redux Toolkit
- Backend: Express.js
- Charting: Recharts
- Data: CSV parsed and served via Express API

## 🚀 How to Run Locally

### Backend (Express)
```bash
cd fyndme-backend
npm install
node index.js
# Runs at http://localhost:5000
### API Information

- The backend server runs on [http://localhost:5000](http://localhost:5000).
- The main API endpoint is: [http://localhost:5000/api/data](http://localhost:5000/api/data)
- Note: Accessing `http://localhost:5000/` directly will return a "Cannot GET /" message. This is expected because the server is an API-only backend and does not serve a root route.

💻 Frontend (React)
Runs at: http://localhost:3000

Make sure the backend is running at port 5000 for API calls to work properly.

cd fyndme-frontend
npm install
npm run dev



