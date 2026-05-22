import { askJarvis } from './claude.js';
import { app } from "./main.js";
import { showMenu } from "./menu.js";
import { format } from "./utils.js";

const units = {
    length: {
        inch: { label: "Inches", value: 0.0254 },
        foot: { label: "Feet", value: 0.3048 },
        yard: { label: "Yards", value: 0.9144 },
        mile: { label: "Miles", value: 1609.34 }
    },
    weight: {
        ounce: { label: "Ounces", value: 28.3495 },
        pound: { label: "Pounds", value: 453.592 },
        stone: { label: "Stone", value: 6350.29 }
    },
    volume: {
        teaspoon: { label: "Teaspoon", value: 4.92892 },
        tablespoon: { label: "Tablespoon", value: 14.7868 },
        cup: { label: "Cup", value: 240 },
        pint: { label: "Pint", value: 473.176 },
        quart: { label: "Quart", value: 946.353 },
        gallon: { label: "Gallon", value: 3785.41 }
    }
};

export function impUI() {
    app.innerHTML = `
        <h2>📏 Imperial System</h2>

        <input id="val" placeholder="Enter value">

        <select id="cat">
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="volume">Volume</option>
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
    convert.onclick = convertImp;
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

function convertImp() {
    let v = parseFloat(val.value);
    if (isNaN(v)) return res.innerText = "Enter number";

    let base = v * units[cat.value][from.value].value;
    let result = base / units[cat.value][to.value].value;

    res.innerText = format(result) + " " + to.value;
}