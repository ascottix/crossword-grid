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
            3: 5,
            4: [8, 12],
            5: 4,
            7: [3, 10],
            9: 6,
            10: 2
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
            2: 8,
            11: 4
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
        id: "demo9",
        grid: [
            "ruwxaex ksvaa",
            "fkfzxzl  hitb",
            "zare   fw ckc",
            "metide obyftd",
            "xl  fydvnmgo ",
            "i jjhsostiaya",
            " aexkmjvowrm",
            "mzydestfxns w",
            "lkvlso c i jg",
            " wycwim dwdkk",
            " zfiwuri  kws",
            "  r gvxbgaxu",
        ],
        numbers: "crypto",
        hints: {
            1: 13,
            2: 13,
            3: 13,
            4: 13
        }
    }, {
        id: "demo10",
        grid: [
            'aaaaaaaa aaaa',
            'a a a a a a a',
            'aaaaa aaaaaaa',
            'a a a a a a a',
            ' aaaaaaaaaaaa',
            'a a a a a   a',
            'aaaaaa aaaaaa',
            'a   a a a a a',
            'aaaaaaaaaaaa ',
            'a a a a a a a',
            'aaaaaaa aaaaa',
            'a a a a a a a',
            'aaaa aaaaaaaa'
        ]
    }, {
        id: "demo11",
        grid: [
            'aaaaaaaaa.aaaaaaaaa.aaaaaaaaa',
            'aaaaaaaaa.aaaaaaaaa.aaaaaaaaa',
            'aaaaaaaaa.aaaaaaaaa.aaa aaaaL',
            '*aaaLa aa.aaa aaBaa.*aaaaaaaa',
            'aaaaaaaaa.aaaaaaaaa.aaaaaaaa*',
            'aaaa aaaa.aaaaaaaaa.aaaaaaaaa',
            'aaaaaaaaa.aaaaaaaa*.aaaaaaaaa',
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaa*',
            'aaaaaa aa.aaaaaa aa.aaaaaaaaa',
            'aaaaaaKa*.aaaaaaaaa.aaaaaaaaa',
            'aaaaaaaaa.aaaaaaaaa.aaaaaaaaa',
            'aaaaaaaaa.aaaaa aaD.Taaaaaaaa',
            'aaaaaaaaa.aaaaaaaaa.aaaaaaaaa',
        ],
        hints: {
            3: 29,
            4: [5, 17],
            10: 7,
            12: [19, 21]
        }
    }, {
        id: "demo12",
        grid: [
            'aa|a|a|a_a|a_a_a',
            '_a|_a_a|a|a|a|_a_a_a',
            'a_a_a|a|a|a|_a_aa',
            'a|a|a|a|a|a|a_a_a',
            '_a|_a_a|_a|a|a|_a_a_a',
            'a_a_a_a|_a|_a_aa|a',
            '_a_a_a_a_a|a_a|_a_a',
            'a_a_a_a_a|_a_a_aa',
            'a|_a_a_a_aa|a|_a_a',
            'a|_a_aa|_a_a|_a_aa',
            'a|a_a|_a_a|_aa|a_a',
            'a|aaa|aaa|aa'
        ]
    }, {
        id: "demo13",
        grid: [
            '132|574|896',
            '897|163|524',
            '_5_6_4|_9_8_2|_3_1_7',
            '725|619|483',
            '689|345|271',
            '_3_4_1|_7_2_8|_6_5_9',
            '956|837|142',
            '218|496|735',
            '473|251|968'
        ],
        hints: {
            1: [1, 4, 7],
            2: [3, 8],
            3: [2, 5, 9],
            4: [1, 4, 6],
            5: [3, 7],
            6: [4, 6, 9],
            7: [1, 5, 8],
            8: [2, 7],
            9: [3, 6, 9]
        }
    }, {
        id: "demo14",
        grid: [
            'a_a_a_a_C_a_a_a_a_a_a_Ia',
            'a|U_a_a_a_a_a_S_a_a_aa|a',
            'a|a|a_a_a_a_a_M_a_aa|a|a',
            'B|a|a|a_A_a_a_a_aa|a|a|C',
            'a|a|a|a|a_a_a_aa|P|a|S|a',
            'a|a|M|a|a|aaa|B|a|R|a|a',
            'a|E|a|a|_a_R_ |a|a|a|a|a|a',
            'a|a|a|_a_a_a_S_a|a|a|a|a|a',
            'S|a|_a_I_a_a_a_N_a|a|a|a|I',
            'a|_a_T_a_a_a_a_a_P_a|a|a|a',
            '_a_a_C_a_a_a_a_a_a_U_a|T|a',
            'a_a_a_a_a_C_a_a_a_a_a_a|a',
            'GaaaaaGaaaaaa'
        ],
        hints: {
            1: [5, 12],
            2: [2, 8],
            3: 8,
            4: [1, 5, 13],
            5: [10, 12],
            6: [3, 9, 11],
            7: [2, 6],
            8: 7,
            9: [1, 4, 8, 13],
            10: [3, 9],
            11: [3, 10, 12],
            12: 6,
            13: [1, 7, 13]
        }
    }, {
        id: "demo15",
        grid: [
            '     a   aaaa a',
            '     aa aaaaaaa',
            '  a  aa aaaaaaa',
            ' aaa aaaaaa aaa',
            '  aaaaaaaaa  aa',
            'aaaaaaaaaaaa a ',
            'aaaaaaaaa      ',
            ' aaaaaaaaaaaa  ',
            ' a aaaa aaaaaaa',
            '    aa   aaaaa '
        ]
    }, {
        id: "demo16",
        grid: [
            '_a|aaaaa_aaa',
            '_a|aa_aaa|_a|a_a',
            'aaa|_a|aaa_a|_a',
            'aaaa_aaa|_a|a',
            'aaa_a|_a|aaaa',
            'aa_a|_a|aaaa_a',
            'aa|_a|aaaaa|_a',
            'aaaa_aaaa|_a',
            'aa_aa|_a|aaa_a',
            'aa|a|aaaaa|a'
        ],
        numbers: {
            1: [1, , , , , 2],
            2: [, , 3, , , , , , 4],
            3: [, , , , , , 5],
            4: [, , 6],
            5: [7, , , , , , , 8],
            6: [, , , , , , , , 9],
            7: [, , , , , 10],
            8: [, , , , , 11],
            9: [, 12, , , , , , , 13],
            10: [, , , , 14]
        }
    }, {
        id: "demo17",
        grid: [
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
            'a|a|aa|a|aa|a|a',
        ],
        numbers: {
            1: [1, , , , , , 2],
            2: [, , , , , , , 3],
            3: [, , , 4],
            4: [, , 5],
            5: [, 6, , , , , , , 7],
            6: [, , , , , , , 8],
            7: [, , , , , , , , 9],
            9: [, 10, , , , , , , 11],
            11: [12],
            12: [, , , , , , , , 13],
            13: [, , , , , 14],
            14: [, , 15]
        }
    }, {
        id: "demo18",
        grid: [
            '.I_a_aa|aa',
            'a_a|aa|a|a|a',
            '_aa|a|a|a|E|a',
            'a_a|I|a|a|a|O',
            '_Ia|a|O|a|a|a',
            'a_a|a|a|a|a|a',
            '_aA|a|a|O|a|a',
            'a_a|a|A|_a_a|a',
            '_a_A_a|_a_aa|a',
            'a_a_a_a_O_a|a',
            'aaaaEaa'
        ],
        hints: {
            1: 2,
            3: 6,
            4: [3, 7],
            5: [1, 4],
            7: [2, 5],
            8: 4,
            9: 2,
            10: 5,
            11: 5
        }
    }, {
        id: "demo19",
        grid: [
            '_a_a_a_a_a|_aa',
            'a|aaaaa|a',
            'a|aaaaa|a',
            'a|aaaaa|a',
            'a|aaaaa|_a',
            'a|_a_a_a_a_ |a',
            'aaaaaaa'
        ],
        numbers: {
            1: [1, 2, 3, 4, 5, 6, 7],
            2: [24, 17, 13, 9, 15, 12, 8],
            3: [23, 3, 22, 8, 19, 4, 9],
            4: [22, 10, 21, 1, 14, 23, 10],
            5: [21, 2, 24, 20, 18, 6, 11],
            6: [20, 16, 5, 7, 11, , 12],
            7: [19, 18, 17, 16, 15, 14, 13]
        }
    }, {
        id: "demo20",
        grid: [
            'aa_aa_aaa',
            ' a|_a|a|_a|a ',
            'aa_aa_aaa',
            ' a|_a|a|_a|a ',
            'aa_aa_aaa',
            ' a|_a|a|_a|a ',
            'a_aW_aa_aa',
            'a|_a|a|_a|a|_a|a',
            'a_aa_aa_aa',
            'a|_a|a|_a|a|_a|a',
            'a_aa_aa_aa',
            'a|_a|a|_a|a|_a|a',
            'aaaaaaa'
        ],
        hints: {
            7: 3
        }
    }, {
        id: "demo21",
        author: {
            name: 'Alessandro Scotti',
            moniker: 'A. Scotti'
        },
        license: "CC-BY-SA-4.0",
        lang: "EN",
        created: "20240914",
        grid: [
            '124|563',
            '_6_3_5|_4_1_2',
            '562|134',
            '_4_1_3|_6_2_5',
            '256|341',
            '341|256',
            '......',
            'aaa|aaa',
            '_a_a_a|_a_a_a',
            'aaa|aaa',
            '_a_a_a|_a_a_a',
            'aaa|aaa',
            'aaa|aaa',
        ],
        hints: {
            1: [1, 2, , 4, , 6],
            3: [1, 5],
            4: [2, 5],
            5: [4, 5, 6],
            6: [1, 3]
        },
        numbers: {
            1: ['A', 'C', 'I', 'L', 'Y', 'N'],
            2: ['O', 'H', 'S', 'N', 'A', 'I'],
            3: ['G', 'A', 'S', 'T', 'O', 'S'],
            4: ['N', 'A', 'S', 'T', 'R', 'I'],
            5: ['W', 'T', 'L', 'E', 'I', 'A'],
            6: ['E', 'S', 'S', 'K', 'N', 'K'],
            8: [1, 2, 3, 1, 2, 3],
            9: [4, 5, 6, 4, 5, 6],
            10: [1, 2, 3, 1, 2, 3],
            11: [4, 5, 6, 4, 5, 6],
            12: [1, 2, 3, 1, 2, 3],
            13: [4, 5, 6, 4, 5, 6]
        },
        notes: "Solve the sudoku, then copy the letters corresponding to the solution numbers in the grid below. You will get a proverb."
    }, {
        id: "demo22",
        grid: [
            'aaaaaaa a aaaaaaa',
            'aaaaaaaaa aaaaaaa',
            'aa aaaaaaaaaa a a',
            'aaa  _a_a_a_a_a_a_aaaaaa',
            'aa aa|aaaaaa_a| a a ',
            ' aa a|aaaaaa|a|aaaaa',
            'aaaaa|aaaaa|aa|aaaaa',
            ' aaaa|aaaaa|aa|aaaaa',
            'aaa a|_a_a_a_a_a|_a_a|aaaaa',
            'aaaa  a a aa aaa ',
            'aaaaaaaaaaa aaa a',
            'aaaaaaaaaa aaaaaa',
            'aa aaaaaaaaaa aaa'
        ],
        numbers: {
            5: [,,,,,1,2,3,4,5,6],
            6: [,,,,,7,,,,,,8],
            7: [,,,,,9,,,,,10],
            8: [,,,,,11,,,,,12],
            9: [,,,,,13,,,,,14]
        }
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
            '(       a cloaca ',
            '         tratte b',
            '        mousse fr',
            '        elise giu',
            '        rosi gran',
            '        ose arata',
            '        na sbafo ',
            '        i aiuto o',
            '        micosi ex',
            '       )operosita'
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
            'sino borg(',
            'ove ramai',
            'lo revoca',
            'i seceda ',
            'oronero w',
            ' avaro ge',
            'prete pub',
            'rino ciac',
            'ott scena',
            'maelstrom       )'
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
            'pesaro(',
            'aramis',
            'genomi',
            'asi ir',
            'titani',
            'aaa is     )'
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
            'pesato(',
            'aramis',
            'genomi',
            'asi or',
            'titani',
            'aaa es     )'
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
