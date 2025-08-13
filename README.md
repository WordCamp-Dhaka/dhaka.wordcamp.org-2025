# WordCamp Dhaka 2025 Remote CSS

This repo contains the SCSS source for the WordCamp Dhaka 2025 site, compiled via Vite.


## How to install & connect
   ```bash
   git clone https://github.com/WordCamp-Dhaka/dhaka.wordcamp.org-2025.git
   cd dhaka.wordcamp.org-2025
   npm install
   npm run watch
   ```

## Workflow
1. Make SCSS changes in `src/style.scss`.
2. Commit + push to `main`.
4. WordCamp.org pulls the CSS from the `main` branch `dist/style.css` via Remote CSS.