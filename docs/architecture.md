# RapidMind AI — Frontend Architecture

## Overview

RapidMind AI uses a lightweight browser architecture with no frontend framework.

### Layers

- `index.html` — application shell and script loading order.
- `css/` — visual system, responsive rules and animations.
- `js/data.js` — scenario configuration and domain data.
- `js/simulation.js` — application state and crisis-analysis simulation.
- `js/ui.js` — DOM rendering and event binding.
- `js/utils.js` — reusable browser utilities.
- `js/app.js` — application bootstrap.

## Runtime Flow

1. The browser loads the application shell.
2. Scenario data is loaded into memory.
3. The simulation controller initializes application state.
4. The UI renders the selected scenario.
5. User actions update simulation state.
6. The UI re-renders the affected application state.

This separation keeps scenario data, business logic and presentation code independent enough to maintain the prototype without a framework.
