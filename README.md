# JEE Prep Platform

A web platform inspired by https://jeefocus.com/app/#page=home with additional features for Olympiad prep, lecture notes, mind maps, and an admin-driven question bank.

## Tech (initial)
- To be finalized after project rules. Starts as a simple static scaffold in `apps/web` and documentation in `docs/`.

## High-level features
- Prepare & Practice: JEE Mains, JEE Advanced, Olympiad
- Olympiad: tests and lecture notes
- Lecture Notes: upload/view PDFs chapter-wise
- Mind Map: upload/view mind map PDFs
- Admin: upload/manage question banks (chapter-wise, difficulty-wise, exam-wise, type-wise) as PDF/image

## Local structure
- apps/web: basic web skeleton
- docs: documentation and specifications
- storage: placeholders for uploaded content (lecture-notes, mind-maps, questions)

## Getting started
- Option A (legacy static): Open `apps/web/index.html` in a browser (temporary scaffold)
- Option B (Next.js app):
  1. `cd apps/web`
  2. `npm install`
  3. `npm run dev` and open http://localhost:3000
- See `docs/requirements.md` for detailed requirements
