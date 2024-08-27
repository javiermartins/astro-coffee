import Cacahuetes from "../components/icons/alergenos/Cacahuetes.astro";
import FrutosCascara from "../components/icons/alergenos/Frutos-cascara.astro";
import Gluten from "../components/icons/alergenos/Gluten.astro";
import Huevos from "../components/icons/alergenos/Huevos.astro";
import Lacteos from "../components/icons/alergenos/Lacteos.astro";
import Mostaza from "../components/icons/alergenos/Mostaza.astro";
import Pescado from "../components/icons/alergenos/Pescado.astro";
import Sesamo from "../components/icons/alergenos/Sesamo.astro";
import Soja from "../components/icons/alergenos/Soja.astro";


const ALERGENOS = {
    GLUTEN: {
        "label": "Contiene gluten",
        "color": "#D74B3A",
        "background": "#FAE6E4",
        "icon": Gluten
    },
    FRUTOS: {
        "label": "Frutos de cáscara",
        "color": "#C3873D",
        "background": "#F9EFE4",
        "icon": FrutosCascara
    },
    HUEVOS: {
        "label": "Huevos",
        "color": "#DAA2D3",
        "background": "#F9EFF7",
        "icon": Huevos
    },
    SEMILLAS_SEMAMO: {
        "label": "Granos de sésamo",
        "color": "#AAA093",
        "background": "#F5F3F1",
        "icon": Sesamo
    },
    CACAHUETES: {
        "label": "Cacahuetes",
        "color": "#E6BE51",
        "background": "#FCF7E6",
        "icon": Cacahuetes
    },
    SOJA: {
        "label": "Soja",
        "color": "#7AC061",
        "background": "#EDF7E9",
        "icon": Soja
    },
    LACTEOS: {
        "label": "Lácteos",
        "color": "#6ABEE8",
        "background": "#EAF6FC",
        "icon": Lacteos
    },
    MOSTAZA: {
        "label": "Mostaza",
        "color": "#D43A6D",
        "background": "#FAE4EC",
        "icon": Mostaza
    },
    PESCADO: {
        "label": "Pescado",
        "color": "#4EACB3",
        "background": "#E6F4F5",
        "icon": Pescado
    }
};

export default ALERGENOS;