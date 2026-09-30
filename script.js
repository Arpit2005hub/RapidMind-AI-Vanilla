
const DATA={
fire:{name:"FIRE",text:"Crisis: Fire. Location: 2nd Floor Shopping Area. Status: High temperature (480°C), dense smoke spread detected in main corridor.",type:"Fire",location:"2nd Floor Shopping Area",severity:"Critical",primary:"Fire Brigade",support:["Ambulance","Police","Evacuation Team"],route:"Exit B North Stairwell (Clear Path)",instructions:["Stay below smoke level","Avoid structural pillars in Sector B","Evacuate using North Stairwell"],groups:[["Elderly",3,"Critical"]],risks:[["Flashover Risk","Increasing","High"],["Visibility Loss","Increasing","High"]],reason:"Thermal sensors confirmed rapid rise to 480°C. Crowd behavioral patterns suggest high panic at Exit A."},
medical:{name:"MEDICAL EMERGENCY",text:"Crisis: Medical Emergency. Location: Main Lobby. Status: Person unconscious, suspected cardiac arrest. Immediate ACLS required.",type:"Medical Emergency",location:"Main Lobby",severity:"High",primary:"Ambulance",support:["Hospital Staff","Security"],route:"Clearance of Central Lobby Path",instructions:["Initiate CPR immediately","Clear 5-meter radius around patient","Secure elevator access for EMTs"],groups:[["Patient",1,"Critical"]],risks:[["Patient Vitals","Stable","Medium"],["Lobby Saturation","Stable","Low"]],reason:"Visual AI confirmed collapse pattern. Wearable telemetry from patient triggered critical alert."},
security:{name:"HIGH-RISK SECURITY THREAT",text:"Crisis: Security Threat. Location: South Entrance. Status: Suspicious ballistic discharge, panic movement detected.",type:"High-Risk Security Threat",location:"South Entrance",severity:"Critical",primary:"Police / Special Forces",support:["Bomb Squad","Ambulance","Surveillance Team"],route:"Shelter in Sector G Secure Safe-Rooms",instructions:["Move to high-security zones","Follow SILENT protocols","Building lockdown active"],groups:[["Children",12,"High"]],risks:[["Threat Movement","Increasing","High"],["Containment Gap","Decreasing","Medium"]],reason:"Acoustic profiling matches ballistic discharge. Facial recognition tracking armed individual."},
stampede:{name:"CROWD RISK",text:"Crisis: Crowd Risk. Location: Entrance Gate. Status: Extreme density (>7 ppl/sqm), flow stagnation at Portal 4.",type:"Stampede Risk",location:"Entrance Gate",severity:"High",primary:"Crowd Control",support:["Police","Medical"],route:"Alternate Exit C Path via Perimeter 4",instructions:["Do not reverse against flow","Hold diagonal pattern to reach exits","Keep arms at chest level"],groups:[["Seniors",5,"High"]],risks:[["Flow Saturation","Increasing","High"],["Panic Factor","Increasing","Medium"]],reason:"Visual AI measures density > 7.0 ppl/sqm. Flow turbulence detected at main entrance bottleneck."},
gas:{name:"GAS LEAK",text:"Crisis: Gas Leak. Location: Storage Wing D. Status: High concentration of toxic ammonia detected. AHU failure reported.",type:"Gas Leak",location:"Storage Wing D",severity:"Critical",primary:"Hazard Response Team",support:["Fire Brigade","Medical","Evacuation Team"],route:"Cross-wind extraction to Wing A (Secure Flow)",instructions:["Seal vents in Sector D","Evacuate Wing D immediately","Move cross-wind towards Wing A"],groups:[["Staff",12,"Critical"]],risks:[["Plume Dispersion","Increasing","High"],["Oxygen Depletion","Decreasing","High"]],reason:"Ammonia sensors reporting 280ppm in Storage Wing D. AHU 09 reporting mechanical failure."}
};

let active="fire",analysis=null,incidentTime=null,responseTime=null,elapsed=0,logs=["[SYS] Neural link established","[DATA] Thermal sensors online"];
const app=document.getElementById("app");

