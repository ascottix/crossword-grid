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
        hints: {
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
        hints: {
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
        id: "demo8",
        grid: [
            'aa_aaa|_aaaaaa_a_a|a_aaaa',
            'aa|aa_aaaa_a_a_aaaa|aaaa',
            'a|aaaaaa_aaa|aaaaaaa|a',
            'a|aa_aa|a_aaaaaaa_a_a_aa|a',
            'a_a_aaaaaaaaa_aaaa|aaa',
            'aaaaaaaa_a_aaa|_aaaaa|a',
            '_a|_aaaaaa_a|aa_aaaa_aaaa',
            'aaaa_a_aaaa|aaaa|aaaa|a',
            'aaaaaaa|aaaaaaaaa|aa'
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
        hints: {
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
        hints: {
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
        definitions: {
            h: {
                2: 'Una azione del poker',
                4: 'Il letto di un fiume',
                6: 'Volano planando',
                8: 'Frazione di chilo',
                9: 'Totalmente bruciata',
                11: 'È meglio non darsene troppe',
                12: '___! Salute!',
                14: 'Spezzone di video',
                15: 'Ci si può navigare, ma non in barca',
                16: 'Un tipo di jazz',
                18: 'Nasconde la luna agli stolti',
                19: 'Frutto amazzonico di colore scuro',
                21: 'Non molto',
                22: 'Scandiscono il tempo',
                24: 'Così morì Napoleone',
                25: 'Fa punto per il tennista'
            },
            v: {
                1: 'Tipo di cornamusa',
                2: 'Modello di auto della Renault',
                3: 'Si sconta in carcere',
                4: "Tutt'altro che basse",
                5: 'Recipiente per liquidi',
                6: 'Del tutto inconsueto',
                7: 'Sono simili ai porcospini',
                8: 'Arbusto sempreverde ornamentale',
                10: "Un condimento dell'insalata",
                11: 'Organo per il volo',
                13: "Andato... un bel po' di tempo fa",
                17: 'Un verbo del generoso',
                18: 'Era la massima autorità nella Repubblica di Venezia',
                20: 'Indica grande quantità e sovrabbondanza',
                21: 'La posizione più ambita nella F1',
                23: 'Uno degli evangelisti'
            }
        }
    }];
