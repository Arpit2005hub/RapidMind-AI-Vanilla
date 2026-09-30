# RapidMind AI

RapidMind AI is a crisis intelligence and emergency response simulation platform designed to support faster incident understanding, risk assessment, and emergency response coordination.

The project provides a dashboard where different emergency scenarios can be simulated and analyzed through structured incident data, risk indicators, response directives, tactical routing, and vulnerable-group assistance.

## Features

- Crisis scenario simulation
- Incident classification
- Emergency severity assessment
- Predictive risk indicators
- Tactical route visualization
- Emergency response coordination
- Vulnerable-group identification
- Real-time response timer
- AI-style incident reasoning
- Responsive dashboard interface

## Supported Scenarios

- Fire Emergency
- Medical Emergency
- High-Risk Security Threat
- Crowd / Stampede Risk
- Gas Leak

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

The frontend does not require React, TypeScript, JSX, Tailwind CSS, or a frontend build framework.

## Project Structure

RapidMind-AI-Vanilla/

├── index.html

├── README.md

├── .gitignore

│

├── css/

│   ├── style.css

│   ├── responsive.css

│   └── animations.css

│

├── js/

│   ├── app.js

│   ├── data.js

│   ├── simulation.js

│   ├── ui.js

│   └── utils.js

│

└── docs/

    └── architecture.md

## Architecture

The project follows a simple modular frontend architecture.

### Data Layer
`js/data.js`

Contains the emergency scenarios, incident information, risks, response teams, routes, and instructions.

### Simulation Layer
`js/simulation.js`

Handles application state, analysis progress, response timing, scenario selection, and simulation workflow.

### UI Layer
`js/ui.js`

Responsible for generating and updating the dashboard interface based on the current application state.

### Utility Layer
`js/utils.js`

Contains reusable helper functions such as time formatting, elapsed-time calculation, and HTML escaping.

### Application Entry
`js/app.js`

Initializes the application and connects the simulation with the user interface.

## How to Run

### Option 1 — Direct Browser

Open:

`index.html`

in any modern browser.

### Option 2 — VS Code Live Server

1. Open the project folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## How It Works

1. Select an emergency scenario.
2. Start the crisis analysis.
3. The simulation processes the incident data.
4. The dashboard displays:
   - Incident classification
   - Severity
   - Response teams
   - Safe route
   - Predictive risks
   - Tactical map
   - Emergency directives
   - Vulnerable groups
   - System reasoning
5. The response timer tracks the incident workflow.

## Project Status

Current version: Frontend prototype / simulation build.

The current implementation uses predefined scenario data to demonstrate the crisis-response workflow. It is designed so that a future backend, real-time sensor system, GIS layer, or AI service can be integrated without restructuring the entire frontend.

## Future Scope

- Real-time sensor integration
- GIS-based live maps
- Weather and environmental data integration
- AI/ML-based risk prediction
- Emergency service API integration
- Real-time location tracking
- Backend incident management
- Role-based dashboards for emergency teams

## License

This project is intended for educational, prototype, and demonstration purposes.
