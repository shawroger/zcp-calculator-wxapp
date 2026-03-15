# Repository Guidelines

## Project Structure & Module Organization
This repository is a Uni-app WeChat mini-program. Core app entry files are `main.js`, `App.vue`, `pages.json`, and `manifest.json`. Pages live under `pages/`, with calculator screens in `pages/index/` and shared fragments in `pages/index/components/`. Reusable UI building blocks are in `components/`. Calculation logic belongs in `utils/`, and shared state lives in `store/index.js`. Keep images and tab icons in `static/`. Treat `uni_modules/` as vendored dependencies and avoid editing it unless a module-level fix is required.

## Build, Test, and Development Commands
This project does not use `package.json`; local development is handled through Uni-app tooling.

- Open the project in HBuilderX and run it in WeChat Developer Tools for local debugging.
- Use the HBuilderX mini-program publish flow to build the WeChat release package.
- Run `git status` before packaging or committing to confirm the working tree.
- Run `git log --oneline -5` to review the repository's recent commit style.

`deploy.fs` includes a simple `git add`, `git commit`, and `git push` flow, but review changes manually before using it.

## Coding Style & Naming Conventions
Follow the existing Vue 2 / Uni-app conventions: double quotes, semicolons, and 2-space indentation in `.js` files. Vue single-file components currently mix tabs in template and style sections; match the surrounding file instead of reformatting unrelated lines. Prefer kebab-case for `.vue` filenames, camelCase for variables and methods, and keep calculator rules in `utils/` rather than embedding them in page components.

## Testing Guidelines
There is no automated test suite yet. Test changes manually in HBuilderX and WeChat Developer Tools, covering calculator inputs, edge cases, page navigation, and tab bar behavior. When adding new calculation logic, keep functions small and pure so they can be unit tested later.

## Commit & Pull Request Guidelines
Recent commits use short, task-focused Chinese summaries. Keep commit messages brief, imperative, and limited to one feature or fix. Pull requests should include a short description, affected pages or utilities, manual test notes, linked issue or task when available, and screenshots for UI changes.

## Configuration Notes
Mini-program configuration lives in `manifest.json`, and routes plus tab settings live in `pages.json`. Do not commit secrets, generated build artifacts, or casual changes to app IDs.
