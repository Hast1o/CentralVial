import React, { useState } from 'react';

// --- IMPORTACIONES: TOPES DE ESTACIONAMIENTO ---
import terminalRampa from '../assets/productos/terminales-rampa-de-goma-30x30x10cm.webp';
import rampaGoma from '../assets/productos/rampa-de-goma-60x30x10cm.webp';
import tope180 from '../assets/productos/tope-180-cm.webp';
import tope90 from '../assets/productos/tope-90-cm.webp';
import tope55 from '../assets/productos/tope-55-cm.webp';

// --- IMPORTACIONES: PERNOS Y ANCLAJE ---
import perno1_2x5 from '../assets/productos/perno-de-anclaje-1-2x5-para-lomo-de-toro-1-2.webp';
import perno1_2x7 from '../assets/productos/perno-aclaje-1-2x7-para-tope-de-estacionamiento.webp';
import estaca from '../assets/productos/perno-asfalto-estaca-1-2x10-para-lomo-o-estacionamiento.webp';

// --- IMPORTACIONES: LOMOS DE TORO ---
import lomo100x30_viz from '../assets/productos/lomo-de-toro-100x30x5-negro-o-amarillo.webp';
import lomo90x30_viz from '../assets/productos/lomo-de-toro-90x30x5-negro-o-amarillo-4-orificios.webp';
import lomoAltaResistencia_viz from '../assets/productos/lomo-de-toro-alta-resistencia-100x35x5-negro-o-amarillo.webp';
import lomo180x30_viz from '../assets/productos/lomo-de-toro-180x30x5-negro-o-amarillo.webp';
import terminalAltaResistencia_viz from '../assets/productos/terminal-lomo-de-toro-alta-resistencia-100-negro.webp';
import terminalEstandar_viz from '../assets/productos/terminal-lomo-de-toro-90x100x180-negro.webp';
import cojinBerlin_viz from '../assets/productos/cojin-berlines-reductor-de-velocidad.webp';
import lomoPremium50x90_viz from '../assets/productos/lomo-de-toro-premium-50x90x5-negro-o-amarillo.webp';
import terminalPremium25x90_viz from '../assets/productos/terminal-lomo-de-toro-premium-25x90x5-negro-o-amarillo.webp';

// --- IMPORTACIONES: CICLO VIAS ---
import canalizadorOruga from '../assets/productos/canalizador-oruga.webp';

// --- IMPORTACIONES: HITOS VIALES ---
import hitoPoliuretano75 from '../assets/productos/hito-vialidad-poliuretano-75-con-3-cintas.webp';
import hitoPvc83 from '../assets/productos/hito-vialidad-pvc-83-abatible-con-2-cintas.webp';
import hitoFlexible83 from '../assets/productos/hito-tubular-flexible-83-con-2-cintas-reflectivas.webp';
import hitoDelineador115 from '../assets/productos/hito-delineador-base-115-con-2-cintas-naranjo.webp';
import hitoArista from '../assets/productos/hito-delineador-pvc-tipo-arista-blanco-125.webp';
import hitoFijoAzul from '../assets/productos/hito-tubular-fijo-75-con-2-cintas-azul.webp';
import hitoFlexibleAmarillo from '../assets/productos/hito-tubular-flexible-83-con-2-cintas-reflectivas-amarillo.webp';

// --- IMPORTACIONES: CONOS VIALES ---
import cono70Caucho from '../assets/productos/cono-de-trafico-70cm-base-caucho.webp';
import cono70Eco from '../assets/productos/cono-economico-naranjo-70cm.webp';
import barraExpandible from '../assets/productos/barra-expandible-uniones-conos-210cm.webp';
import cono90Caucho from '../assets/productos/cono-de-trafico-naranjo-90cm-base-caucho.webp';
import cono70Tradicional from '../assets/productos/cono-de-trafico-naranjo-70cm-base-tradicional.webp';
import cono100PE from '../assets/productos/cono-trafico-pe-naranjo-100cm.webp';
import cono70Verde from '../assets/productos/cono-trafico-verde-fluor-70cm.webp';
import cono90Verde from '../assets/productos/cono-trafico-verde-fluor-90cm.webp';
import cintaRetractil from '../assets/productos/cinta-separadora-retractil-conos-3mts.webp';
import cono70Negro from '../assets/productos/cono-trafico-negro-70cm.webp';
import conoNaranja90Tradicional from '../assets/productos/cono-naranja-base-tradicional-con-2-cintas-90.webp';
import conoAmarillo70 from '../assets/productos/cono-amarillo-sin-cinta-70.webp';
import conoAmarillo90 from '../assets/productos/cono-amarillo-sin-cinta-90.webp';
import conoNaranjaSinCintaCaucho from '../assets/productos/cono-naranja-base-caucho-sin-cintas.webp';

