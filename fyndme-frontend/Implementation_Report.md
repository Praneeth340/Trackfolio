# Implementation Report

## 📌 Project Overview

This project is a full-stack implementation of a dashboard that visualizes employee subscription data from a CSV file. The goal was to implement the provided Figma design as pixel-perfectly as possible using modern frontend and backend tools. The dashboard includes a bar chart of subscription categories and a detailed, scrollable table listing user data.

---

## ✅ Features Implemented

1. **CSV Data Parsing (Backend)**
   - Used `papaparse` to read and convert CSV file into JSON.
   - Served this data via an Express API at `/api/data`.

2. **Frontend Integration**
   - Connected to the backend API using `fetch` in a Next.js component.
   - Parsed the data and passed it to chart and table components.

3. **Bar Chart Visualization**
   - Used `Recharts` to visualize subscription categories.
   - Applied light green bars, white background, and spacing as per Figma.

4. **Data Table Display**
   - Rendered user data (Name, Username, Location, etc.) in a responsive table.
   - Styled using Tailwind CSS with fixed headers and scrollable body.

5. **Styling & Layout**
   - Used `Tailwind CSS` to closely match fonts, spacing, borders, and layout from Figma.
   - Implemented responsiveness and theme fidelity (dark/light modes if needed).

---

## 🧠 Key Implementation Decisions

- **Backend-first CSV Parsing**  
  Kept logic centralized by parsing CSV server-side and sending clean JSON to frontend.

- **Charting with Recharts**  
  Chosen for responsive, declarative approach and ease of customization.

- **Tailwind CSS**  
  Enabled fast iteration and design consistency to achieve pixel-accurate layout.

- **Component Structure**  
  Modularized frontend into reusable components: `SubscriptionChart`, `EmployeeTable`.

---

## 📌 Assumptions

- The CSV file structure and header names will remain fixed.
- Only one CSV dataset will be visualized (no file upload or dynamic switching).
- The layout and navigation shell (sidebar, top nav) are outside the scope of this task.

---

## ⚖️ Trade-offs & Constraints

- Chose not to implement table filtering or pagination due to time constraints.
- Static file usage instead of dynamic upload for simpler backend logic.
- Avoided unit testing in favor of manual testing for faster iteration.

---

## 🧩 Challenges & Solutions

- **Overlapping Layouts**: Figma spacing didn’t translate directly — used grid/flex to match.
- **Chart Overflow**: Handled dynamic bar widths and label visibility with `ResponsiveContainer`.
- **Font Matching**: Extracted font sizes and weights using Figma’s Inspect Mode.

---

## 📈 Outcome

The application accurately displays subscription statistics and employee data in a clean, responsive layout. The UI closely aligns with the Figma design and performs reliably in local development environments.

