import ALERGENOS from './alergenos.ts';

const desayunos = [
    {
        "id": "cafes",
        "title": "Cafés",
        "img": "/img/desayunos/coffee.webp",
        "data": [
            {
                "id": "1",
                "title": "Café y Tostada",
                "description": "Mantequilla y mermelada",
                "price": "3,00€",
                "img": "https://img.freepik.com/premium-photo/breakfast-with-coffee-toast-wooden-table-sunlight_304782-145.jpg?w=1060",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.LACTEOS]
            },
            {
                "id": "2",
                "title": "Café y Tarta",
                "description": "Preguntar sabor",
                "price": "6,00€",
                "img": "https://hips.hearstapps.com/hmg-prod/images/coffee-ice-cream-pie-1-646bad639726c.jpg?crop=1xw:1xh;center,top&resize=640:*",
                "alergenos": [ALERGENOS.LACTEOS]
            },
            {
                "id": "3",
                "title": "Café y Paninni",
                "description": "Tumaca o César",
                "price": "5,50€",
                "alergenos": [ALERGENOS.PESCADO, ALERGENOS.MOSTAZA, ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "4",
                "title": "Café y Croissant Mixto",
                "description": "",
                "price": "4,50€",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "5",
                "title": "Café y Croque Monsiur",
                "description": "",
                "price": "5,20€",
                "img": "/img/desayunos/croque_monsieur.webp",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "6",
                "title": "Café y Croissant",
                "description": "",
                "price": "2,90€",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "7",
                "title": "Café y Muffin",
                "description": "Lux +0,10€",
                "price": "3,90€",
                "img": "/img/desayunos/muffins.webp",
                "alergenos": [ALERGENOS.FRUTOS, ALERGENOS.SOJA, ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "8",
                "title": "Café y Croissant Tostado",
                "description": "",
                "price": "3,50€",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "9",
                "title": "Café y Cookie",
                "description": "",
                "price": "3,90€",
                "img": "https://th.bing.com/th/id/OIG4.HUKKMt3WLk3.cXPkaDmV?w=1024&h=1024&rs=1&pid=imgDetMain",
                "alergenos": [ALERGENOS.SOJA, ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            },
            {
                "id": "10",
                "title": "Café y Tortitas",
                "description": "",
                "price": "5,00€",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.HUEVOS, ALERGENOS.LACTEOS]
            }
        ]
    }
];

export default desayunos;