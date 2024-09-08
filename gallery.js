/*
    Crossword Grid
    Copyright (c) 2024 Alessandro Scotti
    MIT License

    Demo gallery
*/
function createGallerySchema(element) {
    const id = element.getAttribute('id');
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
    const elements = document.querySelectorAll('.schema');

    elements.forEach(element => createGallerySchema(element));
}
