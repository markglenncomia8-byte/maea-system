import { app } from "./main.js";
import { showMenu } from "./menu.js";
import { format } from "./utils.js";
import { askJarvis } from './claude.js';

export function physicsUI() {
    app.innerHTML = `
        <div class="page-title">⚛️ Physics</div>

        <div class="sub-grid">
            <div class="sub-card" id="speed"><span class="sub-icon">🚗</span>Speed</div>
            <div class="sub-card" id="accel"><span class="sub-icon">⚡</span>Acceleration</div>
            <div class="sub-card" id="force"><span class="sub-icon">💪</span>Force</div>
            <div class="sub-card" id="energy"><span class="sub-icon">🔋</span>Kinetic Energy</div>
        </div>

        <div id="phyBox" style="width:100%;max-width:400px;margin:0 auto;"></div>

        <div id="chatBox" style="width:100%;max-width:400px;margin:16px auto 0;">
            <div class="page-title" style="font-size:16px;margin-bottom:10px">🤖 Ask Jarvis</div>
            <div id="chatHistory" style="height:160px;overflow-y:auto;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);padding:12px;border-radius:14px;font-size:14px;line-height:1.6;margin-bottom:10px;"></div>
            <input id="chatInput" type="text" placeholder="Ask Jarvis about physics...">
            <button class="convert-btn" id="chatSend" style="margin-top:8px">Send 🚀</button>
        </div>

        <button class="back-btn" id="back" style="margin-top:16px">← Back</button>
    `;

    document.getElementById("back").onclick = showMenu;

    document.getElementById("speed").onclick = speedUI;
    document.getElementById("accel").onclick = accelUI;
    document.getElementById("force").onclick = forceUI;
    document.getElementById("energy").onclick = energyUI;

    // Claude chatbot
    document.getElementById("chatSend").onclick = async () => {
        const input = document.getElementById("chatInput");
        const history = document.getElementById("chatHistory");
        const msg = input.value.trim();
        if (!msg) return;

        history.innerHTML += `<p><b>You:</b> ${msg}</p>`;
        input.value = "";
        history.innerHTML += `<p><b>Jarvis:</b> thinking... ⏳</p>`;

        const reply = await askJarvis(`You are a physics assistant. Answer clearly using plain text only. No LaTeX, no markdown, no special symbols. Use simple text like "a = (v2 - v1) / t" for formulas. Question: ${msg}`);
        
        // Replace the thinking message with real reply
        const items = history.querySelectorAll("p");
        items[items.length - 1].innerHTML = `<b>Jarvis:</b> ${reply}`;

        history.scrollTop = history.scrollHeight;
    };
}

function box() {
    return document.getElementById("phyBox");
}

function speedUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">🚗 Speed</div>
        <img src="js/assets/speed.png" class="formula-img">
        <input id="d" type="number" placeholder="Distance (m)">
        <input id="t" type="number" placeholder="Time (s)">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    document.getElementById("calc").onclick = () => {
        const d = +document.getElementById("d").value;
        const t = +document.getElementById("t").value;
        
        if (t === 0) {
            document.getElementById("res").innerText = "⚠️ Time cannot be zero!";
            return;
        }

        const v = d / t;
        document.getElementById("res").innerHTML = `Speed: ${format(v)} m/s`;
    };
}

function accelUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">⚡ Acceleration</div>
        <img src="js/assets/acceleration.png" class="formula-img">
        <input id="v1" type="number" placeholder="Initial Velocity (m/s)">
        <input id="v2" type="number" placeholder="Final Velocity (m/s)">
        <input id="t" type="number" placeholder="Time (s)">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    document.getElementById("calc").onclick = () => {
        const v1 = +document.getElementById("v1").value;
        const v2 = +document.getElementById("v2").value;
        const t = +document.getElementById("t").value;

        if (t === 0) {
            document.getElementById("res").innerText = "⚠️ Time cannot be zero!";
            return;
        }

        const a = (v2 - v1) / t;
        document.getElementById("res").innerHTML = `Acceleration: ${format(a)} m/s²`;
    };
}

function forceUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">💪 Force</div>
        <img src="js/assets/force.png" class="formula-img">
        <input id="m" type="number" placeholder="Mass (kg)">
        <input id="a" type="number" placeholder="Acceleration (m/s²)">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    document.getElementById("calc").onclick = () => {
        const m = +document.getElementById("m").value;
        const a = +document.getElementById("a").value;

        const F = m * a;
        document.getElementById("res").innerHTML = `Force: ${format(F)} N`;
    };
}

function energyUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">🔋 Kinetic Energy</div>
        <img src="js/assets/energy.png" class="formula-img">
        <input id="m" type="number" placeholder="Mass (kg)">
        <input id="v" type="number" placeholder="Velocity (m/s)">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    document.getElementById("calc").onclick = () => {
        const m = +document.getElementById("m").value;
        const v = +document.getElementById("v").value;

        const E = 0.5 * m * v * v;
        document.getElementById("res").innerHTML = `Energy: ${format(E)} J`;
    };
}