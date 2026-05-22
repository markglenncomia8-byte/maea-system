import { askJarvis } from './claude.js';
import { app } from "./main.js";
import { showMenu } from "./menu.js";
import { format } from "./utils.js";

const units = {
    length: {
        mm: 0.001,
        cm: 0.01,
        dm: 0.1,
        m: 1,
        dam: 10,
        hm: 100,
        km: 1000
    },
    mass: {
        ng: 1e-9,
        ug: 1e-6,
        mg: 0.001,
        g: 1,
        kg: 1000,
        t: 1000000
    }
};

export function metricUI() {
    app.innerHTML = `
        <h2>Metric System</h2>

        <input id="val" placeholder="Enter value">

        <select id="cat">
            <option value="length">Length</option>
            <option value="mass">Mass</option>
        </select>

        <div class="selects-row">
            <div class="select-wrap"><select id="from"></select></div>
            <span class="arrow">➡️</span>
            <div class="select-wrap"><select id="to"></select></div>
        </div>

      <button class="convert-btn" id="convert">Convert</button>
<button class="back-btn" id="back">Back</button>

        <p id="res"></p>
    `;

    render();
    cat.onchange = render;
    convert.onclick = convertMetric;
    back.onclick = showMenu;
}

function render() {
    let data = units[cat.value];

    from.innerHTML = "";
    to.innerHTML = "";

    for (let key in data) {
        from.innerHTML += `<option value="${key}">${key}</option>`;
        to.innerHTML += `<option value="${key}">${key}</option>`;
    }
}

function convertMetric() {
    let v = parseFloat(val.value);
    if (isNaN(v)) return res.innerText = "Enter number";

    let base = v * units[cat.value][from.value];
    let result = base / units[cat.value][to.value];

    res.innerText = format(result) + " " + to.value;
}