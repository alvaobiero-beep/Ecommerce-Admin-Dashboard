# E-commerce Admin Dashboard

## Project Overview

The E-commerce Admin Dashboard is a React-based web application designed to help administrators manage an online store efficiently. It provides an interface for managing products, monitoring inventory and organizing essential store information.

This project was developed collaboratively using Git and GitHub as part of a group software engineering project.

## Features

### Products Management
- Display a catalogue of available products.
- View product names, images, SKUs, categories, prices and stock quantities.
- Search for products by name, category or SKU.
- Filter products by category.
- View total products and product categories.
- Monitor total inventory stock.
- Calculate the total inventory value.
- Display stock availability indicators.
- Responsive product catalogue layout.

### Dashboard
- Organized administrative interface.
- Navigation between dashboard sections.
- Clean and user-friendly layout.

## Technologies Used

- **React.js** – Building the user interface.
- **JavaScript** – Application functionality and interactivity.
- **CSS3** – Styling and responsive design.
- **HTML5** – Application structure.
- **Vite** – Development server and build tool.
- **Git** – Version control.
- **GitHub** – Collaborative development and code management.

## Project Structure

```text
Ecommerce-Admin-Dashboard/
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
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git
- Visual Studio Code

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate into the React application folder:

```bash
cd Ecommerce-Admin-Dashboard/Ecommerce-dashboard
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite in your browser.

## My Contribution

I was responsible for developing the Products page.

My contributions included:

- Creating the ProductsPage component.
- Developing the ProductTable component.
- Displaying product information in a structured catalogue.
- Implementing product search functionality.
- Adding category filtering.
- Creating inventory summary cards.
- Implementing stock availability indicators.
- Calculating inventory totals and inventory value.
- Designing the Products page using a separate CSS file.
- Making the page responsive across different screen sizes.

## Collaboration and Version Control

The project uses Git and GitHub for collaborative development.

Each team member works on a separate feature branch and submits changes through pull requests for review and integration into the shared Development branch.

## Future Improvements

- Connect the products catalogue to a backend API.
- Implement complete product creation, editing and deletion.
- Add user authentication and authorization.
- Implement real-time inventory updates.
- Add dashboard analytics and reports.

## Acknowledgements

Developed as a collaborative software engineering project at Moringa School.

