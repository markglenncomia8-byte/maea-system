import { app } from "./main.js";
import { showMenu } from "./menu.js";
import { format } from "./utils.js";
import { askJarvis } from './claude.js';

export function calcUI() {
    app.innerHTML = `
        <h2>🧠 Scientific Calculator</h2>

        <input id="calc" readonly>

        <div class="calc-grid">
            ${[
                "sin(", "cos(", "tan(", "sqrt(",
                "log(", "ln(", "^", "π",
                "7","8","9","/",
                "4","5","6","*",
                "1","2","3","-",
                "0",".","(",")",
                "C","=","+"
            ].map(v => {
                let cls =
                    v === "C" ? "clear" :
                    v === "=" ? "eq" :
                    isNaN(v) ? "op" : "num";

                return `<button class="${cls}">${v}</button>`;
            }).join("")}
        </div>

        <button id="back">⬅ Back</button>
    `;

    document.querySelectorAll(".calc-grid button").forEach(btn => {
        btn.onclick = () => handle(btn.innerText);
    });

    document.getElementById("back").onclick = showMenu;
}

function handle(v) {
    const calc = document.getElementById("calc");

    if (v === "C") {
        calc.value = "";
        return;
    }

    if (v === "=") {
        try {
            let exp = calc.value
                .replaceAll("π", Math.PI)
                .replaceAll("sqrt(", "Math.sqrt(")
                .replaceAll("sin(", "Math.sin(")
                .replaceAll("cos(", "Math.cos(")
                .replaceAll("tan(", "Math.tan(")
                .replaceAll("log(", "Math.log10(")
                .replaceAll("ln(", "Math.log")
                .replaceAll("^", "**");

            calc.value = format(Function("return " + exp)());
        } catch {
            calc.value = "Error";
        }
        return;
    }

    calc.value += v;
}
