# maea-system
Multi-Purpose Application for Engineering Analysis - Modular engineering toolkit with AI assistant
<div align="center">

# ⚫ MAEA OS
### Multi-Purpose Application for Engineering Analysis

[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Status](https://img.shields.io/badge/Status-Active-success)](https://github.com/markglenncomia8-byte)

<br/>

> A modular, AI-powered calculator and engineering toolkit built as a progressive web app.  
> Designed for students, engineers, and curious minds.

<br/>

![MAEA Preview](https://via.placeholder.com/800x400/0d0d0f/7c6bff?text=MAEA+OS)

</div>

---

## ✨ Features

| Module | Description |
|--------|-------------|
| 🧮 **Calculator** | Standard and scientific calculations |
| 💰 **Finance** | Simple/compound interest, loans, investment growth, budget planner, savings goal tracker, expense tracker |
| 🌡️ **Temperature** | Convert between Celsius, Fahrenheit, and Kelvin |
| 📏 **Converter** | Metric and Imperial unit conversion (length, mass, volume) |
| ⚛️ **Physics** | Speed, acceleration, force, kinetic energy with formula visuals |
| 🤖 **Jarvis AI** | Built-in AI assistant powered by Claude API for physics help |

---

## 🏗️ Project Structure

```
maea-system/
├── index.html          # Entry point
├── style.css           # Global dark theme styles
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

### Run Locally

```bash
# Clone the repository
git clone https://github.com/markglenncomia8-byte/maea-system.git

# Navigate into the folder
cd maea-system

# Open in browser
open index.html
```

Or just drag `index.html` into any browser — no build tools needed!

### Prerequisites

- Any modern browser (Chrome, Firefox, Safari, Edge)
- No dependencies, no npm, no frameworks

---

## 🤖 Jarvis AI Setup

MAEA has a built-in AI assistant called **Jarvis** powered by a free AI model via **OpenRouter**.

1. Get your free API key from [openrouter.ai](https://openrouter.ai)
2. Open `js/claude.js`
3. Replace the API key placeholder with your key

```js
const API_KEY = "your-openrouter-key-here"; // sk-or-v1-...
```

> Uses a free model from OpenRouter — no credit card needed!

---

## 🎨 Design

- **Dark theme** with gradient module cards
- **Glassy UI** with backdrop blur effects
- **Mobile-first** responsive layout
- **Plus Jakarta Sans** typography
- **No frameworks** — pure vanilla CSS

---

## 📜 License

This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

### What this means:

| ✅ Allowed | ❌ Not Allowed |
|-----------|--------------|
| View and study the code | Copy and sell as your own |
| Fork for personal use | Use commercially without permission |
| Collaborate (message me first) | Redistribute without credit |
| Learn from it | Claim ownership |

> Want to collaborate or use this commercially? **Open an issue or contact me directly.**

---

## 🤝 Collaboration

Collaboration is welcome! But please **message me first** before submitting a PR.

1. Open an [Issue](https://github.com/markglenncomia8-byte/maea-system/issues) describing your idea
2. Wait for approval
3. Fork the repo
4. Create your branch: `git checkout -b feature/your-feature`
5. Commit your changes: `git commit -m 'Add your feature'`
6. Push and open a Pull Request

---

## 👨‍💻 Author

**markglenncomia8-byte**  
13 years old · Filipino developer · Building for the future

[![GitHub](https://img.shields.io/badge/GitHub-markglenncomia8--byte-181717?logo=github)](https://github.com/markglenncomia8-byte)

---

<div align="center">
  <sub>Built with 💜 and vanilla JS · No frameworks were harmed in the making of this project</sub>
</div>

