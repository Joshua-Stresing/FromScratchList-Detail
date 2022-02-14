import { consoles } from '../data.js';
import { findById } from '../utils.js';

const consoleName = document.getElementById('console-name');
const consoleYear = document.getElementById('console-year');
const consoleDesc = document.getElementById('console-desc');
const consoleImage = document.getElementById('console-image');

const params = new URLSearchParams(window.location.search);
const console = findById(params.get('id'), consoles);

consoleName.textContent = console.name;
consoleYear.textContent = console.year;
consoleDesc.textContent = console.desc;
consoleImage.src = `../assets/${console.name}.jpg`;

