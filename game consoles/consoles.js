import { consoles } from '../data.js';
import { findById } from '../utils.js';

const consoleName = document.getElementById('console-name');
const consoleImage = document.getElementById('console-image');
const consoleDesc = document.getElementById('console-sounds');

const params = new URLSearchParams(window.location.search);
const console = findById(params.get('id'), consoles);
//make sure to get proper image tag added
consoleName.textContent = console.name;
consoleImage.src = `../assets/${console.name}.svg`;
consoleDesc.textContent = console.desc;