---
title: "PlanningManager"
summary: "Python OOP library that replaced a set of critical VBA macros — now maintained and extended by two other engineers."
stack: ["Python", "FastAPI", "MySQL", "pandas", "openpyxl"]
tags: ["Automation", "Refactoring", "Python", "Internal Tooling"]
featured: false
confidential: true
year: 2022
---

## Context

The planning department relied heavily on a suite of VBA macros embedded in Excel workbooks to process and format grid planning data. The macros were functional but impossible to test, difficult to debug, and a single point of failure — only two people understood them, and modifications required working inside Excel's VBA editor with no version control.

## Role

Solo developer. Interviewed the macro authors to document the implicit business logic, then rebuilt the functionality in Python with a clean object model.

## Approach

The core design decision was to model the domain — not just replicate the macros:

- Defined a set of Python classes representing planning entities (projects, constraints, planning horizons) rather than translating the imperative macro code line by line.
- Used `openpyxl` for direct Excel file manipulation and `pandas` for data transformation, preserving compatibility with existing Excel-based workflows.
- Added a simple CLI interface so analysts could trigger runs from the command line without touching the code.
- Wrote inline documentation and a test suite covering the main data transformation paths.

The result was a library rather than a script — importable, testable, and extensible.

## Outcome

- All VBA macros replaced without any loss of functionality.
- Two other engineers joined the codebase within the first year and have since added new features.
- Bug fix cycle reduced from "find the macro author" to a standard pull request workflow.
- The library now serves as a foundation for other automation work in the department.

## What I Learned

The real work in a refactoring like this isn't the code — it's extracting the implicit business logic from people who've internalised it. The interviews were harder and more valuable than the implementation.
