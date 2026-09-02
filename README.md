#  Musinsa (E‑Commerce) Clone 🛍️

A modern, responsive e‑commerce web application inspired by **Musinsa**, built with **React** and **Tailwind CSS**.  
This project demonstrates dynamic product rendering, interactive favorites and cart functionality, and scalable architecture suitable for large product catalogs.

---

## Features 🚀

- **Responsive UI**: Clean, mobile‑friendly design using Tailwind CSS.
- **Dynamic Product Catalog**: 350+ products rendered from JSON data across multiple categories (Fashion, Beauty, Accessories, Home, Snap, New).
- **Favorites System**:
   - Heart icon toggle on each product.
   - Favorites count displayed in the header.
   - Persistent state using `localStorage`.
- **Cart System**:
   - Add to Cart button on product cards.
   - Dedicated Cart page with product details, tax, delivery, and total calculation.
   - Cart count displayed in the header.
- **Routing**: Category pages (Fashion, Beauty, New, Snap, Accessories, Home) managed with React Router.
- **Scalability**: Product data stored in JSON files for easy expansion and maintenance.
- **Brand Page**: Each brand (e.g., Muahmuah) has its own dedicated page with description, hero image, and a page‑level heart icon that can toggle favorites for all products in that brand.
   - Individual product hearts toggle independently.
   - Page‑level heart can toggle all products at once.
- **User Dropdown Menu**:
   - Sign in/out functionality with localStorage persistence.
   - Profile, Orders (linked to Cart page), Wishlist (linked to Wishlist page), and Settings options.
- **Search System**:
   - Responsive search bar with icon toggle on small screens.
   - Smooth slide‑down animation for mobile search input.
   - Navigates to `/search?query=...` with filtered product results.
- **Wishlist Badge**:
   - Heart icon in header with red dot indicator when favorites exist.
   - Responsive positioning so the badge stays anchored to the icon.
---

## Tech Stack 🛠️ 

- **Frontend**: React (Hooks, state, Router)
- **Styling**: Tailwind CSS
- **State Management**: React useState + localStorage persistence
- **Data**: JSON product files for categories
- **Icons**: Font Awesome

------------------------

## How to Run ✨

--------------------------------------

## SCREENSHOTS 📸

- [Click here for *musinsa navbar dropdown* screenshot](./src/assets/hero/ss-4.png)
- [Click here for *musinsa home* page screenshot](./src/assets/hero/ss-1.png)
- [Click here for *musinsa wishlist* page screenshot](./src/assets/hero/ss-2.png)
- [Click here for *musinsa cart* page screenshot](./src/assets/hero/ss-3.png)

-------------

## LIVE DEMO 🌐

- [Click here for *musinza* clone live-demo to experience yourself](https://amnaakhtar1213.github.io/Musinza/)

-----------------------------

## Clone the Repository
```bash
git clone https://github.com/Amnaakhtar1213/Musinza.git