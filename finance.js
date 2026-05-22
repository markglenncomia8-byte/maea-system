
import { format } from "./utils.js";
import { app } from "./main.js";
import { showMenu } from "./menu.js";
import { askJarvis } from './claude.js';

export function showFinance() {
    app.innerHTML = `
        <div class="page-title">💰 Finance</div>

        <div class="sub-grid">
            <div class="sub-card" id="simple"><span class="sub-icon">💵</span>Simple</div>
            <div class="sub-card" id="compound"><span class="sub-icon">📈</span>Compound</div>
            <div class="sub-card" id="loan"><span class="sub-icon">📉</span>Loan</div>
            <div class="sub-card" id="invest"><span class="sub-icon">📊</span>Invest</div>
            <div class="sub-card" id="budget"><span class="sub-icon">💸</span>Budget</div>
            <div class="sub-card" id="goal"><span class="sub-icon">🎯</span>Goal</div>
            <div class="sub-card" id="expense"><span class="sub-icon">🧾</span>Expenses</div>
        </div>

        <div id="financeBox" style="width:100%;max-width:400px;margin:0 auto;"></div>

        <button class="back-btn" id="back">← Back</button>
    `;

    document.getElementById("back").onclick = showMenu;

    document.getElementById("simple").onclick = simpleUI;
    document.getElementById("compound").onclick = compoundUI;
    document.getElementById("loan").onclick = loanUI;
    document.getElementById("invest").onclick = investUI;
    document.getElementById("budget").onclick = budgetUI;
    document.getElementById("goal").onclick = goalUI;
    document.getElementById("expense").onclick = expenseUI;
}

function box() {
    return document.getElementById("financeBox");
}

// ================= SIMPLE =================
function simpleUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">Simple Interest</div>
        <input id="sP" placeholder="Principal (₱)">
        <input id="sR" placeholder="Rate e.g. 0.05">
        <input id="sT" placeholder="Time (years)">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    document.getElementById("calc").onclick = () => {
        const P = +document.getElementById("sP").value;
        const r = +document.getElementById("sR").value;
        const t = +document.getElementById("sT").value;

        const I = P * r * t;
        document.getElementById("res").innerHTML =
            `Interest: ₱${format(I)} | Total: ₱${format(P + I)}`;
    };
}

// ================= COMPOUND =================
function compoundUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">Compound Interest</div>
        <input id="cP" placeholder="Principal (₱)">
        <input id="cR" placeholder="Rate e.g. 0.05">
        <input id="cN" placeholder="Times per year">
        <input id="cT" placeholder="Years">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    document.getElementById("calc").onclick = () => {
        const P = +document.getElementById("cP").value;
        const r = +document.getElementById("cR").value;
        const n = +document.getElementById("cN").value;
        const t = +document.getElementById("cT").value;

        const A = P * Math.pow(1 + r / n, n * t);

        document.getElementById("res").innerHTML =
            `Final Amount: ₱${format(A)}`;
    };
}

// ================= LOAN =================
function loanUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">Loan Calculator</div>
        <input id="lP" placeholder="Loan Amount (₱)">
        <input id="lR" placeholder="Annual Rate e.g. 0.05">
        <input id="lM" placeholder="Months">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    document.getElementById("calc").onclick = () => {
        const P = +document.getElementById("lP").value;
        const r = +document.getElementById("lR").value / 12;
        const m = +document.getElementById("lM").value;

        const payment = (P * r) / (1 - Math.pow(1 + r, -m));

        document.getElementById("res").innerHTML =
            `Monthly Payment: ₱${format(payment)}`;
    };
}
function investUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">Investment Growth</div>
        <input id="iS" placeholder="Starting Money (₱)">
        <input id="iM" placeholder="Monthly Add (₱)">
        <input id="iR" placeholder="Annual Return e.g. 0.08">
        <input id="iY" placeholder="Years">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;


document.getElementById("calc").onclick = () => {
    let total = +document.getElementById("iS").value;
    const monthly = +document.getElementById("iM").value;
    const rate = +document.getElementById("iR").value / 12;
    const months = +document.getElementById("iY").value * 12;

    let data = [];

    for (let i = 0; i < months; i++) {
        total = total * (1 + rate) + monthly;
        data.push(total);
    }

    document.getElementById("res").innerHTML =
        `📈 Final Value: ₱${format(total)}`;

    
};

}



function budgetUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">💸 Salary Budget</div>
        <input id="salary" placeholder="Monthly Salary (₱)">
        <input id="expenses" placeholder="Monthly Expenses (₱)">
        <input id="saveRate" placeholder="Savings % e.g. 20">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    const btn = document.getElementById("calc");

    btn.onclick = () => {
        const salary = +document.getElementById("salary").value;
        const expenses = +document.getElementById("expenses").value;
        const saveRate = +document.getElementById("saveRate").value / 100;

        const savings = salary * saveRate;
        const remaining = salary - expenses - savings;

        let status = "";

        if (remaining < 0) status = "⚠️ Overbudget bro 💀";
        else if (remaining < salary * 0.1) status = "😬 Tight money";
        else status = "✅ Healthy budget";

        document.getElementById("res").innerHTML = `
            💰 Savings: ₱${format(savings)} <br>
            💸 Expenses: ₱${format(expenses)} <br>
            🧠 Remaining: ₱${format(remaining)} <br><br>
            ${status}
        `;
    };
}
function goalUI() {
    box().innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">🎯 Savings Goal</div>
        <input id="target" placeholder="Goal Amount (₱)">
        <input id="current" placeholder="Current Savings (₱)">
        <input id="monthly" placeholder="Monthly Savings (₱)">
        <button class="convert-btn" id="calc">Calculate</button>
        <div id="res" class="result-box"></div>
    `;

    const btn = document.getElementById("calc");

    btn.onclick = () => {
        const target = +document.getElementById("target").value;
        const current = +document.getElementById("current").value;
        const monthly = +document.getElementById("monthly").value;

        if (!target || !monthly) {
            document.getElementById("res").innerHTML = "Enter valid numbers";
            return;
        }

        const remaining = target - current;

        if (remaining <= 0) {
            document.getElementById("res").innerHTML = "🎉 Goal already reached!";
            return;
        }

        const months = remaining / monthly;

        document.getElementById("res").innerHTML =
            `⏳ You will reach your goal in ~${months.toFixed(1)} months`;
    };
}
let expenseLog = JSON.parse(localStorage.getItem("expenseLog")) || [];
let selectedDay = null;

function expenseUI() {
    showInputView();
}

function showInputView() {
    const target = document.getElementById("financeBox") || document.getElementById("app");
    target.innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">🧾 Expense Input</div>
        <input id="date" type="date">
        <div id="items"></div>
        <button class="convert-btn ghost-btn" id="addItem">➕ Add Item</button>
        <button class="convert-btn" id="add">💾 Save</button>
        <button class="convert-btn ghost-btn" id="goStorage">📁 View Files</button>
        <button class="back-btn" id="backToFinance">← Finance</button>
    `;
    addItemField();
    document.getElementById("add").onclick = addDayExpense;
    document.getElementById("goStorage").onclick = showFilesView;
    document.getElementById("addItem").onclick = () => addItemField();
    document.getElementById("backToFinance").onclick = showFinance;
}

function showFilesView() {
    const target = document.getElementById("financeBox") || document.getElementById("app");
    target.innerHTML = `
        <div class="page-title" style="font-size:18px;margin:16px 0 12px">📁 My Files</div>
        <div id="fileView"></div>
        <div id="sliderControls">
            <button id="prevDay">⬅</button>
            <span id="dayLabel">Day 1 / 1</span>
            <button id="nextDay">➡</button>
        </div>
        <div class="result-box" style="margin-top:10px">Total: ₱<span id="total">0</span></div>
        <button class="convert-btn ghost-btn" id="goBack" style="margin-top:8px">← Back to Input</button>
    `;
    renderFiles();
    document.getElementById("prevDay").onclick = () => {
        if (currentDayIndex > 0) { currentDayIndex--; renderFiles(); }
    };
    document.getElementById("nextDay").onclick = () => {
        if (currentDayIndex < expenseLog.length - 1) { currentDayIndex++; renderFiles(); }
    };
    document.getElementById("goBack").onclick = showInputView;
}
function addDayExpense() {
    const date = document.getElementById("date").value;
    if (!date) return;

    const names = document.querySelectorAll(".item-name");
    const values = document.querySelectorAll(".item-value");

    let items = [];

    for (let i = 0; i < names.length; i++) {
        const name = names[i].value.trim();
        const value = +values[i].value || 0;

        if (name) {
            items.push({ name, value });
        }
    }

    const newDay = { date, items };

    const index = expenseLog.findIndex(d => d.date === date);

    if (index !== -1) expenseLog[index] = newDay;
    else expenseLog.push(newDay);

    localStorage.setItem("expenseLog", JSON.stringify(expenseLog));

    renderFiles();
}

function renderFiles() {
    const fileView = document.getElementById("fileView");
    const totalEl = document.getElementById("total");
    const dayLabel = document.getElementById("dayLabel");

    if (!expenseLog.length) return;

    const d = expenseLog[currentDayIndex];

    // 🔥 FIX OLD DATA
    if (!d.items) {
        d.items = [
            { name: "Food", value: d.food || 0 },
            { name: "Games", value: d.games || 0 },
            { name: "Transport", value: d.transport || 0 }
        ];
    }

    let total = 0;
    let itemsHTML = "";

    d.items.forEach(item => {
        total += item.value;
        itemsHTML += `🔹 ${item.name}: ₱${item.value}<br>`;
    });

    fileView.innerHTML = `
        <div class="file-card">
            <h4>📁 ${d.date}</h4>
            ${itemsHTML}
            <hr>
            <b>💰 Total: ₱${total}</b>
        </div>
    `;

    totalEl.innerText = total;
    dayLabel.innerText = `Day ${currentDayIndex + 1} / ${expenseLog.length}`;
}





    





function createFileHTML(d, total) {
    return `
        <div class="file-card">
            <div class="file-header">📁 ${d.date}</div>

            <div class="file-body">
                🍔 Food: ₱${d.food}<br>
                🎮 Games: ₱${d.games}<br>
                🚕 Transport: ₱${d.transport}<br>

                <hr>
                <b>💰 Total: ₱${total}</b>
            </div>
        </div>
    `;
}
// slideTo removed - using showInputView/showFilesView instead

function addItemField(name = "", value = "") {
    const items = document.getElementById("items");
    const row = document.createElement("div");
    row.className = "item-row";
    row.innerHTML = `
        <input class="item-name" placeholder="Item (e.g. Food)" value="${name}">
        <input class="item-value" placeholder="₱" type="number" value="${value}">
    `;
    items.appendChild(row);
}
globalThis.selectDay = function (index) {
    selectedDay = index;
    renderExpenseLog();

    setTimeout(() => {
        const scrollBox = document.getElementById("scrollBox");
        if (scrollBox) {
            scrollBox.scrollLeft = index * 240;
        }
    }, 50);
};
let currentDayIndex = 0;

