document.addEventListener("DOMContentLoaded", () => {
  const simulation = new RapidMindSimulation(state => RapidMindUI.render(state));
  simulation.startClock();
  RapidMindUI.render(simulation);
});
