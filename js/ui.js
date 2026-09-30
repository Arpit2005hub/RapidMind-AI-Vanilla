window.RapidMindUI = {
  theme(type) {
    const colors = {
      Fire: ["#f97316", "#ef4444"],
      "Medical Emergency": ["#10b981", "#14b8a6"],
      "High-Risk Security Threat": ["#ef4444", "#a855f7"],
      "Stampede Risk": ["#f59e0b", "#f97316"],
      "Gas Leak": ["#84cc16", "#22c55e"]
    };
    const [primary, secondary] = colors[type] || ["#3b82f6", "#1d4ed8"];
    document.documentElement.style.setProperty("--primary", primary);
    document.documentElement.style.setProperty("--secondary", secondary);
    document.documentElement.style.setProperty("--glow", `${primary}55`);
    document.documentElement.style.setProperty("--border", `${primary}33`);
    document.documentElement.style.setProperty("--bg-accent", `${primary}14`);
  },

  riskCard(risk) {
    const [name, trend, level] = risk;
    const count = level === "High" ? 8 : level === "Medium" ? 5 : 2;
    const bars = Array.from({ length: 10 }, (_, i) => `<i class="${i < count ? "on" : ""}"></i>`).join("");
    return `<div class="risk">
      <div class="risk-top"><span class="risk-name">${name}</span><span class="level ${level.toLowerCase()}">${level}</span></div>
      <div class="trend">${trend} Trend</div><div class="bars">${bars}</div>
    </div>`;
  },

  mainContent(d) {
    return `<main class="grid">
      <section class="panel">
        <div class="panel-title"><span>Incident Analysis</span><small>${d.location}</small></div>
        <div class="analysis">
          <div class="metric"><label>Crisis Type</label><strong>${d.type}</strong></div>
          <div class="metric"><label>Severity</label><strong class="severity">${d.severity}</strong></div>
          <div class="metric"><label>Confidence</label><strong>98%</strong></div>
          <div class="metric"><label>Primary Response</label><strong>${d.primary}</strong></div>
          <div class="metric"><label>Safe Route</label><strong>${d.route}</strong></div>
          <div class="metric"><label>Support</label><strong>${d.support.join(", ")}</strong></div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-title"><span>Predictive Risk Engine</span><small>60s Forecast</small></div>
        <div class="risks">${d.risks.map(this.riskCard).join("")}</div>
      </section>

      <section class="panel">
        <div class="panel-title"><span>Tactical Map</span><small>LIVE TELEMETRY</small></div>
        <div class="map">
          <div class="danger-zone">⚠ HAZARD<br>ZONE</div>
          <div class="route"></div>
          <div class="map-tag tag-a">SECTOR A</div>
          <div class="map-tag tag-b">SAFE EXIT</div>
          <div class="map-tag tag-c">RESCUE UNIT</div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-title"><span>Real-Time AI Strategic Directives</span><small>CALM MODE ACTIVE</small></div>
        <div class="directive-list">${d.instructions.map((x, i) =>
          `<div class="directive"><div class="num">${i + 1}</div><p>${x}</p></div>`).join("")}</div>
      </section>

      <section class="panel">
        <div class="panel-title"><span>Rescue Assistance Panel</span><small>ACTIVE SEARCH ZONES</small></div>
        <div class="groups">${d.groups.map((g, i) =>
          `<div class="group"><div><b>${g[0]} (${g[1]})</b><small>Location: Sector ${String.fromCharCode(65 + i)}${i + 1}</small></div><span class="badge">${g[2]}</span></div>`).join("")}</div>
        <div class="hint">🛡 ACTION HINT: PRIORITIZE VULNERABLE GROUP EVACUATION</div>
      </section>

      <section class="panel">
        <div class="panel-title"><span>Neural Protocol Reasoning</span><small>AI EXPLANATION</small></div>
        <div class="reasoning">${d.reasoning}<br><br>System continuously monitors sensor telemetry, route safety, crowd movement and predicted secondary risks.</div>
      </section>
    </main>`;
  },

  render(simulation) {
    const d = simulation.analysis;
    const scenario = window.RAPIDMIND_DATA[simulation.activeKey];
    this.theme(d ? d.type : scenario.type);

    document.getElementById("app").innerHTML = `
      <div class="app">
        <header class="header">
          <div class="brand">
            <div class="brand-icon">⚡</div>
            <div>
              <h1>RapidMind <span>AI</span></h1>
              <div class="sub">ADAPTIVE CRISIS INTELLIGENCE // V6.0 <span class="badge">SIMULATION MODE</span></div>
            </div>
          </div>
          <div class="clockbox">
            <div><label>Incident Detect</label><strong>${window.RapidMindUtils.formatTime(simulation.detectedAt)}</strong></div>
            <div><label>Response Time</label><strong>${window.RapidMindUtils.formatTime(simulation.respondedAt)}</strong></div>
            <div><label>Elapsed</label><strong>${window.RapidMindUtils.formatElapsed(simulation.elapsed)}</strong></div>
          </div>
        </header>

        <div class="toolbar">
          <section class="panel">
            <div class="section-label">Crisis Scenario Simulation</div>
            <div class="scenarios">
              ${Object.entries(window.RAPIDMIND_DATA).map(([key, value]) =>
                `<button class="scenario-btn ${simulation.activeKey === key ? "active" : ""}" data-scenario="${key}">${value.name}</button>`).join("")}
            </div>
            <textarea id="scenario">${scenario.text}</textarea>
            <div class="actions">
              <button class="btn primary" id="run" ${simulation.running ? "disabled" : ""}>▶ START ANALYSIS</button>
              <button class="btn danger" id="reset">RESET</button>
            </div>
            <div class="progress"><i style="width:${simulation.progress}%"></i></div>
          </section>

          <section class="panel status">
            <div class="status-main">
              <div class="status-dot"></div>
              <div><h2>${d ? d.type : "System Ready"}</h2><p>${d ? "Analysis completed • Response coordination active" : "Waiting for incident telemetry..."}</p></div>
            </div>
            <div class="badge">${d ? d.severity : "IDLE"}</div>
          </section>
        </div>

        ${d ? this.mainContent(d) : `<div class="panel empty">Select a crisis scenario and start analysis.</div>`}
      </div>
      <footer class="footer"><div class="ticker">◈ PRIORITY DATA SYNC ACTIVE // SMART CITY NODE: CONNECTED // SENSOR TELEMETRY ONLINE // ${simulation.logs.slice(-3).join(" // ")}</div></footer>
    `;

    document.querySelectorAll("[data-scenario]").forEach(button => {
      button.addEventListener("click", () => simulation.select(button.dataset.scenario));
    });
    document.getElementById("run").addEventListener("click", () => simulation.run());
    document.getElementById("reset").addEventListener("click", () => simulation.reset());
  }
};