// --- IMPORTACIONES: TACHAS VIALES ---
import tacha10x10 from '../assets/productos/tacha-vialidad-10x10x2.webp';
import tachaHersan from '../assets/productos/tacha-vialidad-hersan.webp';
import tachaRojaBase from '../assets/productos/tacha-vialidad-doble-reflectivo-base-arenosa-roja.webp';
import tachaAmarillaBase from '../assets/productos/tacha-vialidad-doble-reflectivo-base-arenosa-amarilla.webp';
import tachaBlancaBase from '../assets/productos/tacha-vialidad-doble-reflectivo-base-arenosa-blanca.webp';
import tachaSolar from '../assets/productos/tacha-vialidad-solar.webp';
import tachonVastago from '../assets/productos/tachon-amarillo.webp';
import pegamentoEpoxico from '../assets/productos/pegamento-epoxico.webp';
import tachonPequenoSinVastago from '../assets/productos/tachon-amarillo-pequeño-sin-vastago.webp';
import boyaEstandar from '../assets/productos/boya-estandar.webp';
import tachonGrandeSinVastago from '../assets/productos/tachon-amarillo-grande-sin-vastago.webp';

// --- IMPORTACIONES: LÁMPARAS VIALES ---
import balizaSolarLED from '../assets/productos/baliza-destellante.webp';
import lamparaSolarDest from '../assets/productos/lampara-solar-destellante.webp';
import lamparaParaCono from '../assets/productos/lampara-destellante-para-cono.webp';
import lamparaConBateria from '../assets/productos/lampara-destellante-con-bateria.webp';
import lamparaSolarConeAmbar from '../assets/productos/lampara-solar-destellante-con-cono.webp';
import captafaroOjoGato from '../assets/productos/Captaforo.webp';
import lamparaSolarConeBlanca from '../assets/productos/lampara-solar-destellante-con-cono-color-blanca.webp';
import lamparaSinBateria from '../assets/productos/lampara-destellante-amarilla-sin-bateria.webp';

// --- IMPORTACIONES: ESPEJOS DE ESTACIONAMIENTO ---
import espejoExt45 from '../assets/productos/espejo-convexo-exterior-45cm.webp';
import espejoExt60 from '../assets/productos/espejo-convexo-exterior-60cm.webp';
import espejoExt80 from '../assets/productos/espejo-convexo-exterior-80cm.webp';
import espejoExt100 from '../assets/productos/espejo-convexo-exterior-100cm.webp';
import espejoInt60 from '../assets/productos/espejo-convexo-interior-60cm.webp';
import conector60 from '../assets/productos/conector-espejo-60cm.webp';
import conector80_100 from '../assets/productos/conector-espejo-80-100cm.webp';

// --- IMPORTACIONES: CONTENEDORES DE BASURA ACCESORIOS ---
// --- IMPORTACIONES: CONTENEDORES DE BASURA CON PEDAL ---
import contenedorBasuraC30lts from '../assets/productos/contenedor-de-basura-c-30lts.webp';
import contenedorBasuraC50lts from '../assets/productos/contenedor-de-basura-c-50lts.webp';
import contenedorBasura120lts from '../assets/productos/contenedor-de-basura-120lts.webp';
import contenedorBasura240lts from '../assets/productos/contenedor-de-basura-240lts.webp';
import contenedorBasuraD30lts from '../assets/productos/contenedor-de-basura-d-30lts.webp';
import contenedorBasura1100lts from '../assets/productos/contenedor-de-basura-1100lts.webp';
import contenedorBasura360lts from '../assets/productos/contenedor-de-basura-360lts.webp';
import contenedorBasura660lts from '../assets/productos/contenedor-de-basura-660lts.webp';

