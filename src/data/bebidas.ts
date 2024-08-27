import ALERGENOS from './alergenos.ts';

const bebidas = [
    {
        "id": "tes",
        "title": "Tés",
        "subcategory": true,
        "data": [
            {
                "id": "te-rojo",
                "title": "Té Rojo",
                "img": "/img/bebidas/te/te-rojo.webp",
                "data": [
                    {
                        "id": "rojo-china-pu-ehr-frutas-royal",
                        "title": "Rojo China Pu-Ehr Frutas Royal",
                        "description": "Pasas, papaya, pétalos de rosa, frambuesa, hibisco, aroma y té.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te-rojo.webp",
                    },
                    {
                        "id": "rojo-china-pu-ehr-canela-limon",
                        "title": "Rojo China Pu-Ehr Canela y Limón",
                        "description": "Trozos de canela, cáscara de limón, aroma y té.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te-rojo.webp",
                    },
                    {
                        "id": "rojo-china-pu-ehr-naranja",
                        "title": "Rojo China Pu-Ehr Naranja",
                        "description": "Trozos de naranja, aroma y té.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te-rojo.webp",
                    },
                    {
                        "id": "rojo-china-pu-ehr-garden",
                        "title": "Rojo China Pu-Ehr Garden",
                        "description": "Cáscara de naranja, azahar, frambuesa, pétalos de rosa y té.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te-rojo.webp",
                    }
                ]
            },
            {
                "id": "te-blanco",
                "title": "Té Blanco",
                "data": [
                    {
                        "id": "ruta-de-seda",
                        "title": "Ruta de Seda",
                        "description": "Flor de caléndula, jazmín, aciano, papaya, manzana, mora, aroma y té.",
                        "price": "3,70€"
                    },
                    {
                        "id": "frutas-royal",
                        "title": "Frutas Royal",
                        "description": "Trozos de fresa, frambuesa, papaya, pasas, arándanos, pétalos de rosa, aroma y té.",
                        "price": "3,70€"
                    }
                ]
            },
            {
                "id": "te-verde",
                "title": "Té Verde",
                "data": [
                    {
                        "id": "frutas-royal",
                        "title": "Frutas Royal",
                        "description": "Trozos de papaya, mango, hibisco, rosa, frambuesa, fresa, pasas, aroma y té.",
                        "price": "2,70€"
                    },
                    {
                        "id": "marroqui-hierbabuena",
                        "title": "Marroquí Hierbabuena",
                        "description": "Té especial con hierbabuena.",
                        "price": "3,20€"
                    },
                    {
                        "id": "best-harvest",
                        "title": "Best Harvest",
                        "description": "Té Verde Sencha, trozos de canela, naranja, cardamomo, anís, jengibre, pimienta, clavo y aromas.",
                        "price": "3,20€"
                    }
                ]
            },
            {
                "id": "te-negro",
                "title": "Té Negro",
                "data": [
                    {
                        "id": "turco",
                        "title": "Turco",
                        "description": "Clásico, aromático y fuerte.",
                        "price": "2,70€"
                    },
                    {
                        "id": "chai",
                        "title": "Chai",
                        "description": "Té negro con especias.",
                        "price": "2,70€"
                    },
                    {
                        "id": "regaliz",
                        "title": "Regaliz",
                        "description": "Flor de malva, vainilla, aroma de regaliz y té.",
                        "price": "2,70€"
                    },
                    {
                        "id": "fresa-y-nata",
                        "title": "Fresa y Nata",
                        "description": "Trozos de fresa, nata y té.",
                        "price": "2,70€"
                    },
                    {
                        "id": "frutas-del-bosque",
                        "title": "Frutas del Bosque",
                        "description": "Aroma de bayas de endrino, hojas de zarzamora, arándanos, aroma y té.",
                        "price": "2,70€"
                    },
                    {
                        "id": "trufa-y-chocolate",
                        "title": "Trufa y Chocolate",
                        "description": "Trozos de chocolate blanco y negro, nueces de macadamia, aroma y té.",
                        "price": "2,70€"
                    },
                    {
                        "id": "earl-grey",
                        "title": "Earl Grey",
                        "description": "Aroma de bergamota, pétalos de aciano y té.",
                        "price": "2,70€"
                    }
                ]
            },
            {
                "id": "te-rooibos",
                "title": "Té Rooibos",
                "data": [
                    {
                        "id": "cha-y-massa",
                        "title": "Cha y Massa",
                        "description": "Trozos de canela, limón, cardamomo, anís, jengibre, pimienta, clavo y té rooibos.",
                        "price": "2,70€"
                    },
                    {
                        "id": "dr-livingston",
                        "title": "Dr. Livingston",
                        "description": "Pétalos de rosa, jazmín, mango, papaya, plátano, coco y té rooibos.",
                        "price": "2,70€"
                    },
                    {
                        "id": "relaja-te",
                        "title": "Relaja-Té",
                        "description": "Tila, lemongrass, limón, girasol, azahar, melisa, aciano, aroma y té rooibos.",
                        "price": "2,70€"
                    },
                    {
                        "id": "tiramisu",
                        "title": "Tiramisú",
                        "description": "Chocolate blanco, negro, manzanilla, cacao, caramelo, aromas naturales y té rooibos.",
                        "price": "2,70€"
                    },
                    {
                        "id": "frutas-rojas",
                        "title": "Frutas Rojas",
                        "description": "Pasas, fresas, pétalos de rosa, frambuesa, grosella, bayas, aroma y té rooibos.",
                        "price": "2,70€"
                    }
                ]
            },
            {
                "id": "infusiones",
                "title": "Infusiones",
                "data": [
                    {
                        "id": "manzanilla",
                        "title": "Manzanilla",
                        "description": "Flor de manzanilla.",
                        "price": "2,20€"
                    },
                    {
                        "id": "poleo",
                        "title": "Poleo",
                        "description": "Poleo.",
                        "price": "2,20€"
                    },
                    {
                        "id": "tila",
                        "title": "Tila",
                        "description": "",
                        "price": ""
                    }
                ]
            }

        ]
    },
    {
        "id": "batidos",
        "title": "Batidos",
        "img": "/img/bebidas/batidos/batidos.webp",
        "data": [
            {
                "id": "batido-vainilla",
                "title": "Vanilla",
                "description": "",
                "price": "4,70€"
            },
            {
                "id": "batido-chocolate",
                "title": "Chocolate",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido-chocolate.webp"
            },
            {
                "id": "batido-frutas-del-bosque",
                "title": "Frutas del bosque",
                "description": "",
                "price": "4,70€"
            },
            {
                "id": "batido-fresa",
                "title": "Fresa",
                "description": "",
                "price": "4,70€"
            },
            {
                "id": "batido-matcha-yogurt",
                "title": "Matcha y yogurt",
                "description": "",
                "price": "4,70€"
            },
            {
                "id": "batido-melocoton",
                "title": "Melocotón",
                "description": "",
                "price": "4,70€"
            },
            {
                "id": "batido-oreo-cream",
                "title": "Oreo cream",
                "description": "",
                "price": "4,70€"
            },
            {
                "id": "batido-leche-merengada",
                "title": "Leche merengada",
                "description": "",
                "price": "4,70€"
            },
            {
                "id": "batido-lotus-biscoff",
                "title": "Lotus biscoff",
                "description": "",
                "price": "4,70€"
            }
        ]
    },
    {
        "id": "cervezas",
        "title": "Cervezas",
        "data": [
            {
                "id": "mahou-5-estrellas",
                "title": "Mahou 5 Estrellas",
                "price": "3,00€"
            },
            {
                "id": "mahou-tostada-0-0",
                "title": "Mahou Tostada 0,0",
                "price": "3,00€"
            },
            {
                "id": "mahou-radler",
                "title": "Mahou Radler",
                "price": "3,00€"
            },
            {
                "id": "mahou-rose",
                "title": "Mahou Rosé",
                "price": "3,00€"
            },
            {
                "id": "mahou-maestra",
                "title": "Mahou Maestra",
                "price": "3,50€"
            }
        ]
    },
    {
        "id": "refrescos",
        "title": "Refrescos",
        "data": [
            {
                "id": "coca-cola",
                "title": "Coca-cola",
                "price": "2,80€"
            },
            {
                "id": "fanta",
                "title": "Fanta",
                "price": "2,80€"
            },
            {
                "id": "sprite",
                "title": "Sprite",
                "price": "2,80€"
            },
            {
                "id": "bitter",
                "title": "Bitter",
                "price": "2,80€"
            },
            {
                "id": "trina",
                "title": "Trina",
                "price": "2,80€"
            },
            {
                "id": "tonica",
                "title": "Tónica",
                "price": "2,80€"
            },
            {
                "id": "aquarius",
                "title": "Aquarius",
                "price": "3,00€"
            },
            {
                "id": "nestea",
                "title": "Nestea",
                "price": "3,00€"
            },
            {
                "id": "agua-con-gas",
                "title": "Agua con Gas",
                "price": "2,80€"
            },
            {
                "id": "agua-sin-gas",
                "title": "Agua sin Gas",
                "price": "1,50€"
            },
            {
                "id": "zumo-pina",
                "title": "Zumo Piña",
                "price": "2,80€"
            },
            {
                "id": "zumo-melocoton",
                "title": "Zumo Melocotón",
                "price": "2,80€"
            }
        ]
    },
    {
        "id": "granizados",
        "title": "Granizados",
        "data": [
            {
                "id": "menta",
                "title": "Menta",
                "price": "3,90€"
            },
            {
                "id": "platano",
                "title": "Plátano",
                "price": "3,90€"
            },
            {
                "id": "fresa",
                "title": "Fresa",
                "price": "3,90€"
            },
            {
                "id": "melon",
                "title": "Melón",
                "price": "3,90€"
            },
            {
                "id": "pina-coco",
                "title": "Piña y Coco",
                "price": "3,90€"
            },
            {
                "id": "chicle",
                "title": "Chicle",
                "price": "3,90€"
            },
            {
                "id": "blue-tropic",
                "title": "Blue Tropic",
                "price": "3,90€"
            },
            {
                "id": "frutas-bosque",
                "title": "Frutas del Bosque",
                "price": "3,90€"
            },
            {
                "id": "kiwi",
                "title": "Kiwi",
                "price": "3,90€"
            },
            {
                "id": "naranja",
                "title": "Naranja",
                "price": "3,90€"
            },
            {
                "id": "limon",
                "title": "Limón",
                "price": "3,90€"
            },
            {
                "id": "cafe",
                "title": "Café",
                "price": "3,90€"
            }
        ]
    }
];

export default bebidas;