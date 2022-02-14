import { consoles } from './data.js';
import { renderListItemMain } from './render-utils.js';

const main = document.querySelector('main');

for (let console of consoles) {
    const consoleDiv = renderListItemMain(console);
    main.append(consoleDiv);
}
