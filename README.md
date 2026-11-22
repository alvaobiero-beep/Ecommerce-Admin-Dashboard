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

glish Dictionary

A simple web-based English dictionary built with HTML, CSS, and vanilla JavaScript. Type a word, press Enter, and get its meaning, an example sentence, pronunciation, and synonyms.

## Features

- Search any English word and get its definition
- Part of speech and phonetic spelling
- Example sentence (searches all definitions for the first available example)
- Pronunciation audio, with an automatic fallback to the browser's built-in voice when no recording is available
- Clickable synonyms that run a new search
- Clear button (✕) to reset the search
- Friendly messages for loading, "word not found", and network errors

## Demo

1. Type a word such as `happy` or `hello` into the search box.
2. Press **Enter**.
3. Click the speaker icon to hear the pronunciation.
4. Click any synonym to look it up.

## Project Structure

```
dictionary/
├── index.html   # Page layout
├── style.css    # Styling, hover and playing effects
├── script.js    # Search, API handling, audio, synonyms
└── README.md    # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, or Safari)
- An internet connection (the app fetches data from an API and loads icons from a CDN)

### Run Locally

1. Download or clone this project into a folder.
2. Make sure `index.html`, `style.css`, and `script.js` are all in the same folder.
3. Open `index.html` in your browser.

For best results, use a local server such as the **Live Server** extension in VS Code. Some browsers restrict audio and network requests on files opened directly from disk.

## How It Works

1. The user types a word and presses Enter.
2. `script.js` sends a request to the Free Dictionary API:
   ```
   https://api.dictionaryapi.dev/api/v2/entries/en/<word>
   ```
3. The JSON response is parsed, and the page is filled in with:
   - The word, part of speech, and phonetic text
   - The first definition
   - The first example found across all definitions
   - Up to five synonyms
   - A list of available audio recordings
4. When the speaker icon is clicked, the app tries each audio recording in turn. If none play, it uses the browser's speech synthesis (`SpeechSynthesisUtterance`) instead.

## Technologies Used

- **HTML5** for structure
- **CSS3** for layout, hover effects, and the pulsing "playing" animation
- **JavaScript (ES6+)** using `fetch`, `async/await`, and the Web Speech API
- [Free Dictionary API](https://dictionaryapi.dev/) for word data
- [Font Awesome](https://fontawesome.com/) and [Material Icons](https://fonts.google.com/icons) for icons

## Troubleshooting

| Problem | What to check |
|---|---|
| Page has no styling | Make sure the stylesheet link is `style.css` and the file name matches exactly |
| Nothing happens when searching | Open the browser console (F12) and look for red errors; confirm `script.js` is linked at the bottom of `index.html` |
| Speaker icon is silent | Check that your device and tab are not muted; open the console to see whether API audio failed or the browser voice took over |
| "Can't find the meaning" message | The word may not exist in the API, so try a common word like `happy` |
| Old code still running | Hard refresh with Ctrl+Shift+R (Cmd+Shift+R on Mac) |
| No example shown | Some words have no example in the API, so "No example available." is expected |

## Known Limitations

- Only English words are supported.
- The app shows the first definition of the first meaning, not every meaning.
- Not every word has an example sentence, audio recording, or synonyms in the API.
- The Free Dictionary API is a free public service, so it may be slow or unavailable at times.

## Possible Improvements

- Show all meanings and parts of speech for a word
- Add a search history
- Add a dark mode
- Support other languages (the API offers several)
- Add a debounce for search-as-you-type

## Credits

- Word data provided by the [Free Dictionary API](https://dictionaryapi.dev/)
- Icons from Font Awesome and Google Material Icons

## License

This project is for learning purposes. Feel free to use and modify it.