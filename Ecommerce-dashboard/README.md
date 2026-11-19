# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# E-commerce Admin Dashboard

## Project Overview
The E-commerce Admin Dashboard is a React-based web application designed to help administraters manage an online store efficiently.It provides an interface for managing products, monitoring inventory and organizing essential store information.

## Features

### Products Management
Display a catalogue of available products.

View product names, images, SKUs, categories, prices and stock quantities.

Search for products by name, category or SKU.

Filter products by category.

View total products and product categories.Monitor total inventory stock.

Calculate the total inventory value.

Display stock availability indicators.

Responsive product catalogue layout.

### Dashboard

Organized administrative interface.

Navigation between dashboard sections.

Clean and user-friendly layout.

### Technologies Used

React.js – Building the user interface.

JavaScript – Application functionality and interactivity.

CSS3 – Styling and responsive design.
Vite – Development server and build tool.

Git – Version control.

GitHub – Collaborative development and code management.

### Project StructureEcommerce-Admin-Dashboard/
│
├── Ecommerce-dashboard/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProductTable.jsx
│   │   ├── pages/
│   │   │   └── ProductsPage.jsx
│   │   ├── Products.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── index.html
│
├── README.md
└── .gitignore

## Getting started
### Prerequisites

Make sure you have the following installed:
Node.js
npm
Git
Visual Studio Code

## Prerequisites

## Getting started

Installation

Clone the repository:

git clone <repository-url>

Navigate into the React application folder:

cd Ecommerce-Admin-Dashboard/Ecommerce-dashboard

Install the dependencies:

npm install

Start the development server:

npm run dev

Open the local URL provided by Vite in your browser.



