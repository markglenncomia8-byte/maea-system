import { physicsUI } from "./physics.js";
import { calcUI } from "./calculator.js";
import { convUI } from "./temperature.js";
import { showConverters } from "./converter.js";
import { showFinance } from "./finance.js";

const modules = [
    { name: "Calculator",   sub: "Basic & scientific math",    icon: "🧮", cls: "mc-calc",    action: calcUI },
    { name: "Finance",      sub: "Interest, loans & budgets",  icon: "💰", cls: "mc-finance", action: showFinance },
    { name: "Temperature",  sub: "°C · °F · K converter",      icon: "🌡️", cls: "mc-temp",    action: convUI },
    { name: "Convert",      sub: "Metric & imperial units",     icon: "📏", cls: "mc-convert", action: showConverters },
    { name: "Physics",      sub: "Formulas & constants",        icon: "⚛️", cls: "mc-physics", action: physicsUI },
];

export function showMenu() {
    const app = document.getElementById("app");

    const cards = modules.map((m, i) => `
        <div class="module-card ${m.cls}" data-index="${i}">
            <span class="card-icon">${m.icon}</span>
            <div class="card-title">${m.name}</div>
            <div class="card-sub">${m.sub}</div>
        </div>
    `).join("");

    app.innerHTML = `
        <div class="app-header">
            <h1>MAEA OS</h1>
            <p>Your all-in-one calculator</p>
        </div>
        ${cards}
    `;

    document.querySelectorAll(".module-card").forEach(card => {
        card.addEventListener("click", () => {
            const idx = parseInt(card.dataset.index);
            modules[idx].action();
        });
    });
}
