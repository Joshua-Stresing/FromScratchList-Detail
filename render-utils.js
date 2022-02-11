export function renderListItem(console) {
    const div = document.createElement('div');
    div.classList.add('console');
    div.style.top = console.top;
    div.style.left = console.left;

    const a = document.createElement('a');
    a.href = `./animals/?id=${console.id}`;
//make sure to add the proper image files
    const img = document.createElement('img');
    img.src = `./assets/${console.name}.svg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = console.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = console.desc;

    a.append(img, nameSpan, span);
    div.append(a);
    return div;
}
