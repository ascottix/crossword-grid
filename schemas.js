/*
    Crossword puzzles
    Copyright (c) 2024 Alessandro Scotti
    CC-BY-SA-4.0 License
*/
const Schemas = [
    {
        id: "demo1",
        grid: [
            '..aaaaaaaaaaaaa.a',
            'aaa...a..a...a..a',
            'a.a.aaaaaa.a.aaaa',
            'a.a.a....a.aaa..a',
            'aaaaaaa.aaaa.aaaa',
            'a...a...a..a.a..a',
            'aaaaaaaaaaaaaaaa.',
            'a.a.a...a..a.a.a.',
            'a.a.a..aaaaa.a.a.',
            'aaaaaaaaa.a.aaaaa',
            'a.a.a..a..a.....a',
            'a.a.a.aaaaaaaa..a',
            'a.a....a..a..a..a',
            'aaaaaaaaa.aaaaaaa'
        ]
    }, {
        id: "demo2",
        grid: [
            'aaaa aaa aaaa',
            ' aa aaa aaa a',
            'aa aaa aaa aa',
            'a aaa aaa aa ',
            'aaaa aaa aaaa',
            ' aa aaa aaa a',
            'aa aaa aaa aa',
            'a aaa aaa aa ',
            'aaaa aaa aaaa'
        ]
    }, {
        id: "demo3",
        grid: [
            'aa   aaiaaaa',
            'aaa a   aaaa',
            'a aacaaaa aa',
            '  aaaaao aaa',
            'a aeaaaaaa',
            'a aaaaaa a a',
            'nnnnn nnnnnn',
            'aaa  a ddddd',
            'aa eeeeeeeee',
            'dddddddd d d'
        ],
        help: {
            12: 3,
            18: 6,
            19: 3,
            21: 2,
            24: 3,
            26: 4,
            31: 5,
            33: 3,
            36: 2
        }
    }, {
        id: "demo4",
        grid: [
            'aaaaaaaaaaaa  aaaaaa  ',
            'aaaaaa aaaa aaaaaaaaaa',
            'aa   aaaa  aaaaaa aaaa',
            'aaaaaaa  aaaaa aaaaaaa',
            'a aaa aaaaaaa aa a aaa',
            ' aaaaaaaaaaaaaaaaaaaaa',
            'aaaaaaaaaaaaaaa aaa aa',
            'aaaaaaaaaaaa aaaaaaaa ',
            'aaaaaaaaaaa aaaaaaaaaa',
            'aaaa aaaaa aaaaaaaaaa ',
            'a aaaaaaa aaaaaaaaaa a',
            '   aaaa  aaaaa aa aaaa'
        ]
    }, {
        id: "demo5",
        grid: [
            'aaaaaaaaa',
            'aaaa? aUa',
            'aaa aa?aa',
            'aa?aaaaa?',
            'a?aaaaaaa',
            'aaaaaaaa?',
            '?aaaaaa a',
            'aaaaaaa?a',
            'a?aaaaaaa',
            'a?aaaaaa?',
            ' aaYaaaaa',
            'aaa ?aaaa',
            'aaaaa?a?a'
        ],
        help: {
            9: 2,
            26: 3
        }
    }, {
        id: "demo6",
        grid: [
            'cgpteglia',
            'ilcrzappa',
            'caeaabsts',
            'afpgltcoi',
            'lgtaadicn',
            'apirrmoct',
            'nlblooeoo',
            'vxlgetlhm',
            'rmelmaaao'
        ],
        definitions: {
            p: [
                'agile',
                'caldo',
                'cicala',
                'legame',
                'melma',
                'parola',
                'pratico',
                'sintomo',
                'teglia',
                'tocco',
                'trota',
                'zappa'
            ]
        }
    }, {
        id: "demo7",
        grid: [
            'aa-aaa-aa-aaa aa-aaa-aaa aa-aa-aaa-aa',
            ' aaa-aa aaa-aa-aa aa-aaa-aa aaa',
            'aaa-aaa aaa-aa-aaa aaa-aa-aa aaa-aaa',
            'aaa aaa-aa-aa aaa-aaa-aaa aaa-aaa ',
            'aaa-aa-aaa-aa aa-aa-aaa aaa-aaa-aa-aaa',
            ' aaa-aa aaa-aaa-aaa aaa-aa-aa aa',
            'aa-aaa aaa-aa-aaa aa-aa-aa aaa-aaa',
            'aaa aaa-aa-aa aaa-aaa-aaa aa-aaa ',
            'aaa-aa-aa-aaa aaa-aaa-aa aaa-aa-aa-aaa'
        ]
    }, {
        author: {
            name: 'Alessandro Scotti',
            moniker: 'A. Scotti'
        },
        license: "CC-BY-SA-4.0",
        lang: "IT",
        id: "20240805.1",
        grid: [
            'bz fantino scriba',
            'r cetara notaio g',
            'amarene mirino pe',
            'mulini parare fan',
            'irate perito suez',
            'tata musica mogli',
            'oto casino canale',
            '1       a cloaca ',
            '         tratte b',
            '        mousse fr',
            '        elise giu',
            '        rosi gran',
            '        ose arata',
            '        na sbafo ',
            '        i aiuto o',
            '        micosi ex',
            '       1operosita'
        ],
        picture: 'anstett.jpg',
        picture_alt: 'Dorothy Anstett'
    }, {
        author: {
            name: 'Alessandro Scotti',
            moniker: 'A. Scotti'
        },
        license: "CC-BY-SA-4.0",
        lang: "IT",
        id: "20240806.1",
        grid: [
            'aspo garitta scat',
            'cia cerume realta',
            'cartolina pessimo',
            'a timida penoso i',
            ' metodo fetido ps',
            'gonadi monili cam',
            'atona karate xeno',
            'sino borg1',
            'ove ramai',
            'lo revoca',
            'i seceda ',
            'oronero w',
            ' avaro ge',
            'prete pub',
            'rino ciac',
            'ott scena',
            'maelstrom       1'
        ],
        picture: 'anstett.jpg',
        picture_alt: 'Dorothy Anstett'
    }, {
        author: {
            name: 'Alessandro Scotti',
            moniker: 'A. Scotti'
        },
        license: "CC-BY-SA-4.0",
        lang: "IT",
        id: "20240809.1",
        created: "20240809",
        grid: [
            'pesaro1',
            'aramis',
            'genomi',
            'asi ir',
            'titani',
            'aaa is     1'
        ],
        help: {
            7: 2,
            11: 5
        },
        picture: 'wanda.jpg',
        picture_alt: 'Wanda Osiris'
    }, {
        author: {
            name: 'Alessandro Scotti',
            moniker: 'A. Scotti'
        },
        license: "CC-BY-SA-4.0",
        lang: "IT",
        id: "20240809.1v2",
        created: "20240809",
        grid: [
            'pesato1',
            'aramis',
            'genomi',
            'asi or',
            'titani',
            'aaa es     1'
        ],
        help: {
            7: 2,
            11: 5
        },
        picture: 'wanda.jpg',
        picture_alt: 'Wanda Osiris'
    }, {
        author: {
            name: 'Alessandro Scotti',
            moniker: 'A. Scotti'
        },
        license: "CC-BY-SA-4.0",
        lang: "IT",
        id: "20240810.1",
        created: "20240810",
        grid: [
            ' bazar  earl',
            'all niger  e',
            'montecitorio',
            ' coesione n ',
            'pc stria atg',
            ' azteca t rl',
            'creato erbai',
            'ventilazione',
            ' t ecodiesel',
            'per o morato'
        ],
    }, {
        author: {
            name: 'Alessandro Scotti',
            moniker: 'A. Scotti'
        },
        license: "CC-BY-SA-4.0",
        lang: "IT",
        id: "20240811.1",
        created: "20240811",
        grid: [
            '      p',
            '     cip',
            '    alveo',
            '   alianti',
            '  etto.arsa',
            ' arie...etci',
            'clip.....rete',
            ' acid...dito',
            '  acai.poco',
            '   orologi',
            '    esule',
            '     ace',
            '      a'
        ],
    }];
