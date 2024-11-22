import ALERGENOS from './alergenos.ts';

const desayunos = [
    {
        "id": "cafes",
        "title": "Cafés",
        "img": "/img/desayunos/cafe_croissant.webp",
        "data": [
            {
                "id": "1",
                "title": "Café y Tostada",
                "description": "Mantequilla y mermelada",
                "price": "3,00€",
                "img": "/img/desayunos/cafe_tostada.webp",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.LACTEOS]
            },
            {
                "id": "2",
                "title": "Café y Tarta",
                "description": "Preguntar sabor",
                "price": "6,00€",
                "img": "/img/desayunos/cafe_tarta.webp",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "3",
                "title": "Café y Paninni",
                "description": "Tumaca o César",
                "price": "5,50€",
                "img": "/img/desayunos/cafe_panini.webp",
                "alergenos": [ALERGENOS.PESCADO, ALERGENOS.MOSTAZA, ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "4",
                "title": "Café y Croissant Mixto",
                "description": "",
                "price": "4,50€",
                "img": "/img/desayunos/cafe_croissant_mixto.webp",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "5",
                "title": "Café y Croque Monsieur",
                "description": "",
                "price": "5,20€",
                "img": "/img/desayunos/cafe_croque_monsieur.webp",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "6",
                "title": "Café y Croissant",
                "description": "",
                "price": "2,90€",
                "img": "/img/desayunos/cafe_croissant.webp",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "7",
                "title": "Café y Muffin",
                "description": "Lux +0,10€",
                "price": "3,90€",
                "img": "/img/desayunos/cafe_muffin.webp",
                "alergenos": [ALERGENOS.FRUTOS, ALERGENOS.SOJA, ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "8",
                "title": "Café y Croissant Tostado",
                "description": "",
                "price": "3,50€",
                "img": "/img/desayunos/cafe_croissant.webp",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "9",
                "title": "Café y Cookie",
                "description": "",
                "price": "3,90€",
                "img": "/img/desayunos/cafe_cookies.webp",
                "alergenos": [ALERGENOS.SOJA, ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "10",
                "title": "Café y Tortitas",
                "description": "",
                "price": "5,00€",
                "img": "/img/desayunos/cafe_tortitas.webp",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            }
        ]
    }
];

export default desayunos;