// --- IMPORTACIONES: CONTENEDORES DE BASURA SIN PEDAL ---
import contenedorDeBasura240ltsSinPedal from '../assets/productos/contenedor-de-basura-240lts-sin-pedal.webp';
import contenedorDeBasura360ltsSinPedal from '../assets/productos/contenedor-de-basura-360lts-sin-pedal.webp';
import contenedorDeBasura1100ltsSinPedal from '../assets/productos/contenedor-de-basura-1100lts-sin-pedal.webp';
import contenedorDeBasura660ltsSinPedal from '../assets/productos/contenedor-de-basura-660lts-sin-pedal.webp';
import contenedorDeBasura120ltsSinPedal from '../assets/productos/contenedor-de-basura-120lts-sin-pedal.webp';

// --- IMPORTACIONES: AFIN SUMINISTROS ---
import imgafin from '../assets/AFIN/CITYCRIL-600x666.jpg';
import imgdoscril from '../assets/AFIN/DOSCRIL-600x666.jpg';
import imgralva from '../assets/AFIN/pintura-ralva.jpg';
import imgtwinB from '../assets/AFIN/pintura-Twincril-gris.jpg';
import imgtwinA from '../assets/AFIN/pintura-Twincril-rojo.jpg';
import microesfera from '../assets/AFIN/Microesferas.png';
import doscrilrojo from '../assets/AFIN/Doscrilralvarojo.png';
import pegamento from '../assets/AFIN/Pegamento-epoxico-1.png';

