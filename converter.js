import { askJarvis } from './claude.js';
import { app } from "./main.js";
import { showMenu } from "./menu.js";
import { metricUI } from "./metric.js";
import { impUI } from "./imperial.js";

export function showConverters() {
    app.innerHTML = `
        <div class="page-title">📏 Converters</div>

        <div class="sub-grid">
            <div class="sub-card" id="metric"><span class="sub-icon">📐</span>Metric</div>
            <div class="sub-card" id="imperial"><span class="sub-icon">📏</span>Imperial</div>
        </div>

        <button class="back-btn" id="back">← Back</button>
    `;

    document.getElementById("metric").onclick = metricUI;
    document.getElementById("imperial").onclick = impUI;
    document.getElementById("back").onclick = showMenu;
}