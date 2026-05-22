
import { app } from "./main.js";
import { showMenu } from "./menu.js";
import { format } from "./utils.js";
import { askJarvis} from './claude.js';

export function convUI() {
    app.innerHTML = `
        <h2>Temperature</h2>

        <input id="val">

        <div class="selects-row">
            <div class="select-wrap">
                <select id="from">
                    <option value="C">CELCIUS</option>
                    <option value="F">FAHRENHEIT</option>
                    <option value="K">KELVIN</option>
                </select>
            </div>
            <span class="arrow">➡️</span>
            <div class="select-wrap">
                <select id="to">
                    <option value="C">CELCIUS</option>
                    <option value="F">FAHRENHEIT</option>
                    <option value="K">KELVIN</option>
                </select>
            </div>
        </div>

       <button class="convert-btn" id="convert">Convert</button>
<button class="back-btn" id="back">Back</button>

        <p id="res"></p>
    `;

    convert.onclick = convertTemp;
    back.onclick = showMenu;
}

function convertTemp() {
    let v = parseFloat(val.value);
    if (isNaN(v)) return res.innerText = "Enter number";

    let c =
        from.value === "C" ? v :
        from.value === "F" ? (v - 32) * 5/9 :
        v - 273.15;

    let r =
        to.value === "C" ? c :
        to.value === "F" ? c * 9/5 + 32 :
        c + 273.15;

    res.innerText = format(r) + " " + to.value;
}