# WDD430 — Week 02 Group Project

## Repo URL
https://github.com/ririkuchan/wdd430-w02-group-project

## Week 05 Update
- Reviewed Trello board and confirmed task coverage for Week 05.
- Verified project repository structure and ensured the workflow remains consistent.

## Week 04 Update
- Reviewed project structure and prepared tasks for Week 04.
- Updated Trello board with new Week 04 tasks.
- Moved one task into In Progress to reflect current progress.

## Group Summary
**Date:** 2025-11-06  
**Participants:** Stella (facilitator), async group members (Discord coordination)

**Agenda & Outcomes**
- Discussed scope: small Next.js dashboard with Home, Customers, and Invoices views.
- Set up GitHub repo and local branches.
- Assigned 10+ work items and selected color scheme and typography.
- Confirmed each member will push their feature branch via PR.

**Next Steps**
- Stella: project initialization & README documentation.
- Group: start UI components and data fetch setup.

---

## Design & Styling Plan
- **Colors:** emerald-600 / emerald-700 / slate-50 / slate-900  
- **Typography:** Inter (UI), JetBrains Mono (code)  
- **Radius:** rounded-xl, **Spacing:** 4 / 8 / 12 / 16  
- **Components:** Nav, Card, Button, Table  
- **Accessibility:** Contrast ratio ≥ 4.5:1, proper `aria-label`s  
- **Responsiveness:** sm / md / lg breakpoints collapse sidebar  
- **Commit Policy:** `feat:` `fix:` `docs:` prefixes per feature branch

---

## User Stories / Work Items
1. As a user, I want navigation between Home, Customers, and Invoices.  
2. As a user, I want a responsive layout that works on both mobile and desktop.  
3. As a user, I want a Home page showing key summary stats in cards.  
4. As a user, I want a Customers table listing all users.  
5. As a user, I want to filter Customers by search.  
6. As a user, I want to add new Customers via a form.  
7. As a user, I want to edit Customer information.  
8. As a user, I want to delete a Customer with confirmation.  
9. As a user, I want consistent colors, fonts, and button styles.  
10. As a maintainer, I want CI checks on PRs to ensure quality.  
11. As a maintainer, I want clear README setup instructions.  
12. As a designer, I want an accessible color palette and typography rules.

---

## Local Setup
```bash
git clone https://github.com/ririkuchan/wdd430-w02-group-project.git
cd wdd430-w02-group-project
git checkout -b feat/setup
npm install
npm run dev
