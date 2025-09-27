# React Product Card Component

## Overview
This project demonstrates the use of React components and JSX to create a product card display with conditional rendering.

## Instructions

### Setup
1. Create a project using create-react-app
```bash
npx create-react-app react-product-card-component
cd react-product-card-component
```

2. Install react-bootstrap
```bash
npm install react-bootstrap bootstrap
```

### Project Structure
```
src/
├── App.js
├── product.js
├── components/
│   ├── Name.js
│   ├── Price.js
│   ├── Description.js
│   └── Image.js
└── index.js
```

### Implementation Steps
1. Create `App.js` as the root component
2. Create `product.js` with a JSON object containing product information
3. Create four components (`Name.js`, `Price.js`, `Description.js`, `Image.js`)
4. Export all components for use in the root component
5. Import the JSON object into all newly created components
6. Create a card using react-bootstrap in `App.js`
7. Display conditional greeting message
8. Display conditional image based on name availability
9. Apply creative styling

### Features
- ✅ Product card with name, price, description, and image
- ✅ Conditional greeting message
- ✅ Conditional image display
- ✅ React Bootstrap styling
- ✅ Modular component structure

### Running the Project
```bash
npm start
```

The application will run on `http://localhost:3000`
