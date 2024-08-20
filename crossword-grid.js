/*
    Crossword Grid
    Copyright (c) 2024 Alessandro Scotti
    MIT License
*/
const CssClass = Object.freeze({
    GridContainer: 'grid-container',
    PicturePlaceholer: 'placeholder',
    GroupOf: 'group',
    Cell: 'cell',
    CellHasNumber: 'number',
    CellIsEmpty: 'empty',
    CellIsEmptyHidden: 'hidden',
    CellIsHole: 'hole',
    CellContentIsVisible: 'revealed',
    CellHasBorderLeft: 'bl', // A border is betwen a cell and outside the grid
    CellHasBorderRight: 'br',
    CellHasBorderTop: 'bt',
    CellHasBorderBottom: 'bb',
    CellHasDividerLeft: 'dl', // A divider is between two cells
    CellHasDividerRight: 'dr',
    CellHasDividerTop: 'dt',
    CellHasDividerBottom: 'db',
});

const SpChar = Object.freeze({
    VerticalDivider: '|',
    HorizontalDivider: '_',
    WordGroupSeparator: '-',
    EmptyCell: ' ',
    HiddenEmptyCell: '?',
    HoleCell: '.',
    NotEmptyRegEx: /[a-z]/i, // Cell contains text
    PlaceholderRegEx: /[0-9]/
});

