window.RapidMindSimulation = class {
  constructor(onUpdate) {
    this.onUpdate = onUpdate;
    this.activeKey = "fire";
    this.analysis = null;
    this.detectedAt = null;
    this.respondedAt = null;
    this.elapsed = 0;
    this.progress = 0;
    this.running = false;
    this.logs = ["[SYS] Neural link established", "[DATA] Sensor telemetry online"];
    this.timer = null;
  }

  select(key) {
    if (!window.RAPIDMIND_DATA[key]) return;
    this.activeKey = key;
    this.analysis = null;
    this.detectedAt = null;
    this.respondedAt = null;
    this.elapsed = 0;
    this.progress = 0;
    this.emit();
  }

  async run() {
    if (this.running) return;
    this.running = true;
    this.detectedAt = this.detectedAt || new Date();
    this.respondedAt = null;

    for (let step = 1; step <= 5; step++) {
      this.progress = step * 18;
      this.emit();
      await window.RapidMindUtils.sleep(220);
    }

    this.analysis = window.RAPIDMIND_DATA[this.activeKey];
    this.respondedAt = new Date();
    this.progress = 100;
    this.logs.push("[AI] Crisis classification finalized");
    this.logs.push(`[DATA] ${this.analysis.type} confirmed`);
    this.running = false;
    this.emit();
  }

  reset() {
    this.analysis = null;
    this.detectedAt = null;
    this.respondedAt = null;
    this.elapsed = 0;
    this.progress = 0;
    this.running = false;
    this.emit();
  }

  startClock() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!this.detectedAt) return;
      this.elapsed = Math.floor((Date.now() - this.detectedAt.getTime()) / 1000);
      this.emit();
    }, 1000);
  }

  emit() { if (typeof this.onUpdate === "function") this.onUpdate(this); }
};
