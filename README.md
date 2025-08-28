# 🛍️ EcommerceApp

A simple e-commerce web application built with **React**, **React Router DOM**, **Axios**, and **TailwindCSS**.  
This app fetches product data from [FakeStoreAPI](https://fakestoreapi.com/) and provides a smooth shopping experience with features like product listing, product details, and cart management.

---

## 🚀 Features

- 📦 **Product Listing** – Fetch products dynamically from [FakeStoreAPI](https://fakestoreapi.com/)  
- 🔎 **Product Details Page** – View complete product information  
- 🛒 **Shopping Cart** – Add/remove products and view cart summary  
- 🔄 **Dynamic Routing** – Powered by **React Router DOM**  
- ⚡ **API Handling** – Using **Axios** for fetching and managing data  
- 🎨 **Modern UI** – Styled with **TailwindCSS**  
- 📱 **Responsive Design** – Mobile-first approach  

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/)  
- **Routing:** [React Router DOM](https://reactrouter.com/)  
- **API Handling:** [Axios](https://axios-http.com/)  
- **Styling:** [TailwindCSS](https://tailwindcss.com/)  
- **Fake API:** [FakeStoreAPI](https://fakestoreapi.com/)

---

## 📂 Project Structure

```bash
fasionforward/
│── public/              # Static assets
│── src/
│   ├── components/      # Reusable components (Navbar, ProductCard, etc.)
│   ├── pages/           # Page components (Home, ProductDetails, Cart)
│   ├── hooks/           # Custom hooks (e.g., useFetch)
│   ├── App.jsx          # Root component with Router
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
│── package.json
│── tailwind.config.js
│── README.md
