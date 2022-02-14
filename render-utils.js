export function renderListItemMain(console) {
    const div = document.createElement('div');
    div.classList.add('console');
    div.style.top = console.top;
    div.style.left = console.left;

    const a = document.createElement('a');
    a.href = `./gameconsoles/?id=${console.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${console.name}.jpg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = console.name;
    nameSpan.classList.add('name');

    a.append(img, nameSpan);
    div.append(a);
    return div;
}

export function renderListItem(console) {
    const div = document.createElement('div');
    div.classList.add('console');
    div.style.top = console.top;
    div.style.left = console.left;

    const a = document.createElement('a');
    a.href = `./gameconsoles/?id=${console.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${console.name}.jpg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = console.name;
    nameSpan.classList.add('name');

    const yearSpan = document.createElement('span');
    yearSpan.textContent = console.name;
    nameSpan.classList.add('year');

    const span = document.createElement('span');
    span.textContent = console.desc;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}
