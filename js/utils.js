window.RapidMindUtils = {
  sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); },

  formatTime(date) {
    if (!date) return "--:--:--";
    return date.toLocaleTimeString();
  },

  formatElapsed(seconds) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  },

  escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
};
