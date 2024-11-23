import ALERGENOS from './alergenos.ts';

const bebidas = [
    {
        "id": "tes",
        "title": "Tés",
        "subcategory": true,
        "img": "/img/bebidas/te/te_negro.webp",
        "data": [
            {
                "id": "te-rojo",
                "title": "Té Rojo",
                "img": "/img/bebidas/te/te_rojo.webp",
                "data": [
                    {
                        "id": "rojo-china-pu-ehr-frutas-royal",
                        "title": "Rojo China Pu-Ehr Frutas Royal",
                        "description": "Pasas, papaya, pétalos de rosa, frambuesa, hibisco, aroma y té.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te_rojo.webp",
                    },
                    {
                        "id": "rojo-china-pu-ehr-canela-limon",
                        "title": "Rojo China Pu-Ehr Canela y Limón",
                        "description": "Trozos de canela, cáscara de limón, aroma y té.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te_rojo.webp",
                    },
                    {
                        "id": "rojo-china-pu-ehr-naranja",
                        "title": "Rojo China Pu-Ehr Naranja",
                        "description": "Trozos de naranja, aroma y té.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te_rojo.webp",
                    },
                    {
                        "id": "rojo-china-pu-ehr-garden",
                        "title": "Rojo China Pu-Ehr Garden",
                        "description": "Cáscara de naranja, azahar, frambuesa, pétalos de rosa y té.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te_rojo.webp",
                    }
                ]
            },
            {
                "id": "te-blanco",
                "title": "Té Blanco",
                "img": "/img/bebidas/te/te_blanco.webp",
                "data": [
                    {
                        "id": "ruta-de-seda",
                        "title": "Ruta de Seda",
                        "description": "Flor de caléndula, jazmín, aciano, papaya, manzana, mora, aroma y té.",
                        "price": "3,70€",
                        "img": "/img/bebidas/te/te_blanco.webp",
                    },
                    {
                        "id": "frutas-royal",
                        "title": "Frutas Royal",
                        "description": "Trozos de fresa, frambuesa, papaya, pasas, arándanos, pétalos de rosa, aroma y té.",
                        "price": "3,70€",
                        "img": "/img/bebidas/te/te_blanco.webp",
                    }
                ]
            },
            {
                "id": "te-verde",
                "title": "Té Verde",
                "img": "/img/bebidas/te/te_verde.webp",
                "data": [
                    {
                        "id": "frutas-royal",
                        "title": "Frutas Royal",
                        "description": "Trozos de papaya, mango, hibisco, rosa, frambuesa, fresa, pasas, aroma y té.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/te_verde.webp",
                    },
                    {
                        "id": "marroqui-hierbabuena",
                        "title": "Marroquí Hierbabuena",
                        "description": "Té especial con hierbabuena.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te_verde.webp",
                    },
                    {
                        "id": "best-harvest",
                        "title": "Best Harvest",
                        "description": "Té Verde Sencha, trozos de canela, naranja, cardamomo, anís, jengibre, pimienta, clavo y aromas.",
                        "price": "3,20€",
                        "img": "/img/bebidas/te/te_verde.webp",
                    }
                ]
            },
            {
                "id": "te-negro",
                "title": "Té Negro",
                "img": "/img/bebidas/te/te_negro.webp",
                "data": [
                    {
                        "id": "turco",
                        "title": "Turco",
                        "description": "Clásico, aromático y fuerte.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/te_negro.webp",
                        "alergenos": [ALERGENOS.FRUTOS]
                    },
                    {
                        "id": "chai",
                        "title": "Chai",
                        "description": "Té negro con especias.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/te_negro.webp",
                    },
                    {
                        "id": "regaliz",
                        "title": "Regaliz",
                        "description": "Flor de malva, vainilla, aroma de regaliz y té.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/te_negro.webp",
                    },
                    {
                        "id": "fresa-y-nata",
                        "title": "Fresa y Nata",
                        "description": "Trozos de fresa, nata y té.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/te_negro.webp",
                    },
                    {
                        "id": "frutas-del-bosque",
                        "title": "Frutas del Bosque",
                        "description": "Aroma de bayas de endrino, hojas de zarzamora, arándanos, aroma y té.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/te_negro.webp",
                    },
                    {
                        "id": "trufa-y-chocolate",
                        "title": "Trufa y Chocolate",
                        "description": "Trozos de chocolate blanco y negro, nueces de macadamia, aroma y té.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/te_negro.webp",
                    },
                    {
                        "id": "earl-grey",
                        "title": "Earl Grey",
                        "description": "Aroma de bergamota, pétalos de aciano y té.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/te_negro.webp",
                        "alergenos": [ALERGENOS.SOJA, ALERGENOS.LACTEOS]
                    }
                ]
            },
            {
                "id": "te-rooibos",
                "title": "Té Rooibos",
                "img": "/img/bebidas/te/rooibos.webp",
                "data": [
                    {
                        "id": "cha-y-massa",
                        "title": "Cha y Massa",
                        "description": "Trozos de canela, limón, cardamomo, anís, jengibre, pimienta, clavo y té rooibos.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/rooibos.webp",
                    },
                    {
                        "id": "dr-livingston",
                        "title": "Dr. Livingston",
                        "description": "Pétalos de rosa, jazmín, mango, papaya, plátano, coco y té rooibos.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/rooibos.webp",
                    },
                    {
                        "id": "relaja-te",
                        "title": "Relaja-Té",
                        "description": "Tila, lemongrass, limón, girasol, azahar, melisa, aciano, aroma y té rooibos.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/rooibos.webp",
                    },
                    {
                        "id": "tiramisu",
                        "title": "Tiramisú",
                        "description": "Chocolate blanco, negro, manzanilla, cacao, caramelo, aromas naturales y té rooibos.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/rooibos.webp",
                        "alergenos": [ALERGENOS.LACTEOS]
                    },
                    {
                        "id": "frutas-rojas",
                        "title": "Frutas Rojas",
                        "description": "Pasas, fresas, pétalos de rosa, frambuesa, grosella, bayas, aroma y té rooibos.",
                        "price": "2,70€",
                        "img": "/img/bebidas/te/rooibos.webp",
                    }
                ]
            },
            {
                "id": "infusiones",
                "title": "Infusiones",
                "img": "/img/bebidas/te/infusion.webp",
                "data": [
                    {
                        "id": "manzanilla",
                        "title": "Manzanilla",
                        "description": "Flor de manzanilla.",
                        "price": "2,20€",
                        "img": "/img/bebidas/te/infusion.webp",
                    },
                    {
                        "id": "poleo",
                        "title": "Poleo",
                        "description": "Poleo.",
                        "price": "2,20€",
                        "img": "/img/bebidas/te/infusion.webp",
                    },
                    {
                        "id": "tila",
                        "title": "Tila",
                        "description": "",
                        "price": "2,20€",
                        "img": "/img/bebidas/te/infusion.webp",
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
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_vainilla.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "batido-chocolate",
                "title": "Chocolate",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_chocolate.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "batido-frutas-del-bosque",
                "title": "Frutas del bosque",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_frutas_bosque.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "batido-fresa",
                "title": "Fresa",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_fresa.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "batido-matcha-yogurt",
                "title": "Matcha y yogurt",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_matcha_yogurt.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "batido-melocoton",
                "title": "Melocotón",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_melocoton.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "batido-oreo-cream",
                "title": "Oreo cream",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_oreo.webp",
                "alergenos": [ALERGENOS.LACTEOS, ALERGENOS.GLUTEN, ALERGENOS.SOJA]
            },
            {
                "id": "batido-leche-merengada",
                "title": "Leche merengada",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_leche_merengada.webp",
                "alergenos": [ALERGENOS.LACTEOS, ALERGENOS.GLUTEN, ALERGENOS.SOJA]
            },
            {
                "id": "batido-lotus-biscoff",
                "title": "Lotus biscoff",
                "description": "",
                "price": "4,70€",
                "img": "/img/bebidas/batidos/batido_lotus.webp",
                "alergenos": [ALERGENOS.LACTEOS, ALERGENOS.GLUTEN, ALERGENOS.SOJA]
            }
        ]
    },
    {
        "id": "refrescos",
        "title": "Refrescos",
        "img": "/img/bebidas/refrescos/refrescos.webp",
        "data": [
            {
                "id": "coca-cola",
                "title": "Coca-cola",
                "price": "2,80€",
                "img": "/img/bebidas/refrescos/coca_cola.webp",
            },
            {
                "id": "fanta",
                "title": "Fanta",
                "price": "2,80€",
                "img": "/img/bebidas/refrescos/fanta.webp",
            },
            {
                "id": "sprite",
                "title": "Sprite",
                "price": "2,80€",
                "img": "/img/bebidas/refrescos/sprite.webp",
            },
            {
                "id": "trina",
                "title": "Trina",
                "price": "2,80€",
                "img": "/img/bebidas/refrescos/trina.webp",
            },
            {
                "id": "tonica",
                "title": "Tónica",
                "price": "2,80€",
                "img": "/img/bebidas/refrescos/tonica.webp",
            },
            {
                "id": "nestea",
                "title": "Nestea",
                "price": "3,00€",
                "img": "/img/bebidas/refrescos/nestea.webp",
            },
            {
                "id": "agua-con-gas",
                "title": "Agua con Gas",
                "price": "2,80€",
                "img": "/img/bebidas/refrescos/agua_gas.webp",
            },
            {
                "id": "agua-sin-gas",
                "title": "Agua sin Gas",
                "price": "1,50€",
                "img": "/img/bebidas/refrescos/agua.webp",
            },
            {
                "id": "zumo-pina",
                "title": "Zumo Piña",
                "price": "2,80€",
                "img": "/img/bebidas/refrescos/zumo_pina.webp",
            },
            {
                "id": "zumo-melocoton",
                "title": "Zumo Melocotón",
                "price": "2,80€",
                "img": "/img/bebidas/refrescos/zumo_melocoton.webp",
            }
        ]
    },
    {
        "id": "granizados",
        "title": "Granizados",
        "img": "/img/bebidas/granizados/granizados.webp",
        "data": [
            {
                "id": "menta",
                "title": "Menta",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_menta.webp",
            },
            {
                "id": "platano",
                "title": "Plátano",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_platano.webp",
            },
            {
                "id": "fresa",
                "title": "Fresa",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_fresa.webp",
            },
            {
                "id": "melon",
                "title": "Melón",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_melon.webp",
            },
            {
                "id": "pina-coco",
                "title": "Piña y Coco",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_pina_coco.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "chicle",
                "title": "Chicle",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_chicle.webp",
            },
            {
                "id": "blue-tropic",
                "title": "Blue Tropic",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_blue_tropic.webp",
            },
            {
                "id": "frutas-bosque",
                "title": "Frutas del Bosque",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_frutas_bosque.webp",
            },
            {
                "id": "kiwi",
                "title": "Kiwi",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_kiwi.webp",
            },
            {
                "id": "naranja",
                "title": "Naranja",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_naranja.webp",
            },
            {
                "id": "limon",
                "title": "Limón",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_limon.webp",
            },
            {
                "id": "cafe",
                "title": "Café",
                "price": "3,90€",
                "img": "/img/bebidas/granizados/granizado_cafe.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
        ]
    }
];

export default bebidas;