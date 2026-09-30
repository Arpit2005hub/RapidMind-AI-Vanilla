window.RAPIDMIND_DATA = {
  fire: {
    name: "FIRE", type: "Fire", location: "2nd Floor Shopping Area", severity: "Critical",
    text: "Crisis: Fire. Location: 2nd Floor Shopping Area. Status: High temperature (480°C), dense smoke spread detected in main corridor.",
    primary: "Fire Brigade", support: ["Ambulance", "Police", "Evacuation Team"],
    route: "Exit B North Stairwell (Clear Path)",
    instructions: ["Stay below smoke level", "Avoid structural pillars in Sector B", "Evacuate using North Stairwell"],
    groups: [["Elderly", 3, "Critical"]],
    risks: [["Flashover Risk", "Increasing", "High"], ["Visibility Loss", "Increasing", "High"]],
    reasoning: "Thermal sensors confirmed rapid rise to 480°C. Crowd behavioral patterns suggest high panic at Exit A."
  },
  medical: {
    name: "MEDICAL EMERGENCY", type: "Medical Emergency", location: "Main Lobby", severity: "High",
    text: "Crisis: Medical Emergency. Location: Main Lobby. Status: Person unconscious, suspected cardiac arrest. Immediate ACLS required.",
    primary: "Ambulance", support: ["Hospital Staff", "Security"],
    route: "Clearance of Central Lobby Path",
    instructions: ["Initiate CPR immediately", "Clear 5-meter radius around patient", "Secure elevator access for EMTs"],
    groups: [["Patient", 1, "Critical"]],
    risks: [["Patient Vitals", "Stable", "Medium"], ["Lobby Saturation", "Stable", "Low"]],
    reasoning: "Visual AI confirmed collapse pattern. Wearable telemetry from patient triggered critical alert."
  },
  security: {
    name: "HIGH-RISK SECURITY THREAT", type: "High-Risk Security Threat", location: "South Entrance", severity: "Critical",
    text: "Crisis: Security Threat. Location: South Entrance. Status: Suspicious ballistic discharge, panic movement detected.",
    primary: "Police / Special Forces", support: ["Bomb Squad", "Ambulance", "Surveillance Team"],
    route: "Shelter in Sector G Secure Safe-Rooms",
    instructions: ["Move to high-security zones", "Follow SILENT protocols", "Building lockdown active"],
    groups: [["Children", 12, "High"]],
    risks: [["Threat Movement", "Increasing", "High"], ["Containment Gap", "Decreasing", "Medium"]],
    reasoning: "Acoustic profiling matches ballistic discharge. Tracking telemetry indicates a moving security threat."
  },
  stampede: {
    name: "CROWD RISK", type: "Stampede Risk", location: "Entrance Gate", severity: "High",
    text: "Crisis: Crowd Risk. Location: Entrance Gate. Status: Extreme density (>7 ppl/sqm), flow stagnation at Portal 4.",
    primary: "Crowd Control", support: ["Police", "Medical"],
    route: "Alternate Exit C Path via Perimeter 4",
    instructions: ["Do not reverse against flow", "Hold diagonal pattern to reach exits", "Keep arms at chest level"],
    groups: [["Seniors", 5, "High"]],
    risks: [["Flow Saturation", "Increasing", "High"], ["Panic Factor", "Increasing", "Medium"]],
    reasoning: "Crowd telemetry measures density above the configured threshold. Flow turbulence is detected at the main entrance bottleneck."
  },
  gas: {
    name: "GAS LEAK", type: "Gas Leak", location: "Storage Wing D", severity: "Critical",
    text: "Crisis: Gas Leak. Location: Storage Wing D. Status: High concentration of toxic ammonia detected. AHU failure reported.",
    primary: "Hazard Response Team", support: ["Fire Brigade", "Medical", "Evacuation Team"],
    route: "Cross-wind extraction to Wing A (Secure Flow)",
    instructions: ["Seal vents in Sector D", "Evacuate Wing D immediately", "Move cross-wind towards Wing A"],
    groups: [["Staff", 12, "Critical"]],
    risks: [["Plume Dispersion", "Increasing", "High"], ["Oxygen Depletion", "Decreasing", "High"]],
    reasoning: "Gas sensors report a high concentration in Storage Wing D while the ventilation unit reports a mechanical fault."
  }
};
