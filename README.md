# 🧑‍💻 Employee Pair Work Tracker

This React + Vite application identifies the pair of employees who have worked together on common projects for the longest period of time.

---

## 📌 Features

- ✅ Upload a CSV file with employee project data
- ✅ Supports multiple date formats (YYYY-MM-DD, DD/MM/YYYY, MMMM D, YYYY, etc.)
- ✅ Automatically treats `NULL` as today's date
- ✅ Displays the project-wise breakdown of days worked together
- ✅ Highlights the employee pair with the longest total time together
- ✅ Modern, responsive UI built with Tailwind CSS
- ✅ Clean feedback if no valid matches are found
- ✅ Works on desktop and mobile screens

---

## 📁 Sample CSV Format

```csv
143,12,2013-11-01,2014-01-05
218,10,2012-05-16,NULL
143,10,2009-01-01,2011-04-27
```

Headers are optional (app detects them automatically).
DateTo can be NULL — it will be treated as today.

## ✅ Supported Date Formats

- YYYY-MM-DD
- DD/MM/YYYY
- MM-DD-YYYY
- MMM D, YYYY
- MMMM D, YYYY

## 🚀 Getting Started (Vite Setup)

### 🔧 Prerequisites

- Node.js v14.18+ (v16+ recommended)
- npm or yarn

### 📦 Installation

```bash
git clone https://github.com/atanas-mitev/atanas-mitev-employees.git
cd atanas-mitev-employees
npm install
```

### ▶️ Start the Development Server

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

### ⚙️ Build for Production

```bash
npm run build
```

This will output static files to the dist/ folder.

### 🔍 Preview the Production Build (Optional)

```bash
npm run preview
```

This runs a local server to simulate production.

## 📊 How It Works

1. The user uploads a CSV file.
2. The app parses the data and finds all employee pairs that worked on the same projects.
3. It calculates overlapping date ranges per project.
4. The pair who worked together the most (total days across all projects) is displayed.
5. The result shows each shared project and number of days worked together.

## 🖥 UI Overview

- 📁 File Upload – Drag or click to select .csv file
- 📊 Table – Lists employee pairs, project ID, and overlapping days
- 📴 Empty State – Displays a message if no overlapping records are found
- 📱 Responsive Design – Looks great on mobile and desktop

## 📂 Project Structure

```bash
src/
├── components/
│   ├── FileUploader.jsx       # File upload input
│   └── DataGridTable.jsx      # Result table
├── utils/
│   ├── csvParser.js           # CSV parsing logic
│   ├── dateUtils.js           # Date parsing & normalization
│   └── workCalculator.js      # Core logic to find overlapping work periods
├── App.jsx                    # Main app component
└── index.css                  # Tailwind base styles
```

## 📦 Built With

- React
- Vite
- Tailwind CSS
- PapaParse - CSV parser
- Day.js - date formatting and manipulation

## 🧪 Test It With These CSVs

| Test Case | Description |
|-----------|-------------|
| basic-overlap.csv | Two employees overlap on one project |
| no-overlap.csv | No employees worked together |
| multi-project.csv | Longest-working pair across multiple projects |
| multi-date-formats.csv | Uses various date formats (bonus point test) |
| duplicate-projects.csv | Same project worked twice by same employees |

## 💡 Notes

- Malformed or invalid rows are skipped and logged to the console.
- You can freely customize the look with Tailwind utility classes.

## 📜 License

MIT – Feel free to fork, use, or adapt.

## 🤝 Credits

Built as part of a frontend-focused challenge task.