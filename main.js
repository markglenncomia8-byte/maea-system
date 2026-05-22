import { showMenu } from "./menu.js";
import { askJarvis } from './claude.js';

export const app = document.getElementById("app");

window.onload = () => {
    showMenu();
};
