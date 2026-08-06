# Triple Crown Tavern

A single-page restaurant site for a baseball-themed bar and grill, built with vanilla JavaScript and bundled with webpack — every page is generated in the DOM, no framework and no hand-written page markup.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

**Prerequisites:** [Node.js](https://nodejs.org/) 18 or newer (webpack 5 reads `import.meta.dirname`, which needs Node 20+ to build).

```bash
git clone git@github.com:krosengr4/triple-crown-tavern-resturaunt.git
cd triple-crown-tavern-resturaunt
npm install
```

## Quick Start

Start the development server with hot reloading:

```bash
npx webpack serve --open
```

The site opens at `http://localhost:8080`. Edits to any file in `src/` rebuild and refresh the page automatically.

To produce a static build in `dist/`:

```bash
npx webpack
```

Open `dist/index.html` in a browser to view the built output.

## Features

- **Three pages, one document**: Home, Menu, and Contact are swapped into a single `#content` div — no page reloads and no router.
- **Fully generated markup**: `template.html` ships only a nav bar and an empty container. Each page module builds its own DOM tree with `document.createElement`.
- **Data-driven content**: Hours, menu items, and staff contacts live in arrays at the top of their modules, so updating the site means editing data, not markup.
- **Baseball theming throughout**: Menu items are named after real Triple Crown winners — Ted Williams, Mickey Mantle, Miguel Cabrera, Frank Robinson, and Carl Yastrzemski.
- **Retro tavern styling**: A leather-brown and outfield-green palette with monospace Nerd Font typography and heavy beveled card borders.

## Usage

### How Page Loading Works

`src/index.js` is the only entry point. It imports the stylesheet, wires each nav button to a loader function, and calls `loadHome()` so the home page renders on first load:

```javascript
import "./style.css";
import { loadHomepage } from "./homepage.js";

const contentDiv = document.querySelector("#content");

function loadHome() {
    contentDiv.replaceChildren(loadHomepage());
}

document.querySelector("#homeButton").addEventListener("click", loadHome);

loadHome();
```

Each page module exports one `load*` function that returns a fully built `<div>`. `replaceChildren()` clears the previous page and mounts the new one in a single call.

### Editing Content

**Hours** — edit the `HOURS` array in `src/homepage.js`:

```javascript
const HOURS = [
    { day: "Sunday", open: "8am - 8pm" },
    { day: "Monday", open: "6am - 6pm" },
];
```

**Food items** — edit `FOOD_ITEMS` in `src/menupage.js`. Each entry needs a `title` and an `about`:

```javascript
const FOOD_ITEMS = [
    {
        title: "Miggy's Nachos",
        about: "A nod to MLB's most recent triple crown winner in 2012, Miguel Cabrera...",
    },
];
```

**Drink items** — edit `DRINK_ITEMS` in `src/menupage.js`. Drinks use `concept` and `ingredients` instead of `about`:

```javascript
const DRINK_ITEMS = [
    {
        title: 'The "Grand Slam" Pitcher',
        concept: "A refreshingly upgraded beer-margarita designed for sharing.",
        ingredients: "Ingredients: Tequila Blanco, triple sec, fresh lime juice...",
    },
];
```

**Staff contacts** — edit `CONTACTS` in `src/contactpage.js`. Cards alternate between the left and right columns by array index, so add entries in pairs to keep the grid balanced:

```javascript
const CONTACTS = [
    { name: "Babe Ruth", title: "Founder", phone: "465-003-2727", email: "greatOne03@mail.com" },
];
```

### Adding a New Page

1. Create `src/newpage.js` exporting a `loadNewpage()` function that returns a `<div>`.
2. Add a `<button>` to the nav in `src/template.html` with a unique `id`.
3. In `src/index.js`, import the loader, add a handler that calls `contentDiv.replaceChildren(loadNewpage())`, and attach it to the button.

### Optional: Add npm Scripts

`package.json` currently has no build scripts. Add these to skip the `npx` prefix:

```json
"scripts": {
    "start": "webpack serve --open",
    "build": "webpack --mode production"
}
```

Then run `npm start` or `npm run build`.

## Project Structure

```
src/
├── index.js         Entry point — nav wiring and page swapping
├── template.html    Nav bar and empty #content container
├── homepage.js      Title, About Us, and Hours
├── menupage.js      Food and Drink cards
├── contactpage.js   Two-column staff contact cards
└── style.css        All styling
webpack.config.js    Dev-mode build, HtmlWebpackPlugin, CSS loaders
```

The build outputs `dist/main.js` plus a generated `index.html`. Both `dist/` and `node_modules/` are gitignored.

## Contributing

**Please contribute to this project:**

- [Submit Bugs and Request Features you'd like to see Implemented](https://github.com/krosengr4/triple-crown-tavern-resturaunt/issues)

## Questions

- [Link to my GitHub Profile](https://github.com/krosengr4)

- For any additional questions, email me at rosenkev4@gmail.com
