---
title: "#ReactivaMadrid Hackathon"
summary: "2nd place at a Madrid City Hall hackathon — crowd flow modelling tool to safely reopen public spaces during COVID-19."
stack: ["Python", "ArcGIS", "ESRI", "GeoPandas"]
tags: ["Hackathon", "Geospatial", "Public Safety", "Data Visualization"]
featured: false
confidential: false
year: 2020
---

## Context

In May 2020, as Spain began lifting COVID-19 lockdown restrictions, Madrid City Hall ran the #ReactivaMadrid hackathon — challenging participants to propose data-driven solutions for safely reopening the city's public spaces. The challenge: how do you allow people to return to parks, markets, and pedestrian areas without creating dangerous crowd concentrations?

## Role

Team member and technical lead for the data pipeline and geospatial analysis. The team was multidisciplinary — I handled the Python modelling stack while my teammate contributed urban planning domain knowledge and the final presentation.

## Approach

We built a crowd flow modelling tool that combined geospatial data with mobility signals:

- **ArcGIS** for spatial data ingestion and visualisation of Madrid's public space network.
- **GeoPandas** for polygon-level analysis of crowd capacity estimates per zone.
- **Mobility modelling**: used publicly available foot traffic data patterns to project crowd density at different times of day, with configurable capacity caps per zone.
- **Risk scoring**: each zone received a risk score based on crowd density vs. available surface area, with a simple red/amber/green output for city managers.

The project was completed in 48 hours with a team of two.

## Outcome

- 2nd place out of all participating teams, in one of the three disciplines (Economy).
- Solution presented to Madrid City Hall representatives and urban planning technical staff.
- Demonstrated that open geospatial data combined with simple modelling could provide actionable crowd safety guidance with minimal infrastructure.
