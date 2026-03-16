---
title: "IoSN Builder"
summary: "ETL pipeline delivering standardised network models to 40 European TSOs — replacing a brittle manual process with a reproducible, auditable workflow."
stack: ["Python", "DuckDB", "PLEXOS API", "Pandas", "Docker"]
tags: ["Data Engineering", "ETL", "Energy Infrastructure", "European Grid"]
featured: true
confidential: true
year: 2026
---

## Context

Red Eléctrica participates in European grid coordination, which requires sharing standardised network models with Transmission System Operators (TSOs) across 40 countries. The existing process relied on a fragile manual pipeline: analysts ran scripts in the wrong order, intermediate files accumulated, and the process broke unpredictably — causing delays in submissions that had hard regulatory deadlines.

## Role

Lead developer within a small team. Responsible for the pipeline architecture, the DuckDB integration, and the PLEXOS API connector. Collaborated with domain experts to validate intermediate outputs against expected network topology.

## Approach

The pipeline needed to be **reproducible**, **auditable**, and **fast** — three constraints that pointed toward a data-engineering approach rather than a scripting one:

- **DuckDB** as the processing engine: columnar, embedded, no infrastructure overhead, and capable of running SQL analytics on large network datasets in-process.
- **PLEXOS API** integration: automated extraction of the power system model, eliminating the manual export step that was the most common failure point.
- **Explicit orchestration**: each stage wrote its output to a defined location before the next stage read it. Any failure produced a clear trace rather than a silent corruption.
- **Docker**: containerised environment ensured the pipeline ran identically in development and production, eliminating "it works on my machine" issues.

## Outcome

- Pipeline now successfully delivers network models to all 40 TSOs on schedule.
- Submission process reduced from a multi-day manual effort to a single command run.
- Zero missed regulatory deadlines since deployment.
- Now maintained by the team with clear documentation and test data.

## What I Learned

In data pipelines, explicitness beats cleverness. Every implicit assumption in the old process became a potential failure point. Making data flow visible and each step independently inspectable made debugging trivial compared to the old approach.
