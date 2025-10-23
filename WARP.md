# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- This repo is an initial scaffold for a JEE/Olympiad prep platform. See README.md for the high-level features and docs/requirements.md for detailed requirements.
- Current state: a static HTML prototype under apps/web with no build, lint, or test tooling configured yet.

Common commands
- Preview the static UI
  - Open apps/web/index.html directly in a browser (per README.md), or run a simple static server and visit http://localhost:8000/index.html:
    - Python: python -m http.server 8000 --directory apps/web
    - Node.js: npx serve apps/web -l 8000
- Build: none (no bundler configured)
- Lint: none configured
- Tests: none configured

High-level architecture and structure
- apps/web: Single static HTML file (index.html) that sketches the primary sections:
  - Home, Prepare & Practice (tracks: JEE Mains/Advanced/Olympiad), Olympiad, Lecture Notes, Mind Map, Admin
  - References placeholder storage paths: storage/lecture-notes/, storage/mind-maps/, storage/questions/
  - No framework, routing, build pipeline, or client-side logic yet
- docs: Requirements specification guiding the product scope and domain taxonomy (chapters/topics, question types, roles)
- storage: Placeholder area for uploads until a storage backend is chosen (no code integration yet)

Key references
- README.md: project intent, features, local structure, and quick-start
- docs/requirements.md: domain requirements and taxonomy to inform future implementation details

Notes for future tooling
- When adding a framework/tooling (e.g., React/Vite/Next, ESLint/Prettier, Jest/Vitest, backend services), update this file with:
  - Dev server and build commands
  - Lint/typecheck commands
  - Test commands (including how to run a single test)
