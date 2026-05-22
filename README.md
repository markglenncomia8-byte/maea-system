

# ⚫ MAEA OS
### Multi-Purpose Application for Engineering Analysis 
### MAEA - Engineering Calculator & Converter

[![License](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Status](https://img.shields.io/badge/Status-Active-success)](https://github.com/markglenncomia8-byte)
[![Made in PH](https://img.shields.io/badge/Made%20in-Philippines%20🇵🇭-0038a8)](https://github.com/markglenncomia8-byte)

<br/>

> A modular, AI-powered calculator and engineering toolkit built with pure vanilla JavaScript.
> No frameworks. No dependencies. Just clean code.

</div>

---

## ✨ Modules

| Module | Description |
|--------|-------------|
| 🧮 **Calculator** | Standard and scientific calculations |
| 💰 **Finance** | Simple & compound interest, loans, investment growth, budget planner, savings goal tracker, expense tracker |
| 🌡️ **Temperature** | Convert between Celsius, Fahrenheit and Kelvin |
| 📏 **Converter** | Metric and Imperial unit conversion — length, mass, volume |
| ⚛️ **Physics** | Speed, acceleration, force, kinetic energy with formula visuals |
| 🤖 **Jarvis AI** | Built-in AI assistant via OpenRouter free API |

---

## 🏗️ Project Structure

```
maea-system/
├── index.html          # Entry point
├── style.css           # Global dark theme styles
├── utils.js            # Shared utility functions
└── js/
    ├── main.js         # App bootstrap
    ├── menu.js         # Navigation & module cards
    ├── calculator.js   # Calculator module
    ├── finance.js      # Finance suite
    ├── temperature.js  # Temperature converter
    ├── converter.js    # Unit converter router
    ├── metric.js       # Metric conversions
    ├── imperial.js     # Imperial conversions
    ├── physics.js      # Physics formulas
    └── claude.js       # Jarvis AI integration
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/markglenncomia8-byte/maea-system.git

# Navigate into the folder
cd maea-system

# Open in browser
open index.html
```

No build tools, no npm, no setup — just open `index.html` in any browser and it works.

---

## 🤖 Jarvis AI Setup

MAEA has a built-in AI assistant called **Jarvis** powered by a free model via **OpenRouter**.

1. Get your free API key from [openrouter.ai](https://openrouter.ai) — no credit card needed
2. Open `claude.js`
3. Replace the placeholder with your key:

```js
const API_KEY = "your-openrouter-key-here"; // sk-or-v1-...
```

---

## 🎨 Design

- **Dark theme** with per-module gradient cards
- **Glassy UI** with backdrop blur and frosted effects
- **Mobile-first** responsive layout
- **Plus Jakarta Sans** typography
- **Zero frameworks** — pure vanilla CSS and JS

---

## 📜 License — AGPL-3.0

This project is licensed under the **GNU Affero General Public License v3.0**.

| ✅ Allowed | ❌ Not Allowed |
|-----------|--------------|
| Use and study the code | Use in closed-source projects |
| Fork for personal use | Distribute without sharing source |
| Modify and improve | Claim ownership |
| Collaborate (open an issue first) | Use commercially without open sourcing |

> If you modify and distribute this project — even as a web service — you **must** release your source code under AGPL-3.0.

Full license: [GNU AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)

---

## 🤝 Want to Collaborate?

Collaboration is welcome! But **please open an issue first** before submitting a PR.

1. Open an [Issue](https://github.com/markglenncomia8-byte/maea-system/issues) describing your idea
2. Wait for my approval
3. Fork the repo
4. Create your branch: `git checkout -b feature/your-feature`
5. Commit: `git commit -m "Add your feature"`
6. Open a Pull Request

---

## 👨‍💻 Author

**Prince** · [@markglenncomia8-byte](https://github.com/markglenncomia8-byte)
Filipino developer · Building MAEA OS and beyond 🇵🇭

---

<div align="center">
  <sub>Built with 💜 using pure vanilla JS · Zero frameworks · Zero dependencies</sub>
</div>

