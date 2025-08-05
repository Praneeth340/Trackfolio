# QA Test Report

## ✅ Test Plan

- Load `/api/data` directly from backend → ensured valid JSON output
- Run frontend and validate chart rendering
- Verified correct role grouping and counts in chart

## 🐛 Issues Found

1. `csvSlice` missing default export — caused Redux error → fixed
2. `initialState` undefined in slice — fixed with `interface CSVState`
3. Typos in import paths — fixed via case-sensitive correction

## 🧪 Manual Test Cases

| Test                          | Expected Result             | Status  |
|-------------------------------|------------------------------|---------|
| CSV served from backend       | JSON array in browser        | ✅ Pass |
| Chart renders from live data  | Bar chart visible            | ✅ Pass |
| Redux state fetches data      | Verified via dev tools       | ✅ Pass |
| UI matches Figma layout       | Layout consistent            | ✅ Pass |

## 🔧 Tools Used

- Browser DevTools
- Postman (for API testing)
- Console logging


