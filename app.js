import { consoles } from './data.js';
import { renderListItem } from './render-utils.js';

const main = document.querySelector('main');

for (let console of consoles) {
    const consoleDiv = renderListItem(console);
    main.append(consoleDiv);
}
