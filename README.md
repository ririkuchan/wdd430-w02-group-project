# WDD430 — Group Project (Weeks 02–07 Final Submission)

This repository contains the full development of a simple dashboard application built with **Next.js (App Router)** and **TypeScript**.  
The project was developed progressively from **Week 02 through Week 07**, with new features and improvements added each week.

The final result includes:
- Dashboard home page with summary info  
- Customers page with full client-side CRUD  
- Invoices page with full client-side CRUD  
- Navigation layout  
- Clean file structure  
- Successful production deployment on Vercel  

---

# 🚀 **Production Deployment**
https://wdd430-w02-group-project.vercel.app/dashboard

---

# 📁 **Project Overview (Final Version)**

### ✔ Dashboard (`/dashboard`)
- Displays simple summary metrics based on mock data
- Global navigation to Customers / Invoices pages

### ✔ Customers Page (`/dashboard/customers`)
- View list of customers  
- Search filter  
- Add new customer (name + email)  
- Delete customer  
- State handled via React (`useState`, `useMemo`)  
- Data resets on refresh (client-side only, per project scope)

### ✔ Invoices Page (`/dashboard/invoices`)
- View invoice list  
- Search filter  
- Add invoice (amount + status)  
- Delete invoice  
- State handled via React  
- Data resets on refresh (expected behavior)

### ✔ Technical Features
- Next.js App Router routing  
- TypeScript model definitions  
- TS path alias configuration (`@/*`)  
- Organized directory structure under `/app/dashboard/...`  
- Vercel CI/CD auto-deploy from GitHub  

---

# 🛠 **How to Run Locally**

```bash
git clone https://github.com/ririkuchan/wdd430-w02-group-project.git
cd wdd430-w02-group-project
npm install
npm run dev
```

Then open:  
**http://localhost:3000/dashboard**

---

# 📌 **Stella’s Contribution Summary (Final Submission)**

- Implemented dashboard routing and layout  
- Built Customers and Invoices pages  
- Added search, add, and delete functionality for both resources  
- Configured TypeScript paths and fixed related errors  
- Cleaned unused files and organized folder structure  
- Deployed project to Vercel and verified behavior  
- Updated README and project documentation  
- Maintained Trello board and task progress  
- Performed testing on all dashboard pages  

---

# 🗂 **Directory Structure (Final)**

```
app/
 ├─ dashboard/
 │   ├─ page.tsx
 │   ├─ layout.tsx
 │   ├─ customers/
 │   │    └─ page.tsx
 │   └─ invoices/
 │        └─ page.tsx
lib/
 ├─ customers.ts
 └─ invoices.ts
```

---

# 📜 **Weekly Progress Log (Weeks 02–07)**  
*(Required for submission — retains history of development)*

## **Week 02**
- Initialized Next.js project  
- Set up repo, branches, and basic folder structure  
- Added initial routing for dashboard pages  
- Created Trello board and work items  
- Documented project setup and design plan  

---

## **Week 03**
- Added more detailed routing structure  
- Prepared for customer/invoice components  
- Organized Trello tasks for next phases  
- Reviewed App Router tutorials and applied them to project structure  

---

## **Week 04**
- Reviewed project structure and prepared tasks  
- Updated Trello board with new W04 items  
- Verified repo consistency and workflow organization  

---

## **Week 05**
- Reviewed Trello for remaining tasks  
- Confirmed page structure for dashboard section  
- Ensured routing and folders were ready for CRUD implementation  

---

## **Week 06**
- Added folders and placeholder pages (Customers, Invoices)  
- Added dashboard summary page  
- Set up TypeScript alias paths  
- Cleaned unnecessary files  
- Prepared CRUD logic for Week 07  
- Updated `.gitignore`  

---

## **Week 07 (Final Week)**
- Implemented full client-side CRUD for Customers  
- Implemented full client-side CRUD for Invoices  
- Added form handling, filtering, and delete actions  
- Fixed TypeScript alias path error  
- Adjusted accessibility (added labels for select fields)  
- Deployed final application to Vercel  
- Completed README + final documentation  
- Finalized Trello board and workflow  
- Conducted final testing on all pages  

---

# ✅ **Final Status**
All required features for Weeks 02–07 have been fully implemented.  
The dashboard application is complete, deployed, and ready for grading and demonstration.

---

# 🎉 Thank You
This project reflects the cumulative work across all seven weeks of the course and demonstrates routing, React state management, TypeScript usage, and deployment readiness.
