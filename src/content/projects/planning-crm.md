---
title: "PlanningCRM"
summary: "Full-stack CRM built solo for Red Eléctrica's planning department — 20 users, production since 2025."
stack: ["SvelteKit", "TypeScript", "MySQL", "Python", "Docker"]
tags: ["Full-Stack", "Product Ownership", "Internal Tooling"]
featured: true
confidential: true
year: 2025
---

## Context

Red Eléctrica's planning department tracked hundreds of grid infrastructure projects using a patchwork of Excel files, email chains, and SharePoint folders. There was no unified view of project status, key contacts, or deadlines. Every department handoff risked data loss or miscommunication.

## Role

Solo developer and de-facto product owner. Gathered requirements directly from department leads, designed the data model, built the entire stack, and drove adoption across the team of 20.

## Approach

Rather than customising a commercial CRM (which would have required IT procurement cycles of 6+ months), I built a lightweight internal tool tailored exactly to planning workflows:

- **Frontend & API**: SvelteKit (TypeScript) — handles the web interface and server-side API routes. Fast, no virtual DOM overhead, excellent developer experience for a solo builder.
- **Data processing**: Python — document ingestion, parsing, and transformation of submitted files from external stakeholders.
- **Database**: MySQL — relational model for requests, stakeholders, regions, and statuses.
- **Auth**: Session-based authentication scoped to internal users, integrated with Active Directory.
- **Deployment**: Containerised with Docker, deployed on an internal server within the corporate network.

The data model centred on projects, stakeholders, and interaction logs — simple enough to be understood by non-technical users, powerful enough to replace 12 separate Excel trackers.

## Outcome

- Adopted by the full planning department (20 users) and still in active production use.
- Eliminated the need for shared Excel files, reducing version conflict incidents to zero.
- New project onboarding time dropped from ~3 hours to under 20 minutes.
- The tool became the department's single source of truth for project tracking.

## What I Learned

Owning both product and engineering responsibility forces prioritisation clarity. The most impactful features weren't the most technically interesting — they were the ones that eliminated the most friction from daily workflows.
