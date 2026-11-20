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


## My Contribution

I was responsible for developing the Products page of the E-Commerce Admin Dashboard using React.js.

### Products Page Development

- Created the ProductsPage component to display the products catalogue.
- Developed a separate ProductTable component to organize and display product information.
- Added sample product data for the catalogue.
- Displayed product names, images, SKUs, categories, prices and stock quantities.
- Organized products into a structured and user-friendly table.

## Product Functionality

- Implemented search functionality to find products by name, category or SKU.
- Added category filtering to make product navigation easier.
- Created summary cards showing the total number of products and categories.
- Implemented total inventory stock calculations.
- Calculated the total value of available inventory.
- Added stock availability indicators to show product stock levels.

### Styling and Responsiveness

- Created a separate Products.css file for Products page styling.
- Styled the product catalogue, search bar, summary cards and action buttons.
- Added responsive CSS layouts for different screen sizes.
- Improved the overall appearance and usability of the Products page.

## Collaboration and Version Control

The project was developed collaboratively using Git and GitHub.

### Git Workflow

- Forked the original group repository.
- Cloned the forked repository to the local machine.
- Created a dedicated feature branch called `feature/products-page`.
- Used Git to track and commit changes.
- Pushed changes to the remote GitHub repository.
- Created a pull request targeting the group's `Development` branch for review and integration.

## Challenges and Solutions

### Challenges

- Organizing the Products page into reusable React components.
- Implementing search and category filtering.
- Separating page-specific styling from global CSS.
- Managing changes using Git and GitHub.

### Solutions

- Used React components to organize the application.
- Used React state to manage search and filtering.
- Created a separate CSS file for Products page styling.
- Used feature branches and pull requests to manage collaborative development.

## Future Improvements

- Connect the products catalogue to a backend API.
- Implement complete product creation, editing and deletion.
- Add real-time inventory updates.
- Implement user authentication and authorization.
- Add dashboard analytics and reporting features.

## Acknowledgements

This project was developed as part of a collaborative Software Engineering programme at Moringa School.

Special thanks to my teammates, instructors and everyone who contributed to the development of this project.