function theme(type){
 const t={Fire:["#f97316","#ef4444"],"Medical Emergency":["#10b981","#14b8a6"],"High-Risk Security Threat":["#ef4444","#a855f7"],"Stampede Risk":["#f59e0b","#f97316"],"Gas Leak":["#84cc16","#22c55e"]}[type]||["#3b82f6","#1d4ed8"];
 document.documentElement.style.setProperty("--primary",t[0]);document.documentElement.style.setProperty("--secondary",t[1]);document.documentElement.style.setProperty("--glow",t[0]+"55");document.documentElement.style.setProperty("--border",t[0]+"33");document.documentElement.style.setProperty("--bg",t[0]+"14");
}
function render(){
 const d=analysis;
 theme(d?.type||"Fire");
 app.innerHTML=`<div class="app">
<header class="header"><div class="brand"><div class="brand-icon">⚡</div><div><h1>RapidMind <span>AI</span></h1><div class="sub">ADAPTIVE CRISIS INTELLIGENCE // V6.0-PREMIUM <span class="badge">AI SIMULATION MODE ACTIVE</span></div></div></div>
<div class="clockbox"><div><label>Incident Detect</label><strong>${incidentTime?incidentTime.toLocaleTimeString():"--:--:--"}</strong></div><div><label>Response Time</label><strong>${responseTime?responseTime.toLocaleTimeString():"--:--:--"}</strong></div><div><label>Elapsed</label><strong>${String(Math.floor(elapsed/60)).padStart(2,"0")}:${String(elapsed%60).padStart(2,"0")}</strong></div></div></header>
<div class="toolbar"><section class="panel"><div class="section-label">Crisis Scenario Simulation</div><div class="scenarios">${Object.entries(DATA).map(([k,v])=>`<button class="scenario-btn ${active===k?"active":""}" data-scenario="${k}">${v.name}</button>`).join("")}</div><textarea id="scenario">${DATA[active].text}</textarea><div class="actions"><button class="btn primary" id="run">▶ START ANALYSIS</button><button class="btn danger" id="reset">RESET</button></div><div class="progress"><i id="progress"></i></div></section>
<section class="panel status"><div class="status-main"><div class="status-dot"></div><div><h2>${d?d.type:"System Ready"}</h2><p>${d?"Analysis completed • Response coordination active":"Waiting for incident telemetry..."}</p></div></div><div class="badge">${d?d.severity:"IDLE"}</div></section></div>
${d?mainContent(d):`<div class="panel empty">Synthesizing adaptive strategy...</div>`}
</div><footer class="footer"><div class="ticker">◈ PRIORITY DATA SYNC ACTIVE // SMART CITY NODE: CONNECTED // NEURAL TELEMETRY ONLINE // ${logs.slice(-3).join(" // ")}</div></footer>`;
 bind();
}
function mainContent(d){
 return `<main class="grid">
<section class="panel"><div class="panel-title"><span>Incident Analysis</span><small>${d.location}</small></div><div class="analysis">
<div class="metric"><label>Crisis Type</label><strong>${d.type}</strong></div><div class="metric"><label>Severity</label><strong class="severity">${d.severity}</strong></div><div class="metric"><label>Confidence</label><strong>98%</strong></div><div class="metric"><label>Primary Response</label><strong>${d.primary}</strong></div><div class="metric"><label>Safe Route</label><strong>${d.route}</strong></div><div class="metric"><label>Support</label><strong>${d.support.join(", ")}</strong></div></div></section>
<section class="panel"><div class="panel-title"><span>Predictive Risk Engine</span><small>60s Forecast</small></div><div class="risks">${d.risks.map(r=>risk(r)).join("")}</div></section>
<section class="panel"><div class="panel-title"><span>Tactical Map</span><small>LIVE TELEMETRY</small></div><div class="map"><div class="danger-zone">⚠ HAZARD<br>ZONE</div><div class="route"></div><div class="map-tag tag-a">SECTOR A</div><div class="map-tag tag-b">SAFE EXIT</div><div class="map-tag tag-c">RESCUE UNIT</div></div></section>
<section class="panel"><div class="panel-title"><span>Real-Time AI Strategic Directives</span><small>CALM MODE ACTIVE</small></div><div class="directive-list">${d.instructions.map((x,i)=>`<div class="directive"><div class="num">${i+1}</div><p>${x}</p></div>`).join("")}</div></section>
<section class="panel"><div class="panel-title"><span>Rescue Assistance Panel</span><small>ACTIVE SEARCH ZONES</small></div><div class="groups">${d.groups.map((g,i)=>`<div class="group"><div><b>${g[0]} (${g[1]})</b><small>Location: Sector ${String.fromCharCode(65+i)}${i+1}</small></div><span class="badge">${g[2]}</span></div>`).join("")}</div><div class="hint">🛡 ACTION HINT: PRIORITIZE VULNERABLE GROUP EVACUATION</div></section>
<section class="panel"><div class="panel-title"><span>Neural Protocol Reasoning</span><small>AI EXPLANATION</small></div><div class="reasoning">${d.reason}<br><br>System continuously monitors sensor telemetry, route safety, crowd movement and predicted secondary risks.</div></section>
</main>`;
}
function risk(r){let lvl=r[2].toLowerCase();let n=lvl==="high"?8:lvl==="medium"?5:2;return `<div class="risk"><div class="risk-top"><span class="risk-name">${r[0]}</span><span class="level ${lvl}">${r[2]}</span></div><div class="trend">${r[1]} Trend</div><div class="bars">${Array.from({length:10},(_,i)=>`<i class="${i<n?"on":""}"></i>`).join("")}</div></div>`}
function bind(){
 document.querySelectorAll("[data-scenario]").forEach(b=>b.onclick=()=>{active=b.dataset.scenario;analysis=null;render();});
 document.getElementById("run").onclick=run;
 document.getElementById("reset").onclick=()=>{analysis=null;incidentTime=null;responseTime=null;elapsed=0;render();};
}
async function run(){
 if(!incidentTime)incidentTime=new Date(); responseTime=null;
 const p=document.getElementById("progress"),btn=document.getElementById("run");btn.disabled=true;
 for(let i=1;i<=5;i++){p.style.width=(i*18)+"%";await new Promise(r=>setTimeout(r,220));}
 analysis=DATA[active];responseTime=new Date();p.style.width="100%";logs.push("[AI] Crisis classification finalized",`[DATA] ${analysis.type} confirmed`);
 render();
}
setInterval(()=>{if(incidentTime){elapsed=Math.floor((Date.now()-incidentTime.getTime())/1000);if(analysis&&Math.random()>.65)logs.push("[AI] Recalculating pathing latency: "+Math.floor(Math.random()*10+1)+"ms");render();}},1000);
render();
setTimeout(run,500);