function generateGridHtml(schema) {
    // Splits a grid line definition into cells
    function lineToCells(line) {
        return line.indexOf(SpChar.WordGroupSeparator) > 0 ?
            line.replaceAll(SpChar.EmptyCell, SpChar.WordGroupSeparator + SpChar.EmptyCell + SpChar.WordGroupSeparator).replace(new RegExp(`^${SpChar.WordGroupSeparator}|${SpChar.WordGroupSeparator}$`), '').split(SpChar.WordGroupSeparator) :
            line.split('');
    }

    // Convert the grid definition to a more usable format
    const grid = schema.grid.map(line => lineToCells(line));
    const gridHeight = grid.length;

    // Creates a cell key from a cell coordinates
    function keyFor(x, y) {
        return `${x}:${y}`;
    }

    // Adds a CSS class to a cell
    const cellCssClasses = {};

    function getCssOfCell(x, y) {
        return cellCssClasses[keyFor(x, y)] || [];
    }

    function addCssToCell(x, y, cl) {
        const k = keyFor(x, y);
        cellCssClasses[k] = cellCssClasses[k] || [];
        cellCssClasses[k].push(cl);
    }

    // Locate dividers and put them aside (note: this pass may change the grid content and must come first)
    for (let y = 0; y < gridHeight; y++) {
        const line = grid[y];

        for (let x = 0; x < line.length; x++) {
            const c = line[x];

            if (c == SpChar.VerticalDivider || c == SpChar.HorizontalDivider) {
                if (c == SpChar.VerticalDivider) {
                    addCssToCell(x, y, CssClass.CellHasDividerLeft);
                    addCssToCell(x - 1, y, CssClass.CellHasDividerRight);
                } else {
                    addCssToCell(x, y, CssClass.CellHasDividerBottom);
                    addCssToCell(x, y + 1, CssClass.CellHasDividerTop);
                }
                // Remove divider special character and stay in place
                line.splice(x, 1).join('');
                x--;
            }
        }

        grid[y] = line; // Put back the line stripped of dividers
    }

    // Now we can compute the grid width
    const gridWidth = Math.max(...grid.map(line => line.length));

    // Returns the grid text at the specified coordinates
    function textAt(x, y) {
        const lineParts = grid[y] || [];

        return lineParts[x] || '';
    }

    // Returns true if a character represents an empty cell (i.e. a word separator or part of a picture)
    function isEmpty(x, y) {
        return !SpChar.NotEmptyRegEx.test(textAt(x, y));
    }

    // Look for picture placeholder
    const placeholderRect = {};
    let inPlaceholder = false;

    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const c = textAt(x, y);

            if (SpChar.PlaceholderRegEx.test(c)) {
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

    // Locate border cells (cells that are empty and that touch the grid outside)
    const holeIndex = {};

    function isHoleAt(x, y) {
        return x < 0 || y < 0 || x >= gridWidth || y >= gridHeight || holeIndex[keyFor(x, y)];
    }

    function findHoles() {
        let found = 0;

        for (let y = 0; y < gridHeight; y++) {
            for (let x = 0; x < gridWidth; x++) {
                if (!isHoleAt(x, y) && (isEmpty(x, y) && !isInPlaceholder(x, y))) {
                    if (textAt(x, y) == SpChar.HoleCell || isHoleAt(x - 1, y) || isHoleAt(x + 1, y) || isHoleAt(x, y - 1) || isHoleAt(x, y + 1)) {
                        holeIndex[keyFor(x, y)] = true;
                        found++;
                    }
                }
            }
        }

        return found;
    }

    while (findHoles() > 0);

    // Assign borders to cells (this is necessary to support the modern style)
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            isHoleAt(x - 1, y) && addCssToCell(x, y, CssClass.CellHasBorderLeft);
            isHoleAt(x + 1, y) && addCssToCell(x, y, CssClass.CellHasBorderRight);
            isHoleAt(x, y - 1) && addCssToCell(x, y, CssClass.CellHasBorderTop);
            isHoleAt(x, y + 1) && addCssToCell(x, y, CssClass.CellHasBorderBottom);
        }
    }

    // Assign numbers and generate the grid
    const html = [];
    let cellNumber = 0;

    html.push(`<div class="${CssClass.GridContainer}" style="grid-template-columns: repeat(${gridWidth}, var(--cell-size));">`);

    function cell(classes, attrs, content) {
        const cl = [CssClass.Cell, ...classes].filter(e => e).join(' ');

        html.push(`<div class="${cl}" ${attrs}>${content}</div>`);
    }

    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const c = textAt(x, y);

            if(c.length > 1) {
                addCssToCell(x, y, `${CssClass.GroupOf}${c.length}`);
            }

            // Check to see if this cell should be numbered
            const canStartHoriz = isEmpty(x - 1, y) || getCssOfCell(x, y).includes(CssClass.CellHasDividerLeft);
            const canEndHoriz = !isEmpty(x + 1, y) && !getCssOfCell(x + 1, y).includes(CssClass.CellHasDividerLeft);;
            const canStartVert = isEmpty(x, y - 1) || getCssOfCell(x, y).includes(CssClass.CellHasDividerTop);
            const canEndVert = !isEmpty(x, y + 1) && !getCssOfCell(x, y + 1).includes(CssClass.CellHasDividerTop);
            const hasNumber = !isEmpty(x, y) && ((canStartHoriz && canEndHoriz) || (canStartVert && canEndVert));

            if (isEmpty(x, y)) {
                if (x == placeholderRect.sx && y == placeholderRect.sy) {
                    // The placeholder area goes inside a single cell
                    const styles = [
                        `grid-column: span ${placeholderRect.ex - placeholderRect.sx}`,
                        `grid-row: span ${placeholderRect.ey - placeholderRect.sy}`
                    ];

                    // Remove the borders that are already provided by the grid itself
                    x == 0 && styles.push('border-left: none');
                    y == 0 && styles.push('border-top: none');
                    placeholderRect.ex == gridWidth && styles.push('border-right: none');
                    placeholderRect.ey == gridHeight && styles.push('border-bottom: none');

                    // Assign a picture if specified
                    const content = schema.picture ? `<img src='${schema.picture}' alt='${schema.picture_alt || schema.picture}'>` : '';

                    cell([CssClass.PicturePlaceholer], `style="${styles.join(';')};"`, content, '');
                } else if (!isInPlaceholder(x, y)) {
                    // Empty cell (word separator)
                    cell([CssClass.CellIsEmpty, holeIndex[keyFor(x, y)] && CssClass.CellIsHole, c == SpChar.HiddenEmptyCell && CssClass.CellIsEmptyHidden], '', '');
                }
            } else if (hasNumber) {
                // Numbered cell
                cellNumber++;

                // Check to see if there's some hint (visible text) associated to this number
                const hint = (schema.hints || {})[cellNumber];
                if (hint) {
                    addCssToCell(x + hint - 1, y, CssClass.CellContentIsVisible);
                }

                cell([CssClass.CellHasNumber, ...getCssOfCell(x, y)], `data-number=${cellNumber}`, c);
            } else {
                // Standard cell
                cell(getCssOfCell(x, y), '', c);
            }
        }
    }

    html.push('</div>');

    return html.join('');
}