// --- LISTA COMPLETA DE PRODUCTOS ---
const listaProductos = [
  // --- Afin Suministros ---
  { id: 201, nombre: "Pintura Acrílica Citycril", categoria: "pintura", descripcion: "Base solvente para señalización", imagen: imgafin },
  { id: 202, nombre: "Plástico en Frío Doscril", categoria: "pintura", descripcion: "Dos componentes de alta duración", imagen: imgdoscril },
  { id: 203, nombre: "Pintura Acrílica Señacril", categoria: "pintura", descripcion: "Base solvente de secado rápido", imagen: imgralva },
  { id: 204, nombre: "Twincril Componente A", categoria: "pintura", descripcion: "Señalización vial sistema 1:1", imagen: imgtwinA },
  { id: 205, nombre: "Twincril Componente B", categoria: "pintura", descripcion: "Catalizador para sistema Twincril", imagen: imgtwinB },
  { id: 206, nombre: "Pegamento Epóxico", categoria: "pegamento", descripcion: "Para fijación de tachas viales", imagen: pegamento },
  { id: 207, nombre: "Doscril Rojo", categoria: "pintura", descripcion: "Plástico en frío antideslizante", imagen: doscrilrojo },
  { id: 208, nombre: "Microesferas de Vidrio", categoria: "pintura", descripcion: "Echostar 5 para retroreflectividad", imagen: microesfera },

  // Contenedores con pedal
  { id: 90, nombre: "Contenedor de basura C 30lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor compacto de 30 litros con sistema de pedal reforzado, ideal para oficinas o espacios reducidos.", imagen: contenedorBasuraC30lts },
  { id: 91, nombre: "Contenedor de basura C 50lts con pedal metálico", categoria: "contenedores de basura", descripcion: "Contenedor de 50 litros con pedal metálico de alta durabilidad para uso frecuente.", imagen: contenedorBasuraC50lts },
  { id: 92, nombre: "Contenedor de basura 120lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor estándar de 120 litros con ruedas y pedal, perfecto para la gestión de residuos domiciliarios o comerciales.", imagen: contenedorBasura120lts },
  { id: 93, nombre: "Contenedor de basura 240lts con pedal", categoria: "contenedores de basura", descripcion: "Gran capacidad de 240 litros con ruedas de alto tráfico y pedal para apertura higiénica.", imagen: contenedorBasura240lts },
  { id: 94, nombre: "Contenedor de basura D 30lts con pedal", categoria: "contenedores de basura", descripcion: "Diseño ergonómico de 30 litros con pedal suave, acabado gris oscuro profesional.", imagen: contenedorBasuraD30lts },
  { id: 95, nombre: "Contenedor de basura 1100lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor industrial de 1100 litros con 4 ruedas giratorias y sistema de pedal integrado.", imagen: contenedorBasura1100lts },
  { id: 96, nombre: "Contenedor de basura 360lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor de capacidad media-alta (360 litros) ideal para comunidades y empresas.", imagen: contenedorBasura360lts },
  { id: 97, nombre: "Contenedor de basura 660lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor de gran volumen (660 litros) con tapa de cierre hermético y pedal de operación ruda.", imagen: contenedorBasura660lts },

  // Nuevos Contenedores estándar (sin pedal)
  { id: 98, nombre: "Contenedor de basura 240lts", categoria: "contenedores de basura", descripcion: "Contenedor de basura estándar de 240 litros, fabricado en material resistente ideal para exteriores.", imagen: contenedorDeBasura240ltsSinPedal },
  { id: 99, nombre: "Contenedor de basura 120lts", categoria: "contenedores de basura", descripcion: "Contenedor de basura de 120 litros, compacto y fácil de movilizar para la gestión diaria de residuos.", imagen: contenedorDeBasura120ltsSinPedal },
  { id: 100, nombre: "Contenedor de basura 660lts", categoria: "contenedores de basura", descripcion: "Contenedor de gran capacidad (660 litros) con 4 ruedas, diseñado para el manejo de residuos a nivel industrial o comunitario.", imagen: contenedorDeBasura660ltsSinPedal },
  { id: 101, nombre: "Contenedor de basura 1100lts", categoria: "contenedores de basura", descripcion: "Contenedor industrial de 1100 litros, máxima capacidad y resistencia para la recolección de alto volumen.", imagen: contenedorDeBasura1100ltsSinPedal },
  { id: 102, nombre: "Contenedor de basura 360lts", categoria: "contenedores de basura", descripcion: "Contenedor de 360 litros, excelente equilibrio entre capacidad y maniobrabilidad para áreas de mediano tráfico.", imagen: contenedorDeBasura360ltsSinPedal },

  // --- Topes de Estacionamiento ---
  { id: 1, nombre: "Terminal Rampa de Goma 30x30x10cm", categoria: "Tope de estacionamiento", descripcion: "Pieza terminal de goma resistente con elementos reflectantes, ideal para rematar líneas de tope o rampas de forma segura.", imagen: terminalRampa },
  { id: 2, nombre: "Rampa de Goma 60x30x10cm", categoria: "Tope de estacionamiento", descripcion: "Módulo central de goma de alta densidad diseñado para conformar lomos o topes continuos, soporta alto tráfico vehicular.", imagen: rampaGoma },
  { id: 3, nombre: "Tope de Estacionamiento 180 cm", categoria: "Tope de estacionamiento", descripcion: "Tope largo de 1.8 metros fabricado en goma de alta resistencia, con bandas reflectantes para máxima visibilidad nocturna.", imagen: tope180 },
  { id: 4, nombre: "Tope de Estacionamiento 90 cm", categoria: "Tope de estacionamiento", descripcion: "Tope mediano de 90 centímetros, perfecto para delimitar y proteger espacios individuales en estacionamientos públicos o privados.", imagen: tope90 },
  { id: 5, nombre: "Tope de Estacionamiento 55 cm", categoria: "Tope de estacionamiento", descripcion: "Tope compacto de 55 centímetros, una solución práctica y duradera para uso focalizado en zonas de aparcamiento residencial.", imagen: tope55 },

  // --- Espejos de Estacionamiento ---
  { id: 60, nombre: "Espejo convexo para exterior 45cm", categoria: "espejos de estacionamiento", descripcion: "Espejo convexo de seguridad para exteriores, ideal para eliminar puntos ciegos en salidas de vehículos.", imagen: espejoExt45 },
  { id: 61, nombre: "Espejo convexo para exterior 60cm", categoria: "espejos de estacionamiento", descripcion: "Espejo de 60cm de diámetro diseñado para resistir la intemperie y mejorar la visibilidad vial.", imagen: espejoExt60 },
  { id: 62, nombre: "Espejo convexo para exterior 80cm", categoria: "espejos de estacionamiento", descripcion: "Espejo convexo amplio para control de tráfico en intersecciones y estacionamientos grandes.", imagen: espejoExt80 },
  { id: 63, nombre: "Espejo convexo para exterior 100cm", categoria: "espejos de estacionamiento", descripcion: "Espejo de gran formato (100cm) para máxima cobertura visual en zonas críticas de tráfico.", imagen: espejoExt100 },
  { id: 64, nombre: "Espejo convexo para interior 60cm", categoria: "espejos de estacionamiento", descripcion: "Espejo convexo para uso en interiores, ideal para pasillos de almacenes o estacionamientos techados.", imagen: espejoInt60 },
  { id: 65, nombre: "Conector Espejo 60cm", categoria: "espejos de estacionamiento", descripcion: "Soporte metálico reforzado para la instalación segura de espejos convexos de 60cm.", imagen: conector60 },
  { id: 66, nombre: "Conector Espejo 80cm/100cm", categoria: "espejos de estacionamiento", descripcion: "Conector de alta resistencia diseñado para espejos de gran diámetro (80cm a 100cm).", imagen: conector80_100 },

  // --- Pernos y Anclaje ---
  { id: 6, nombre: "Perno de anclaje 1/2\" *5\" para lomo de toro 1/2", categoria: "pernos y anclaje", descripcion: "Perno de anclaje mecánico de expansión, diseñado para la fijación de lomos de toro de goma en superficies de concreto.", imagen: perno1_2x5 },
  { id: 7, nombre: "Perno de anclaje 1/2\" *7\" para tope de estacionamiento", categoria: "pernos y anclaje", descripcion: "Perno de anclaje de gran longitud, para la instalación segura de topes de estacionamiento de gran tamaño sobre concreto.", imagen: perno1_2x7 },
  { id: 8, nombre: "Perno asfalto estaca 1/2\" *10\" para lomo o tope de estacionamiento", categoria: "pernos y anclaje", descripcion: "Estacas de acero en par, diseñadas para el anclaje robusto de lomos de toro o topes de estacionamiento en superficies de asfalto.", imagen: estaca },

  // --- Lomos de Toro ---
  { id: 9, nombre: "Lomo de toro | 100*30*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Módulo estándar de lomo de toro, fabricado en caucho de alta resistencia con reflectantes integrados.", imagen: lomo100x30_viz },
  { id: 10, nombre: "Lomo de toro | 90*30*5cm | color negro/amarillo | 4 Orificios", categoria: "lomos de toro", descripcion: "Sección compacta de lomo de toro con patrón de puntos antideslizante, ideal para ajustar medidas.", imagen: lomo90x30_viz },
  { id: 11, nombre: "Lomo de toro alta resistencia 100*35*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Diseño reforzado más ancho y texturizado para soportar alto tráfico y flujo vehicular pesado.", imagen: lomoAltaResistencia_viz },
  { id: 12, nombre: "Lomo de toro | 180*30*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Módulo extra largo de 1.8 metros, ideal para vías anchas y una instalación más rápida.", imagen: lomo180x30_viz },
  { id: 13, nombre: "Terminal lomo de toro de alta resistencia | 100cm | color negro", categoria: "lomos de toro", descripcion: "Remate lateral de superficie texturizada para lomos de toro de alta resistencia.", imagen: lomoAltaResistencia_viz },
  { id: 14, nombre: "Terminal lomo toro | 90/100/180cm | color negro", categoria: "lomos de toro", descripcion: "Extremo redondeado estándar para lomos de toro, previene daños a los neumáticos.", imagen: terminalEstandar_viz },
  { id: 15, nombre: "Cojín berlinés reductor de velocidad", categoria: "lomos de toro", descripcion: "Reductor de velocidad tipo cojín de gran superficie para control de tráfico efectivo y seguro.", imagen: cojinBerlin_viz },
  { id: 16, nombre: "Lomo de toro premium | 50*90*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Sección premium ancha con diseño texturizado en gris y amarillo para máxima visibilidad y agarre.", imagen: lomoPremium50x90_viz },
  { id: 17, nombre: "Terminal de lomo de toro premium | 25*90*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Pieza terminal texturizada diseñada para completar el sistema de lomo de toro premium.", imagen: terminalPremium25x90_viz },

  // --- Ciclo vias ---
  { id: 18, nombre: "Canalizador para ciclovia tipo oruga", categoria: "ciclo vias", descripcion: "Separador vial de caucho resistente con bandas reflectantes blancas, ideal para delimitar y proteger carriles exclusivos de bicicletas.", imagen: canalizadorOruga },

  // --- Hitos Viales ---
  { id: 19, nombre: "Hito vialidad poliuretano | 75cm | con 3 cintas", categoria: "hitos viales", descripcion: "Hito flexible de poliuretano naranja de 75cm, con 3 cintas reflectantes para alta visibilidad y resistencia a impactos.", imagen: hitoPoliuretano75 },
  { id: 20, nombre: "Hito vialidad PVC | 83cm abatible con 2 cintas", categoria: "hitos viales", descripcion: "Pilar de PVC abatible de 83cm, con 2 cintas reflectantes y base negra para instalación segura.", imagen: hitoPvc83 },
  { id: 21, nombre: "Hito tubular flexible | 83cm | 2 cintas reflectivas", categoria: "hitos viales", descripcion: "Columna tubular flexible de 83cm, con 2 cintas reflectantes de alta visibilidad para delimitar vías.", imagen: hitoFlexible83 },
  { id: 22, nombre: "Hito delineador | base 115cm | con 2 cintas | color naranjo", categoria: "hitos viales", descripcion: "Poste delineador de 115cm con base, incluye 2 cintas reflectantes para guiar el tráfico.", imagen: hitoDelineador115 },
  { id: 23, nombre: "Hito delineador PVC tipo arista | color blanco | 125cm", categoria: "hitos viales", descripcion: "Baliza de arista blanca de 125cm, con bandas reflectantes y captafaro rojo para señalización lateral.", imagen: hitoArista },
  { id: 24, nombre: "Hito tubular fijo | 75cm | 2 cintas azul", categoria: "hitos viales", descripcion: "Pilar tubular fijo azul de 75cm, con 2 cintas reflectantes, ideal para estacionamientos y zonas de carga.", imagen: hitoFijoAzul },
  { id: 25, nombre: "Hito tubular flexible | 83cm | 2 cintas reflectivas | color amarillo", categoria: "hitos viales", descripcion: "Columna tubular flexible amarilla de 83cm, con 2 cintas reflectantes de alta visibilidad para delimitar vías.", imagen: hitoFlexibleAmarillo },

  // --- Conos Viales ---
  { id: 26, nombre: "Cono de tráfico | 70cm/28in | con 2 cintas con base de caucho", categoria: "conos viales", descripcion: "Cono de tráfico estándar de 70cm con doble cinta reflectante y base de caucho pesada para mayor estabilidad.", imagen: cono70Caucho },
  { id: 27, nombre: "Cono de tráfico económico | color naranjo | 70cm / 28in | con 2 cintas y base tradicional", categoria: "conos viales", descripcion: "Cono económico de 70cm, color naranjo de alta visibilidad con 2 cintas reflectantes y base tradicional.", imagen: cono70Eco },
  { id: 28, nombre: "Barra expandible para unión de conos de 210cm", categoria: "conos viales", descripcion: "Barra retráctil amarilla y negra para unir conos y crear barreras temporales de hasta 210cm.", imagen: barraExpandible },
  { id: 29, nombre: "Cono de tráfico | color naranjo | 90cm / 36in | con 2 cintas y base caucho", categoria: "conos viales", descripcion: "Cono de gran altura (90cm) con doble cinta reflectante y base de caucho negra para resistencia al viento.", imagen: cono90Caucho },
  { id: 30, nombre: "Cono de tráfico | color naranjo | 70cm / 28in | con 2 cintas y base tradicional", categoria: "conos viales", descripcion: "Cono clásico de 70cm con 2 bandas reflectantes y base tradicional naranja.", imagen: cono70Tradicional },
  { id: 31, nombre: "Cono de tráfico PE | color naranjo | 100cm / 39in | con cinta y base de caucho", categoria: "conos viales", descripcion: "Cono extra alto de 100cm fabricado en PE con una banda reflectante ancha y base pesada hexagonal.", imagen: cono100PE },
  { id: 32, nombre: "Cono de tráfico | color verde flúor | 70cm/28in | con 2 cintas con base de caucho", categoria: "conos viales", descripcion: "Cono de alta visibilidad color verde flúor de 70cm, con 2 cintas reflectantes y base de caucho.", imagen: cono70Verde },
  { id: 33, nombre: "Cono de tráfico | color verde flúor | 90cm / 36in | con 2 cintas y base de caucho", categoria: "conos viales", descripcion: "Cono de alta visibilidad color verde flúor de 90cm, con 2 bandas reflectantes y base estable de caucho negra.", imagen: cono90Verde },
  { id: 34, nombre: "Cinta separadora retráctil para conos 3mts", categoria: "conos viales", descripcion: "Cabezal con cinta retráctil rojiblanca de 3 metros, adaptable a la parte superior de conos de tráfico para delimitar áreas.", imagen: cintaRetractil },
  { id: 35, nombre: "Cono de tráfico | color negro | 70cm / 28in | sin cinta con base tradicional", categoria: "conos viales", descripcion: "Cono de señalización color negro de 70cm sin cintas reflectantes, ideal para usos específicos y delimitación de eventos.", imagen: cono70Negro },
  { id: 36, nombre: "Cono de tráfico | color naranjo | 90cm / 36in | con 2 cintas y base tradicional", categoria: "conos viales", descripcion: "Cono de tráfico de 90cm de altura con base tradicional naranja y doble cinta reflectante para alta visibilidad.", imagen: conoNaranja90Tradicional },
  { id: 37, nombre: "Cono de tráfico | color amarillo | 70cm / 28in | sin cinta con base tradicional", categoria: "conos viales", descripcion: "Cono de tráfico amarillo de 70cm con base tradicional, sin cintas reflectantes, ideal para uso diurno o demarcación temporal.", imagen: conoAmarillo70 },
  { id: 38, nombre: "Cono de tráfico | 90cm / 36in | sin cinta y base tradicional", categoria: "conos viales", descripcion: "Cono amarillo de gran altura (90cm) con base tradicional y sin bandas reflectantes, para señalización en zonas de trabajo.", imagen: conoAmarillo90 },
  { id: 39, nombre: "Cono de tráfico | color naranjo | 90cm / 36in | sin cinta con base de caucho", categoria: "conos viales", descripcion: "Cono naranja de 90cm sin cintas reflectantes, equipado con una base de caucho negra para proporcionar mayor resistencia y estabilidad al viento.", imagen: conoNaranjaSinCintaCaucho },

  // --- Tachas Viales ---
  { id: 40, nombre: "Tacha vialidad | 10*10*2cm | doble reflectivo", categoria: "tachas viales", descripcion: "Tacha vial estándar de 10x10x2cm con doble reflectivo, ideal para demarcación de vías y estacionamientos.", imagen: tacha10x10 },
  { id: 41, nombre: "Tacha de vialidad Hersan | 10*10*2cm", categoria: "tachas viales", descripcion: "Tacha de vialidad Hersan de 10x10x2cm, alta visibilidad y resistencia para señalización en carreteras.", imagen: tachaHersan },
  { id: 42, nombre: "Tacha vial | 10*10*2cm | doble reflectivo | color rojo | con base arenosa", categoria: "tachas viales", descripcion: "Tacha vial roja con doble reflectivo y base arenosa para una mejor adherencia al pavimento.", imagen: tachaRojaBase },
  { id: 43, nombre: "Tacha vial | 10*10*2cm | doble reflectivo | color amarillo | con base arenosa", categoria: "tachas viales", descripcion: "Tacha vial amarilla con doble reflectivo y base arenosa, proporciona excelente visibilidad nocturna y durabilidad.", imagen: tachaAmarillaBase },
  { id: 44, nombre: "Tacha vial | 10*10*2cm | doble reflectivo | color blanca | con base arenosa", categoria: "tachas viales", descripcion: "Tacha vial blanca con doble reflectivo y base arenosa, diseñada para delimitar carriles con máxima fijación.", imagen: tachaBlancaBase },
  { id: 45, nombre: "Tacha vialidad solar | sin vástago | 125*105*25mm | doble Led", categoria: "tachas viales", descripcion: "Tacha vial solar con doble Led y base de aluminio resistente, ideal para señalización nocturna y de seguridad en carreteras.", imagen: tachaSolar },
  { id: 46, nombre: "Tachón vialidad amarillo 16*25*5cm | con doble reflectivo | con vástago", categoria: "tachon", descripcion: "Tachón vial amarillo con doble reflectivo y vástago para una instalación segura y visible en carreteras.", imagen: tachonVastago },
  { id: 47, nombre: "Pegamento Epóxico | Kit 10 Kilos | Qtraffic 230", categoria: "pegamento", descripcion: "Kit de pegamento epóxico de 10 kilos de la marca Qtraffic, ideal para la instalación y fijación de tachones y boyas viales.", imagen: pegamentoEpoxico },
  { id: 48, nombre: "Tachón vialidad amarillo 16*25*3cm | con doble reflectivo | sin vástago", categoria: "tachon", descripcion: "Tachón vial amarillo con doble reflectivo, fabricado para una señalización clara y duradera en la vía.", imagen: tachonPequenoSinVastago },
  { id: 51, nombre: "Tachón vialidad amarillo 16*25*5cm | con doble reflectivo | sin vástago", categoria: "tachon", descripcion: "Tachón vial amarillo con doble reflectivo, de gran tamaño y resistencia, sin vástago para una señalización efectiva.", imagen: tachonGrandeSinVastago },

  // --- LÁMPARAS VIALES ---
  { id: 52, nombre: "Baliza destellante solar LED", categoria: "lamparas viales", descripcion: "Baliza destellante solar con LEDs de alta potencia para una señalización clara y duradera.", imagen: balizaSolarLED },
  { id: 53, nombre: "Lámpara solar destellante | color ambar/amarilla", categoria: "lamparas viales", descripcion: "Lámpara solar con modo destellante en color ámbar/amarillo, ideal para cono de tránsito.", imagen: lamparaSolarDest },
  { id: 54, nombre: "Lámpara destellante para cono de tránsito | color ambar/blanco", categoria: "lamparas viales", descripcion: "Lámpara destellante para cono de tránsito, en color ámbar/blanco para señalización de seguridad.", imagen: lamparaParaCono },
  { id: 55, nombre: "Lámpara destellante | color amarilla | con batería", categoria: "lamparas viales", descripcion: "Lámpara destellante amarilla con batería incorporada, para uso inmediato en señalización.", imagen: lamparaConBateria },
  { id: 56, nombre: "Lámpara solar destellante con cono | color ambar", categoria: "lamparas viales", descripcion: "Lámpara solar destellante en forma de cono, color ámbar, para demarcación lateral en la vía.", imagen: lamparaSolarConeAmbar },
  { id: 57, nombre: "Captafaro abatible ojo de gato", categoria: "lamparas viales", descripcion: "Captafaro abatible de alta resistencia con diseño de ojo de gato, para una señalización eficaz.", imagen: captafaroOjoGato },
  { id: 58, nombre: "Lámpara solar destellante con cono | color blanca", categoria: "lamparas viales", descripcion: "Lámpara solar destellante en forma de cono, color blanco, con múltiples LEDs para alta visibilidad.", imagen: lamparaSolarConeBlanca },
  { id: 59, nombre: "Lámpara destellante amarilla sin batería", categoria: "lamparas viales", descripcion: "Lámpara destellante amarilla con base, lista para usar con fuente de alimentación externa.", imagen: lamparaSinBateria },
];

