# ICT251 Activity 3 - Interactive Personal Website

**Author:** Innocent Mbalakawe  
**Course:** ICT251 Web Technologies  
**Institution:** Mulungushi University  
**Live Site URL:** https://ict251-activity3-innocent.onrender.com

---

## Project Overview
This repository contains an enhanced, interactive personal student portfolio developed for ICT251 Activity 3. Building upon Activity 2, this project features expanded HTML5 structure, a dark slate responsive layout, a Projects & Skills section, and client-side JavaScript functionality.

---

## JavaScript Features Implemented

1. **Compulsory Contact Form Validation & Local Preview**
   - **How it works:** Intercepts form submission using `event.preventDefault()`. Validates that Name and Message are not blank or whitespace-only, and checks email syntax using standard pattern matching.
   - **Testing:** Submit empty inputs or spaces to trigger error feedback. Enter valid information to generate a local DOM preview card confirming validation.

2. **Theme Switch (Light / Dark Mode)**
   - **How it works:** Toggles a `.dark-theme` CSS class on the `<body>` element and updates button text.
   - **Testing:** Click the "🌙 Dark Mode" button in the header to switch between dark slate and light theme profiles.

3. **Expandable Content (Project Details)**
   - **How it works:** Toggles visibility (`.hidden`) for detailed descriptions within the Projects section and updates button state.
   - **Testing:** Click "Show Details" on any project card to reveal inner technology stacks and objectives.

4. **Weekly Study Hours Calculator**
   - **How it works:** Accepts planned daily study hours and days per week. Rejects invalid, out-of-range (outside 1-7 days or 1-24 hours), or negative entries before calculating total weekly hours.
   - **Testing:** Enter daily hours and days in the calculator section and click "Calculate Study Hours".