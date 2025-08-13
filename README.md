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
3. GitHub Actions will:
    - Build CSS.
    - Push it to the `build` branch.
4. WordCamp.org pulls the CSS from the `build` branch via Remote CSS.

## Notes
- The `src/style.scss` file is the main entry point for your styles.
- The `build` branch is automatically updated with compiled CSS.
- Ensure you have the necessary permissions to push to the `main` branch.
- For any issues, check the GitHub Actions logs for troubleshooting.
