Angular E-Commerce Demo
A modern, responsive Angular mini e-commerce application built to showcase real-world frontend development skills, UI/UX polishing, and cart-to-checkout flow handling.

This project focuses on clean component architecture, state management, and user-friendly design, making it ideal for portfolio and interview discussions.

🚀 Features
Product listing with dynamic cart integration

Slide-out cart panel with quantity controls

Real-time cart count badge

Fully designed checkout page with summary, address, and payment options

Empty cart state with centered UI and animation

Polished top bar with shadows and responsive layout

Mobile-friendly and responsive design

Success modal with glassmorphism overlay, animated checkmark, and premium button interactions

🛠️ Tech Stack
Angular (Standalone Components)

TypeScript

HTML5 & CSS3

Angular Router

Service-based cart state management

Modern UI styling & animations (backdrop blur, lift-scale, gradient shadows)

📂 Project Structure
text
src/
 ├── app/
 │   ├── app.html        # Top bar, cart UI, router outlet
 │   ├── app.css         # Global styles + top bar & cart styling
 │   ├── app.ts          # Cart logic & UI handling
 │   ├── cart.service.ts
 │   ├── checkout/
         ├── checkout.component.html
         ├── checkout.component.css
         ├── checkout.component.ts
 │   ├── products/
         ├── product-list.component.html
         ├── product-list.component.css
         ├── product-list.component.ts
 └── main.ts
 
⚙️ Development Server
bash
ng serve
Open http://localhost:4200 in your browser. The app will reload automatically on source code changes.

🧱 Build
bash
ng build
Build output available in the dist/ directory.

🧪 Testing
bash
ng test
(Testing setup ready for extension based on project needs.)

🎯 What This Project Demonstrates
✅ Practical Angular application flow (cart → checkout → success)

✅ Component-based UI development with reusable patterns

✅ State management using services

✅ UX-focused UI polishing (glassmorphism, animations, shadows)

✅ Accessibility (ARIA dialog roles, focus management)

✅ Mobile-first responsive design

✅ Debugging & fixing real Angular errors cleanly