export default function Productos() {
  // Estado para controlar qué categoría está activa
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  // Extraemos las categorías únicas dinámicamente de la lista de productos
  const categorias = ['Todos', ...new Set(listaProductos.map(producto => producto.categoria))];

  // Filtramos los productos según la categoría activa
  const productosFiltrados = categoriaActiva === 'Todos'
    ? listaProductos
    : listaProductos.filter(producto => producto.categoria === categoriaActiva);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-cvial-light min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cvial-secondary mb-4">
            Catálogo de Productos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Suministro e instalación de artículos de seguridad vial de alta calidad, certificados y bajo la normativa vigente.
          </p>
        </div>

        {/* Botones de Filtro por Categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria, index) => (
            <button
              key={index}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${categoriaActiva === categoria
                  ? 'bg-cvial-secondary text-white shadow-md scale-105' // Estilo cuando está seleccionado
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-cvial-secondary hover:text-cvial-secondary' // Estilo inactivo
                }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grilla de Tarjetas (ahora mapea sobre productosFiltrados) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100"
            >
              {/* Contenedor de la Imagen */}
              <div className="relative w-full aspect-square overflow-hidden bg-white p-4 flex items-center justify-center">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className={`w-full h-full object-contain transition-transform duration-500 ${producto.id === 207 // ID del Doscril Rojo
                      ? 'scale-[1.6] group-hover:scale-[1.75]' // Escala aumentada al 160% y 175% en hover
                      : 'group-hover:scale-105' // Resto de productos normal
                    }`}
                />
                {/* Etiqueta de Categoría flotante dinámica */}
                <div className="absolute top-3 right-3 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm text-center bg-cvial-primary text-white">
                  {producto.categoria}
                </div>
              </div>
              {/* Contenedor de Textos */}
              <div className="p-6 flex flex-col flex-grow border-t border-gray-50">
                <h3 className="text-sm md:text-base font-bold text-cvial-secondary mb-2 leading-tight">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm flex-grow">
                  {producto.descripcion}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Mensaje por si una categoría se queda sin productos (opcional, pero buena práctica) */}
        {productosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos en esta categoría.</p>
          </div>
        )}

      </div>
    </div>
  );
}