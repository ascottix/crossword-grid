/*
    Crossword Grid
    Copyright (c) 2024 Alessandro Scotti
    MIT License
*/
const CssClass = Object.freeze({
    GridContainer: 'grid-container',
    PicturePlaceholer: 'placeholder',
    Cell: 'cell',
    CellHasNumber: 'number',
    CellHasTwoLetters: 'bi',
    CellIsEmpty: 'empty',
    CellIsHole: 'hole',
    CellEmptyHidden: 'hidden',
    CellContentIsVisible: 'revealed',
    CellHasBorderLeft: 'bl',
    CellHasBorderRight: 'br',
    CellHasBorderTop: 'bt',
    CellHasBorderBottom: 'bb',
});

function generateGridHtml(schema) {
    // Splits a grid line definition into cells
    function lineToCells(line) {
        return line.indexOf('-') > 0 ?
            line.replaceAll(' ', '- -').replace(/^-|-$/, '').split('-') :
            line.split('')
    }

    // Convert the grid definition in a more usable format
    const grid = schema.grid.map(line => lineToCells(line));
    const gridWidth = Math.max(...grid.map(line => line.length));
    const gridHeight = grid.length;

    // Returns the grid text at the specified coordinates
    function textAt(x, y) {
        const lineParts = grid[y] || [];

        return lineParts[x] || '';
    }

    // Returns true if a character represents an empty cell (i.e. a word separator or part of a picture)
    function isEmpty(x, y) {
        return !/[a-z]/i.test(textAt(x, y));
    }

    // Creates a key from a cell coordinates
    function keyFor(x, y) {
        return `${x}:${y}`;
    }

    // First pass: look for picture placeholder
    const placeholderRect = {};
    let inPlaceholder = false;

    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const c = textAt(x, y);

            if (/[0-9]/.test(c)) {
                if (!inPlaceholder) {
                    inPlaceholder = true;
                    placeholderRect.sx = x;
                    placeholderRect.sy = y;
                } else {
                    placeholderRect.ex = x + 1;
                    placeholderRect.ey = y + 1;
                }
            }
        }
    }

    // Returns true if the specified cell is inside a placeholder
    function isInPlaceholder(x, y) {
        return x >= placeholderRect.sx && x < placeholderRect.ex && y >= placeholderRect.sy && y < placeholderRect.ey;
    }

    // Second pass: locate border cells (cells that are empty and that are connected to the grid border)
    const holeIndex = {};

    function isHoleAt(x, y) {
        return x < 0 || y < 0 || x >= gridWidth || y >= gridHeight || holeIndex[keyFor(x, y)];
    }

    function findHoles() {
        let found = 0;

        for (let y = 0; y < gridHeight; y++) {
            for (let x = 0; x < gridWidth; x++) {
                if (!isHoleAt(x, y) && (isEmpty(x, y) && !isInPlaceholder(x, y))) {
                    if (textAt(x, y) == '.' || isHoleAt(x - 1, y) || isHoleAt(x + 1, y) || isHoleAt(x, y - 1) || isHoleAt(x, y + 1)) {
                        holeIndex[keyFor(x, y)] = true;
                        found++;
                    }
                }
            }
        }

        return found;
    }

    while (findHoles() > 0);

    // Third pass: assign borders to cells (this is necessary to support the modern style)
    const borderCssClasses = {};

    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const borders = [];

            isHoleAt(x - 1, y) && borders.push(CssClass.CellHasBorderLeft);
            isHoleAt(x + 1, y) && borders.push(CssClass.CellHasBorderRight);
            isHoleAt(x, y - 1) && borders.push(CssClass.CellHasBorderTop);
            isHoleAt(x, y + 1) && borders.push(CssClass.CellHasBorderBottom);

            borderCssClasses[keyFor(x, y)] = borders.join(' ');
        }
    }

    // Fourth pass: assign numbers and generate the grid
    const html = [];

    function cell(classes, attrs, content) {
        const cl = [CssClass.Cell, ...classes].filter(e => e).join(' ');

        html.push(`<div class="${cl}" ${attrs}>${content}</div>`);
    }

    html.push(`<div class="${CssClass.GridContainer}" style="grid-template-columns: repeat(${gridWidth}, var(--cell-size));">`);

    let cellNumber = 0;
    const helpIndex = {}

    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const c = textAt(x, y);

            // Check to see if this cell should be numbered
            const startHoriz = isEmpty(x - 1, y) && !isEmpty(x + 1, y);
            const startVert = isEmpty(x, y - 1) && !isEmpty(x, y + 1);
            const hasNumber = !isEmpty(x, y) && (startHoriz || startVert);

            if (isEmpty(x, y)) {
                if (x == placeholderRect.sx && y == placeholderRect.sy) {
                    // The placeholder area goes inside a single cell
                    const styles = [
                        `grid-column: span ${placeholderRect.ex - placeholderRect.sx}`,
                        `grid-row: span ${placeholderRect.ey - placeholderRect.sy}`
                    ];

                    const classes = [CssClass.PicturePlaceholer];

                    x == 0 && classes.push(CssClass.CellHasBorderLeft);
                    placeholderRect.ex == gridWidth && classes.push(CssClass.CellHasBorderRight);
                    y == 0 && classes.push(CssClass.CellHasBorderTop);
                    placeholderRect.ey == gridHeight && classes.push(CssClass.CellHasBorderBottom);

                    // Remove the borders that are already provided by the grid itself
                    x == 0 && styles.push('border-left: none');
                    y == 0 && styles.push('border-top: none');
                    placeholderRect.ex == gridWidth && styles.push('border-right: none');
                    placeholderRect.ey == gridHeight && styles.push('border-bottom: none');

                    // Assign a picture if specified
                    const content = schema.picture ? `<img src='${schema.picture}' alt='${schema.picture_alt || schema.picture}'>` : '';

                    cell(classes, `style="${styles.join(';')};"`, content, '');
                } else if (!isInPlaceholder(x, y)) {
                    // Empty cell (word separator)
                    cell([CssClass.CellIsEmpty, holeIndex[keyFor(x, y)] && CssClass.CellIsHole, c == '?' && CssClass.CellEmptyHidden], '', '');
                }
            } else if (hasNumber) {
                // Numbered cell
                cellNumber++;

                cell([CssClass.CellHasNumber, borderCssClasses[keyFor(x, y)], c.length == 2 && CssClass.CellHasTwoLetters], `data-number=${cellNumber}`, c);

                // Check to see if there's some help associated to this number
                const help = (schema.help || {})[cellNumber];
                if (help) {
                    helpIndex[`${x + help - 1}:${y}`] = true;
                }
            } else {
                // Standard cell
                const help = helpIndex[`${x}:${y}`];

                cell([help && CssClass.CellContentIsVisible, borderCssClasses[keyFor(x, y)], c.length == 2 && CssClass.CellHasTwoLetters], '', c);
            }
        }
    }

    html.push('</div>');

    return html.join('');
}
