import ALERGENOS from "./alergenos";

const comidas = [
    {
        "id": "bagels",
        "title": "Bagels",
        "img": "/img/comidas/bagel_salmon.webp",
        "data": [
            {
                "id": "bagel-salmon",
                "title": "SALMÓN",
                "description": "Salmón y queso crema",
                "price": "5,20€",
                "img": "/img/comidas/bagel_salmon.webp",
                "alergenos": [ALERGENOS.SEMILLAS_SEMAMO, ALERGENOS.GLUTEN, ALERGENOS.LACTEOS, ALERGENOS.PESCADO]
            },
            {
                "id": "bagel-mixto-jamon",
                "title": "MIXTO JAMÓN",
                "description": "Jamón, queso gouda y york",
                "price": "5,20€",
                "img": "/img/comidas/bagel_mixto_jamon.webp",
                "alergenos": [ALERGENOS.SEMILLAS_SEMAMO, ALERGENOS.GLUTEN, ALERGENOS.LACTEOS]
            }
        ]
    },
    {
        "id": "paninis",
        "title": "Paninis",
        "img": "/img/comidas/panini_cesar.webp",
        "data": [
            {
                "id": "panini-cesar",
                "title": "CÉSAR",
                "description": "Pollo, queso gouda y salsa césar",
                "price": "4,90€",
                "img": "/img/comidas/panini_cesar.webp",
                "alergenos": [ALERGENOS.PESCADO, ALERGENOS.MOSTAZA, ALERGENOS.HUEVOS, ALERGENOS.GLUTEN, ALERGENOS.LACTEOS]
            },
            {
                "id": "panini-tumaca",
                "title": "TUMACA",
                "description": "Jamón y salsa tumaca",
                "price": "4,90€",
                "img": "/img/comidas/panini_tumaca.webp",
                "alergenos": [ALERGENOS.GLUTEN]
            }
        ]
    },
    {
        "id": "croque-monsieur",
        "title": "Croque Monsieur",
        "img": "/img/comidas/croque_monsieur.webp",
        "data": [
            {
                "id": "croque-monsieur",
                "title": "Croque Monsieur",
                "price": "4,70€",
                "img": "/img/comidas/croque_monsieur.webp",
                "alergenos": [ALERGENOS.GLUTEN, ALERGENOS.LACTEOS, ALERGENOS.HUEVOS]
            }
        ]
    },
    {
        "id": "quiche",
        "title": "Quiche",
        "img": "/img/comidas/quiche.webp",
        "data": [
            {
                "id": "quiche-jamon-queso",
                "title": "Jamón y Queso",
                "price": "4,20€",
                "img": "/img/comidas/quiche.webp",
                "alergenos": [ALERGENOS.SOJA, ALERGENOS.HUEVOS, ALERGENOS.GLUTEN, ALERGENOS.LACTEOS]
            },
            {
                "id": "quiche-tres-quesos",
                "title": "Tres Quesos",
                "price": "4,20€",
                "img": "/img/comidas/quiche.webp",
                "alergenos": [ALERGENOS.SOJA, ALERGENOS.HUEVOS, ALERGENOS.GLUTEN, ALERGENOS.LACTEOS]
            }
        ]
    }
];

export default comidas;