# PokéGen

PokéGen is a tiny Pokédex-flavored Express app that summons random Pokémon, accepts searches by name or ID, and keeps the whole journey styled like a retro screen from a trainer's pocket device.

## Trainer Overview

Think of this as a mini fan zone for anyone who has ever spammed the A button, trusted Professor Oak, or spent way too long arguing about their favorite starter. The app is intentionally simple, but it still has a few little wild encounters hidden in the grass.

## Core Moves

- Wild encounter mode: every visit to `/` can surface a different Pokémon
- Trainer search: enter a name or ID and jump straight to that Pokédex entry
- Emergency escape: failed API requests land on a dedicated error page instead of breaking the session
- Shared team setup: header, footer, and styling stay consistent across views

## Easter Eggs for Trainers

- Pikachu is the default starter energy of the app, because honestly, it had to be.
- The random Pokémon flow behaves like a surprise encounter in tall grass.
- The error page is intentionally less dramatic than Team Rocket, but it still tells you when the target fled.
- The UI is built to feel like a mini Pokédex, not a generic dashboard.
- The search field accepts both names and IDs, which is the closest thing here to a Poké Ball plus shortcut.

## Tech Stack

- Node.js
- Express
- EJS
- Axios
- body-parser

## Project Map

```text
index.js
package.json
README.md
public/
  static/
    main.css
views/
  index.ejs
  error.ejs
  partials/
    header.ejs
    footer.ejs
```

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Install Dependencies

```bash
npm install
```

### Launch the Pokédex

```bash
nodemon index.js
```

If you are not using `nodemon`, you can start it with:

```bash
node index.js
```

Open the app here:

```text
http://localhost:3000
```

## How It Works

- `GET /` rolls a random Pokémon or resolves the last searched Pokémon
- `POST /search` stores the trainer's query and redirects back to the home page
- If the PokéAPI request fails, the app renders `views/error.ejs`

## Developer Section

### Routes

- `GET /` renders the main PokéGen screen
- `POST /search` accepts form submissions from the search input

### Data Flow

1. The user loads the homepage.
2. The server requests a Pokémon from the PokéAPI.
3. The response is passed into `index.ejs`.
4. If the lookup fails, `error.ejs` is rendered instead.

### Useful Files

- [index.js](index.js) contains the Express server and route logic.
- [views/index.ejs](views/index.ejs) controls the main Pokédex display.
- [views/error.ejs](views/error.ejs) handles failed lookups.
- [public/static/main.css](public/static/main.css) defines the visual theme.

### Developer Notes

- The app uses public PokéAPI endpoints directly, so network failures will surface as request errors.
- Search is intentionally lightweight and routed through the same homepage experience.
- The layout is shared through partials, which keeps the UI consistent without duplicating markup.

## Credits

- **PokéAPI**: the app's Pokémon data comes from [PokéAPI](https://pokeapi.co/).
- **Built by Mridul Jha**: a small Pokédex tribute from Mridul Jha, with love for trainers everywhere.

## Flavor Text

This project is meant to feel like a nostalgia hit from the Pokédex era: bright, playful, and slightly chaotic in the best way. If a Pokémon appears, great. If not, the app still behaves like a trainer who knows when to regroup and try again.

## License

No license has been specified yet.