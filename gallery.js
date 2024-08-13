/*
    Crossword Grid
    Copyright (c) 2024 Alessandro Scotti
    MIT License

    Demo gallery
*/
function createSchema(element) {
    const id = element.getAttribute('data-schema-id');
    const schema = Schemas.filter(s => s.id == id)[0];
    const title = element.getAttribute('data-title');

    const html = [];

    if (title) {
        html.push(`<div class="title">${title}</div>`)
    }

    html.push(generateGridHtml(schema));

    element.innerHTML = html.join('');
}

function populateGallery() {
    const elements = document.querySelectorAll('[data-schema-id]');

    elements.forEach(element => createSchema(element));
}
