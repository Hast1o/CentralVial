import React, { useState } from 'react';

// Importaciones - AFIN Suministros
import doscrilrojo from '../assets/AFIN/Doscrilralvarojo.png';
import imgafin from '../assets/AFIN/CITYCRIL-600x666.jpg';
import imgdoscril from '../assets/AFIN/DOSCRIL-600x666.jpg';
import imgtwinA from '../assets/AFIN/pintura-Twincril-rojo.jpg';
import imgtwinB from '../assets/AFIN/pintura-Twincril-gris.jpg';
import imgralva from '../assets/AFIN/pintura-ralva.jpg';
import microesfera from '../assets/AFIN/Microesferas.png';
import pegamento from '../assets/AFIN/Pegamento-epoxico-1.png';

// Importaciones - Contenedores de basura con pedal
import contenedorBasura1100lts from '../assets/productos/contenedor-de-basura-1100lts.webp';
import contenedorBasura120lts from '../assets/productos/contenedor-de-basura-120lts.webp';
import contenedorBasura240lts from '../assets/productos/contenedor-de-basura-240lts.webp';
import contenedorBasura360lts from '../assets/productos/contenedor-de-basura-360lts.webp';
import contenedorBasura660lts from '../assets/productos/contenedor-de-basura-660lts.webp';
import contenedorBasuraC30lts from '../assets/productos/contenedor-de-basura-c-30lts.webp';
import contenedorBasuraC50lts from '../assets/productos/contenedor-de-basura-c-50lts.webp';
import contenedorBasuraD30lts from '../assets/productos/contenedor-de-basura-d-30lts.webp';

// Importaciones - Contenedores de basura sin pedal
import contenedorDeBasura120ltsSinPedal from '../assets/productos/contenedor-de-basura-120lts-sin-pedal.webp';
import contenedorDeBasura240ltsSinPedal from '../assets/productos/contenedor-de-basura-240lts-sin-pedal.webp';
import contenedorDeBasura360ltsSinPedal from '../assets/productos/contenedor-de-basura-360lts-sin-pedal.webp';
import contenedorDeBasura660ltsSinPedal from '../assets/productos/contenedor-de-basura-660lts-sin-pedal.webp';
import contenedorDeBasura1100ltsSinPedal from '../assets/productos/contenedor-de-basura-1100lts-sin-pedal.webp';

// Importaciones - Conos viales
import barraExpandible from '../assets/productos/barra-expandible-uniones-conos-210cm.webp';
import cintaRetractil from '../assets/productos/cinta-separadora-retractil-conos-3mts.webp';
import cono70Caucho from '../assets/productos/cono-de-trafico-70cm-base-caucho.webp';
import cono70Eco from '../assets/productos/cono-economico-naranjo-70cm.webp';
import cono70Negro from '../assets/productos/cono-trafico-negro-70cm.webp';
import cono70Tradicional from '../assets/productos/cono-de-trafico-naranjo-70cm-base-tradicional.webp';
import cono70Verde from '../assets/productos/cono-trafico-verde-fluor-70cm.webp';
import cono90Caucho from '../assets/productos/cono-de-trafico-naranjo-90cm-base-caucho.webp';
import cono90Verde from '../assets/productos/cono-trafico-verde-fluor-90cm.webp';
import cono100PE from '../assets/productos/cono-trafico-pe-naranjo-100cm.webp';
import conoAmarillo70 from '../assets/productos/cono-amarillo-sin-cinta-70.webp';
import conoAmarillo90 from '../assets/productos/cono-amarillo-sin-cinta-90.webp';
import conoNaranja90Tradicional from '../assets/productos/cono-naranja-base-tradicional-con-2-cintas-90.webp';
import conoNaranjaSinCintaCaucho from '../assets/productos/cono-naranja-base-caucho-sin-cintas.webp';

// Importaciones - Ciclo vías
import canalizadorOruga from '../assets/productos/canalizador-oruga.webp';

// Importaciones - Espejos de estacionamiento
import conector60 from '../assets/productos/conector-espejo-60cm.webp';
import conector80_100 from '../assets/productos/conector-espejo-80-100cm.webp';
import espejoExt45 from '../assets/productos/espejo-convexo-exterior-45cm.webp';
import espejoExt60 from '../assets/productos/espejo-convexo-exterior-60cm.webp';
import espejoExt80 from '../assets/productos/espejo-convexo-exterior-80cm.webp';
import espejoExt100 from '../assets/productos/espejo-convexo-exterior-100cm.webp';
import espejoInt60 from '../assets/productos/espejo-convexo-interior-60cm.webp';

// Importaciones - Hitos viales
import hitoArista from '../assets/productos/hito-delineador-pvc-tipo-arista-blanco-125.webp';
import hitoDelineador115 from '../assets/productos/hito-delineador-base-115-con-2-cintas-naranjo.webp';
import hitoFijoAzul from '../assets/productos/hito-tubular-fijo-75-con-2-cintas-azul.webp';
import hitoFlexible83 from '../assets/productos/hito-tubular-flexible-83-con-2-cintas-reflectivas.webp';
import hitoFlexibleAmarillo from '../assets/productos/hito-tubular-flexible-83-con-2-cintas-reflectivas-amarillo.webp';
import hitoPoliuretano75 from '../assets/productos/hito-vialidad-poliuretano-75-con-3-cintas.webp';
import hitoPvc83 from '../assets/productos/hito-vialidad-pvc-83-abatible-con-2-cintas.webp';

// Importaciones - Lámparas viales
import balizaSolarLED from '../assets/productos/baliza-destellante.webp';
import boyaEstandar from '../assets/productos/boya-estandar.webp';
import captafaroOjoGato from '../assets/productos/Captaforo.webp';
import lamparaConBateria from '../assets/productos/lampara-destellante-con-bateria.webp';
import lamparaParaCono from '../assets/productos/lampara-destellante-para-cono.webp';
import lamparaSinBateria from '../assets/productos/lampara-destellante-amarilla-sin-bateria.webp';
import lamparaSolarConeAmbar from '../assets/productos/lampara-solar-destellante-con-cono.webp';
import lamparaSolarConeBlanca from '../assets/productos/lampara-solar-destellante-con-cono-color-blanca.webp';
import lamparaSolarDest from '../assets/productos/lampara-solar-destellante.webp';

// Importaciones - Lomos de toro
import cojinBerlin_viz from '../assets/productos/cojin-berlines-reductor-de-velocidad.webp';
import lomoAltaResistencia_viz from '../assets/productos/lomo-de-toro-alta-resistencia-100x35x5-negro-o-amarillo.webp';
import lomo100x30_viz from '../assets/productos/lomo-de-toro-100x30x5-negro-o-amarillo.webp';
import lomo180x30_viz from '../assets/productos/lomo-de-toro-180x30x5-negro-o-amarillo.webp';
import lomo90x30_viz from '../assets/productos/lomo-de-toro-90x30x5-negro-o-amarillo-4-orificios.webp';
import lomoPremium50x90_viz from '../assets/productos/lomo-de-toro-premium-50x90x5-negro-o-amarillo.webp';
import terminalAltaResistencia_viz from '../assets/productos/terminal-lomo-de-toro-alta-resistencia-100-negro.webp';
import terminalEstandar_viz from '../assets/productos/terminal-lomo-de-toro-90x100x180-negro.webp';
import terminalPremium25x90_viz from '../assets/productos/terminal-lomo-de-toro-premium-25x90x5-negro-o-amarillo.webp';

// Importaciones - Lorenzini Adhesivos y Señalética
import kitEpoxico from '../assets/lorenzini/kit-pegamento-epoxico.webp';
import pegamentoBituminoso from '../assets/lorenzini/pegamento-bituminoso.webp';
import pegamentoPlastigum from '../assets/lorenzini/pegamento-plastigum.webp';
import posteOmega from '../assets/lorenzini/poste-omega-galbanizado.jpg';
import señalesTransito from '../assets/lorenzini/señales-de-transito.png';

// Importaciones - Lorenzini Balizas
import balizaEmergencia from '../assets/lorenzini/baliza-de-emergencia.webp';
import balizaLedAcceso from '../assets/lorenzini/baliza-led-para-acceso-vehicular.webp';
import balizaMagneticaVehiculos from '../assets/lorenzini/baliza-magnetica-para-vehiculos.webp';
import balizaSolarClip from '../assets/lorenzini/baliza-solar-de-clip.webp';
import balizaSolarConos from '../assets/lorenzini/baliza-solar-para-conos.webp';
import balizaSolarHitos from '../assets/lorenzini/baliza-solar-para-hitos.webp';

// Importaciones - Lorenzini Canalizadores, Barreras y Paletas
import barreraNewJersey from '../assets/lorenzini/barrera-new-jersey.webp';
import barreraNewJerseyApilable from '../assets/lorenzini/barrera-new-jersey-apilable.webp';
import canalizadorJaguar from '../assets/lorenzini/canalizador-jaguar.webp';
import canalizadorZebra from '../assets/lorenzini/canalizador-zebra.webp';
import canalizadorZebraZero from '../assets/lorenzini/canalizador-ciclovia-zebra-zero.webp';
import paletaPareSiga from '../assets/lorenzini/paleta-pare-siga.webp';
import paletaPareSigaLed from '../assets/lorenzini/paleta-pare-siga-led.webp';
import paletaPareSigaPlegable from '../assets/lorenzini/paleta-pare-siga-plegable.webp';
import segregadorParis from '../assets/lorenzini/segregador-paris.webp';
import segregadorReflectivo from '../assets/lorenzini/segregador-vial-con-reflectivo.webp';

// Importaciones - Lorenzini Captafaros
import captafaroAngular from '../assets/lorenzini/captaforo-angular.webp';
import ojoGatoAbatible from '../assets/lorenzini/ojo-de-gato-abatible.webp';
import ojoGatoAbatibleTriangular from '../assets/lorenzini/ojo-de-gato-abatible-triangular.webp';
import ojoGatoReflectanteTriangular from '../assets/lorenzini/ojo-de-gato-reflectante-triangular.webp';
import ojoGatoTipoA from '../assets/lorenzini/ojo-de-gato-tipo-a.webp';
import ojoGatoTipoB from '../assets/lorenzini/ojo-de-gato-tipo-b.webp';

// Importaciones - Lorenzini Conos
import baseConos from '../assets/lorenzini/base-para-conos.webp';
import cono12 from '../assets/lorenzini/cono12.webp';
import cono18 from '../assets/lorenzini/cono18.webp';
import cono28 from '../assets/lorenzini/cono28.webp';
import cono28Retractil from '../assets/lorenzini/cono28-retractil.webp';
import cono36 from '../assets/lorenzini/cono36.webp';
import cono36AntiViento from '../assets/lorenzini/cono36-anti-viento.webp';
import cono36Retractil from '../assets/lorenzini/cono36-retractil.webp';

// Importaciones - Lorenzini Defensas y Postes
import defensaCaminera from '../assets/lorenzini/defensa-caminera.webp';
import pernosDefensas from '../assets/lorenzini/pernos-para-defensas.png';
import posteCostanera from '../assets/lorenzini/poste-costanera.webp';
import posteZebra from '../assets/lorenzini/poste-zebra.webp';
import separadorDefensa from '../assets/lorenzini/separador-de-defensa.webp';
import terminalMichigan from '../assets/lorenzini/terminal-michigan.webp';
import terminalSimple from '../assets/lorenzini/terminal-simple-galvanizado.webp';
import terminalSkt from '../assets/lorenzini/terminal-skt.webp';

// Importaciones - Lorenzini Hitos
import bolardoEsferaPu from '../assets/lorenzini/bolardo-esfera-pu.webp';
import hitoAbatibleDesmontableA from '../assets/lorenzini/hito-abatible-desmontable-A.webp';
import hitoAbatibleDesmontablePremium from '../assets/lorenzini/hito-abatible-desmontable-premium.webp';
import hitoAbatibleDesmontableB from '../assets/lorenzini/hito-abatible-desmontable-b.webp';
import hitoAbatibleLor from '../assets/lorenzini/hito-abatible-lor.webp';
import hitoAbatiblePremiumPu from '../assets/lorenzini/hito-abatible-premium-pu.webp';
import hitoAbatiblePu from '../assets/lorenzini/hito-abatible-pu.webp';
import hitoArista2 from '../assets/lorenzini/hito-de-arista.webp';
import hitoBaseParis from '../assets/lorenzini/hito-base-rellenable-paris.webp';
import hitoDesmontableA from '../assets/lorenzini/hito-abatible-desmontable-A.webp';
import hitoDesmontablePremium from '../assets/lorenzini/hito-abatible-desmontable-premium.webp';
import hitoDesmontableB from '../assets/lorenzini/hito-abatible-desmontable-b.webp';
import hitoFaena from '../assets/lorenzini/hito-de-faena.webp';
import hitoFlexiboll from '../assets/lorenzini/hito-flexiboll.webp';
import hitoFlexibleCiclovia from '../assets/lorenzini/hito-flexible-para-ciclovia.webp';
import hitoH75Lacroix from '../assets/lorenzini/hito-h75-lacroix.webp';
import hitoH75LacroixAlias from '../assets/lorenzini/hito-h75-lacroix.webp';
import hitoPaleta from '../assets/lorenzini/hito-paleta.webp';
import hitoPexco from '../assets/lorenzini/hito-pexco.webp';
import hitoRoma from '../assets/lorenzini/hito-roma.webp';
import hitoT120 from '../assets/lorenzini/hito-t120.webp';
import hitoT130 from '../assets/lorenzini/hito-t130.webp';
import hitoTubularAbatible from '../assets/lorenzini/hito-tubular-abatible.webp';
import hitoTubularEstatico from '../assets/lorenzini/hito-tubular-estatico.webp';
import hitoTubularFlexible from '../assets/lorenzini/hito-tubular-flexible.webp';
import panelSpringback from '../assets/lorenzini/panel-abatible-springback.webp';

// Importaciones - Lorenzini Iluminación Vial
import kitBalizas from '../assets/lorenzini/kit-de-balizas-destellantes.webp';
import lamparaBidireccionalConos from '../assets/lorenzini/lampara-bidireccional-para-conos.webp';
import lamparaDestellantePortatil from '../assets/lorenzini/lampara-destellante-portatil.webp';
import lamparaFaena from '../assets/lorenzini/lampara-de-faena.webp';
import lamparaRedondaConos from '../assets/lorenzini/lampara-redonda-para-conos.webp';
import lamparaSolar from '../assets/lorenzini/lampara-solar.webp';
import lamparaSolarAdvertencia from '../assets/lorenzini/lampara-solar-advertencia-conos.webp';
import lamparaSolarAltoBrillo from '../assets/lorenzini/lampara-solar-alto-brillo.webp';
import lamparaSolarDobleFoco from '../assets/lorenzini/lampara-solar-doble-foco-para-conos.webp';
import sistemaCanalizacion from '../assets/lorenzini/sistema-de-canalizacion.png';

// Importaciones - Lorenzini Pinturas
import kitDobleComponente from '../assets/lorenzini/kit-pintura-doble-componente-A+B.webp';
import microesferasVial from '../assets/lorenzini/microesferas.webp';
import pinturaAcrilicaAgua from '../assets/lorenzini/pintura-acrilica-base-agua.webp';
import pinturaAcrilicaSolvente from '../assets/lorenzini/pintura-acrilica-base-solvente.webp';
import pinturaKataline from '../assets/lorenzini/pintura-kataline.webp';
import pinturasemex from '../assets/lorenzini/pintura-semex.webp';
import pinturaTermoplasticaMarcas from '../assets/lorenzini/pintura-termoplastica-marcas-viales.webp';
import primerPreformadoEpoxico from '../assets/lorenzini/primer-termoplastico-preformado-y-solvente-epoxico.webp';
import primerTermoplastico from '../assets/lorenzini/primer-termoplastico.webp';
import solventeAcrilico from '../assets/lorenzini/solvente-acrilico.webp';
import pinturaAcrilicaTecnoquim from '../assets/productos/pintura-acrilica-tecnoquim.jpg';

// Importaciones - Lorenzini Tachas
import tachaElectricaLed from '../assets/lorenzini/tacha-electrica-led.webp';
import tachaFotoluminiscenteRectangular from '../assets/lorenzini/tacha-fotoluminiscente-rectangular.webp';
import tachaFotoluminiscenteRedonda from '../assets/lorenzini/tacha-fotoluminiscente-redonda.webp';
import tachaNieveEuroasfalt from '../assets/lorenzini/tacha-para-nieve-euroasfalt.webp';
import tachaNieveS2Lp from '../assets/lorenzini/tacha-nieve-euroasfalt-s2lp.png';
import tachaNieveS3Led from '../assets/lorenzini/tacha-para-nieve-euroasfalta-s3led.webp';
import tachaNieveS4Kabel from '../assets/lorenzini/tacha-nieve-euroasfalt-s4kabel.png';
import tachaNieveS4Max from '../assets/lorenzini/tacha-para-nieve-euroasfalt-s4max.webp';
import tachaPremiumP1090 from '../assets/lorenzini/tacha-premium-p1090.webp';
import tachaReflectivaPrismalux from '../assets/lorenzini/tacha-reflectiva-prismalux.webp';
import tachaReflectivaProvisoria from '../assets/lorenzini/tacha-reflectiva-provisoria.webp';
import tachaSolarVastago from '../assets/lorenzini/tacha-solar-con-o-sin-vastago.webp';
import tachaVallaPeatonal from '../assets/lorenzini/tacha-para-valla-peatonal.webp';
import tachonBidireccionalSinVastago from '../assets/lorenzini/tachon-bidireccional-sin-vastago.webp';
import tachonLedBidireccional from '../assets/lorenzini/tachon-led-bidireccional.webp';

// Importaciones - Pernos y anclaje
import estaca from '../assets/productos/perno-asfalto-estaca-1-2x10-para-lomo-o-estacionamiento.webp';
import perno1_2x5 from '../assets/productos/perno-de-anclaje-1-2x5-para-lomo-de-toro-1-2.webp';
import perno1_2x7 from '../assets/productos/perno-aclaje-1-2x7-para-tope-de-estacionamiento.webp';

// Importaciones - Tachas viales
import pegamentoEpoxico from '../assets/productos/pegamento-epoxico.webp';
import tacha10x10 from '../assets/productos/tacha-vialidad-10x10x2.webp';
import tachaAmarillaBase from '../assets/productos/tacha-vialidad-doble-reflectivo-base-arenosa-amarilla.webp';
import tachaBlancaBase from '../assets/productos/tacha-vialidad-doble-reflectivo-base-arenosa-blanca.webp';
import tachaHersan from '../assets/productos/tacha-vialidad-hersan.webp';
import tachaRojaBase from '../assets/productos/tacha-vialidad-doble-reflectivo-base-arenosa-roja.webp';
import tachaSolar from '../assets/productos/tacha-vialidad-solar.webp';
import tachonGrandeSinVastago from '../assets/productos/tachon-amarillo-grande-sin-vastago.webp';
import tachonPequenoSinVastago from '../assets/productos/tachon-amarillo-pequeño-sin-vastago.webp';
import tachonVastago from '../assets/productos/tachon-amarillo.webp';

// Importaciones - Topes de estacionamiento
import rampaGoma from '../assets/productos/rampa-de-goma-60x30x10cm.webp';
import terminalRampa from '../assets/productos/terminales-rampa-de-goma-30x30x10cm.webp';
import tope55 from '../assets/productos/tope-55-cm.webp';
import tope90 from '../assets/productos/tope-90-cm.webp';
import tope180 from '../assets/productos/tope-180-cm.webp';
const listaProductos = [
  { id: 1, codigo: "CV-001", nombre: "Terminal Rampa de Goma 30x30x10cm", categoria: "Tope de estacionamiento", descripcion: "Pieza terminal de goma resistente con elementos reflectantes, ideal para rematar líneas de tope o rampas de forma segura.", imagen: terminalRampa },
  { id: 2, codigo: "CV-002", nombre: "Rampa de Goma 60x30x10cm", categoria: "Tope de estacionamiento", descripcion: "Módulo central de goma de alta densidad diseñado para conformar lomos o topes continuos, soporta alto tráfico vehicular.", imagen: rampaGoma },
  { id: 3, codigo: "CV-003", nombre: "Tope de Estacionamiento 180 cm", categoria: "Tope de estacionamiento", descripcion: "Tope largo de 1.8 metros fabricado en goma de alta resistencia, con bandas reflectantes para máxima visibilidad nocturna.", imagen: tope180 },
  { id: 4, codigo: "CV-004", nombre: "Tope de Estacionamiento 90 cm", categoria: "Tope de estacionamiento", descripcion: "Tope mediano de 90 centímetros, perfecto para delimitar y proteger espacios individuales en estacionamientos públicos o privados.", imagen: tope90 },
  { id: 5, codigo: "CV-005", nombre: "Tope de Estacionamiento 55 cm", categoria: "Tope de estacionamiento", descripcion: "Tope compacto de 55 centímetros, una solución práctica y duradera para uso focalizado en zonas de aparcamiento residencial.", imagen: tope55 },
  { id: 6, codigo: "CV-006", nombre: "Perno de anclaje 1/2\" *5\" para lomo de toro 1/2", categoria: "pernos y anclaje", descripcion: "Perno de anclaje mecánico de expansión, diseñado para la fijación de lomos de toro de goma en superficies de concreto.", imagen: perno1_2x5 },
  { id: 7, codigo: "CV-007", nombre: "Perno de anclaje 1/2\" *7\" para tope de estacionamiento", categoria: "pernos y anclaje", descripcion: "Perno de anclaje de gran longitud, para la instalación segura de topes de estacionamiento de gran tamaño sobre concreto.", imagen: perno1_2x7 },
  { id: 8, codigo: "CV-008", nombre: "Perno asfalto estaca 1/2\" *10\" para lomo o tope de estacionamiento", categoria: "pernos y anclaje", descripcion: "Estacas de acero en par, diseñadas para el anclaje robusto de lomos de toro o topes de estacionamiento en superficies de asfalto.", imagen: estaca },
  { id: 9, codigo: "CV-009", nombre: "Lomo de toro | 100*30*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Módulo estándar de lomo de toro, fabricado en caucho de alta resistencia con reflectantes integrados.", imagen: lomo100x30_viz },
  { id: 10, codigo: "CV-010", nombre: "Lomo de toro | 90*30*5cm | color negro/amarillo | 4 Orificios", categoria: "lomos de toro", descripcion: "Sección compacta de lomo de toro con patrón de puntos antideslizante, ideal para ajustar medidas.", imagen: lomo90x30_viz },
  { id: 11, codigo: "CV-011", nombre: "Lomo de toro alta resistencia 100*35*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Diseño reforzado más ancho y texturizado para soportar alto tráfico y flujo vehicular pesado.", imagen: lomoAltaResistencia_viz },
  { id: 12, codigo: "CV-012", nombre: "Lomo de toro | 180*30*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Módulo extra largo de 1.8 metros, ideal para vías anchas y una instalación más rápida.", imagen: lomo180x30_viz },
  { id: 13, codigo: "CV-013", nombre: "Terminal lomo de toro de alta resistencia | 100cm | color negro", categoria: "lomos de toro", descripcion: "Remate lateral de superficie texturizada para lomos de toro de alta resistencia.", imagen: lomoAltaResistencia_viz },
  { id: 14, codigo: "CV-014", nombre: "Terminal lomo toro | 90/100/180cm | color negro", categoria: "lomos de toro", descripcion: "Extremo redondeado estándar para lomos de toro, previene daños a los neumáticos.", imagen: terminalEstandar_viz },
  { id: 15, codigo: "CV-015", nombre: "Cojín berlinés reductor de velocidad", categoria: "lomos de toro", descripcion: "Reductor de velocidad tipo cojín de gran superficie para control de tráfico efectivo y seguro.", imagen: cojinBerlin_viz },
  { id: 16, codigo: "CV-016", nombre: "Lomo de toro premium | 50*90*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Sección premium ancha con diseño texturizado en gris y amarillo para máxima visibilidad y agarre.", imagen: lomoPremium50x90_viz },
  { id: 17, codigo: "CV-017", nombre: "Terminal de lomo de toro premium | 25*90*5cm | color negro/amarillo", categoria: "lomos de toro", descripcion: "Pieza terminal texturizada diseñada para completar el sistema de lomo de toro premium.", imagen: terminalPremium25x90_viz },
  { id: 18, codigo: "CV-018", nombre: "Canalizador para ciclovia tipo oruga", categoria: "ciclo vias", descripcion: "Separador vial de caucho resistente con bandas reflectantes blancas, ideal para delimitar y proteger carriles exclusivos de bicicletas.", imagen: canalizadorOruga },
  { id: 19, codigo: "CV-019", nombre: "Hito vialidad poliuretano | 75cm | con 3 cintas", categoria: "hitos viales", descripcion: "Hito flexible de poliuretano naranja de 75cm, con 3 cintas reflectantes para alta visibilidad y resistencia a impactos.", imagen: hitoPoliuretano75 },
  { id: 20, codigo: "CV-020", nombre: "Hito vialidad PVC | 83cm abatible con 2 cintas", categoria: "hitos viales", descripcion: "Pilar de PVC abatible de 83cm, con 2 cintas reflectantes y base negra para instalación segura.", imagen: hitoPvc83 },
  { id: 21, codigo: "CV-021", nombre: "Hito tubular flexible | 83cm | 2 cintas reflectivas", categoria: "hitos viales", descripcion: "Columna tubular flexible de 83cm, con 2 cintas reflectantes de alta visibilidad para delimitar vías.", imagen: hitoFlexible83 },
  { id: 22, codigo: "CV-022", nombre: "Hito delineador | base 115cm | con 2 cintas | color naranjo", categoria: "hitos viales", descripcion: "Poste delineador de 115cm con base, incluye 2 cintas reflectantes para guiar el tráfico.", imagen: hitoDelineador115 },
  { id: 23, codigo: "CV-023", nombre: "Hito delineador PVC tipo arista | color blanco | 125cm", categoria: "hitos viales", descripcion: "Baliza de arista blanca de 125cm, con bandas reflectantes y captafaro rojo para señalización lateral.", imagen: hitoArista },
  { id: 24, codigo: "CV-024", nombre: "Hito tubular fijo | 75cm | 2 cintas azul", categoria: "hitos viales", descripcion: "Pilar tubular fijo azul de 75cm, con 2 cintas reflectantes, ideal para estacionamientos y zonas de carga.", imagen: hitoFijoAzul },
  { id: 25, codigo: "CV-025", nombre: "Hito tubular flexible | 83cm | 2 cintas reflectivas | color amarillo", categoria: "hitos viales", descripcion: "Columna tubular flexible amarilla de 83cm, con 2 cintas reflectantes de alta visibilidad para delimitar vías.", imagen: hitoFlexibleAmarillo },
  { id: 26, codigo: "CV-026", nombre: "Cono de tráfico | 70cm/28in | con 2 cintas con base de caucho", categoria: "conos viales", descripcion: "Cono de tráfico estándar de 70cm con doble cinta reflectante y base de caucho pesada para mayor estabilidad.", imagen: cono70Caucho },
  { id: 27, codigo: "CV-027", nombre: "Cono de tráfico económico | color naranjo | 70cm / 28in | con 2 cintas y base tradicional", categoria: "conos viales", descripcion: "Cono económico de 70cm, color naranjo de alta visibilidad con 2 cintas reflectantes y base tradicional.", imagen: cono70Eco },
  { id: 28, codigo: "CV-028", nombre: "Barra expandible para unión de conos de 210cm", categoria: "conos viales", descripcion: "Barra retráctil amarilla y negra para unir conos y crear barreras temporales de hasta 210cm.", imagen: barraExpandible },
  { id: 29, codigo: "CV-029", nombre: "Cono de tráfico | color naranjo | 90cm / 36in | con 2 cintas y base caucho", categoria: "conos viales", descripcion: "Cono de gran altura (90cm) con doble cinta reflectante y base de caucho negra para resistencia al viento.", imagen: cono90Caucho },
  { id: 30, codigo: "CV-030", nombre: "Cono de tráfico | color naranjo | 70cm / 28in | con 2 cintas y base tradicional", categoria: "conos viales", descripcion: "Cono clásico de 70cm con 2 bandas reflectantes y base tradicional naranja.", imagen: cono70Tradicional },
  { id: 31, codigo: "CV-031", nombre: "Cono de tráfico PE | color naranjo | 100cm / 39in | con cinta y base de caucho", categoria: "conos viales", descripcion: "Cono extra alto de 100cm fabricado en PE con una banda reflectante ancha y base pesada hexagonal.", imagen: cono100PE },
  { id: 32, codigo: "CV-032", nombre: "Cono de tráfico | color verde flúor | 70cm/28in | con 2 cintas con base de caucho", categoria: "conos viales", descripcion: "Cono de alta visibilidad color verde flúor de 70cm, con 2 cintas reflectantes y base de caucho.", imagen: cono70Verde },
  { id: 33, codigo: "CV-033", nombre: "Cono de tráfico | color verde flúor | 90cm / 36in | con 2 cintas y base de caucho", categoria: "conos viales", descripcion: "Cono de alta visibilidad color verde flúor de 90cm, con 2 bandas reflectantes y base estable de caucho negra.", imagen: cono90Verde },
  { id: 34, codigo: "CV-034", nombre: "Cinta separadora retráctil para conos 3mts", categoria: "conos viales", descripcion: "Cabezal con cinta retráctil rojiblanca de 3 metros, adaptable a la parte superior de conos de tráfico para delimitar áreas.", imagen: cintaRetractil },
  { id: 35, codigo: "CV-035", nombre: "Cono de tráfico | color negro | 70cm / 28in | sin cinta con base tradicional", categoria: "conos viales", descripcion: "Cono de señalización color negro de 70cm sin cintas reflectantes, ideal para usos específicos y delimitación de eventos.", imagen: cono70Negro },
  { id: 36, codigo: "CV-036", nombre: "Cono de tráfico | color naranjo | 90cm / 36in | con 2 cintas y base tradicional", categoria: "conos viales", descripcion: "Cono de tráfico de 90cm de altura con base tradicional naranja y doble cinta reflectante para alta visibilidad.", imagen: conoNaranja90Tradicional },
  { id: 37, codigo: "CV-037", nombre: "Cono de tráfico | color amarillo | 70cm / 28in | sin cinta con base tradicional", categoria: "conos viales", descripcion: "Cono de tráfico amarillo de 70cm con base tradicional, sin cintas reflectantes, ideal para uso diurno o demarcación temporal.", imagen: conoAmarillo70 },
  { id: 38, codigo: "CV-038", nombre: "Cono de tráfico | 90cm / 36in | sin cinta y base tradicional", categoria: "conos viales", descripcion: "Cono amarillo de gran altura (90cm) con base tradicional y sin bandas reflectantes, para señalización en zonas de trabajo.", imagen: conoAmarillo90 },
  { id: 39, codigo: "CV-039", nombre: "Cono de tráfico | color naranjo | 90cm / 36in | sin cinta con base de caucho", categoria: "conos viales", descripcion: "Cono naranja de 90cm sin cintas reflectantes, equipado con una base de caucho negra para proporcionar mayor resistencia y estabilidad al viento.", imagen: conoNaranjaSinCintaCaucho },
  { id: 40, codigo: "CV-040", nombre: "Tacha vialidad | 10*10*2cm | doble reflectivo", categoria: "tachas viales", descripcion: "Tacha vial estándar de 10x10x2cm con doble reflectivo, ideal para demarcación de vías y estacionamientos.", imagen: tacha10x10 },
  { id: 41, codigo: "CV-041", nombre: "Tacha de vialidad Hersan | 10*10*2cm", categoria: "tachas viales", descripcion: "Tacha de vialidad Hersan de 10x10x2cm, alta visibilidad y resistencia para señalización en carreteras.", imagen: tachaHersan },
  { id: 42, codigo: "CV-042", nombre: "Tacha vial | 10*10*2cm | doble reflectivo | color rojo | con base arenosa", categoria: "tachas viales", descripcion: "Tacha vial roja con doble reflectivo y base arenosa para una mejor adherencia al pavimento.", imagen: tachaRojaBase },
  { id: 43, codigo: "CV-043", nombre: "Tacha vial | 10*10*2cm | doble reflectivo | color amarillo | con base arenosa", categoria: "tachas viales", descripcion: "Tacha vial amarilla con doble reflectivo y base arenosa, proporciona excelente visibilidad nocturna y durabilidad.", imagen: tachaAmarillaBase },
  { id: 44, codigo: "CV-044", nombre: "Tacha vial | 10*10*2cm | doble reflectivo | color blanca | con base arenosa", categoria: "tachas viales", descripcion: "Tacha vial blanca con doble reflectivo y base arenosa, diseñada para delimitar carriles con máxima fijación.", imagen: tachaBlancaBase },
  { id: 45, codigo: "CV-045", nombre: "Tacha vialidad solar | sin vástago | 125*105*25mm | doble Led", categoria: "tachas viales", descripcion: "Tacha vial solar con doble Led y base de aluminio resistente, ideal para señalización nocturna y de seguridad en carreteras.", imagen: tachaSolar },
  { id: 46, codigo: "CV-046", nombre: "Tachón vialidad amarillo 16*25*5cm | con doble reflectivo | con vástago", categoria: "tachon", descripcion: "Tachón vial amarillo con doble reflectivo y vástago para una instalación segura y visible en carreteras.", imagen: tachonVastago },
  { id: 47, codigo: "CV-047", nombre: "Pegamento Epóxico | Kit 10 Kilos | Qtraffic 230", categoria: "pegamento", descripcion: "Kit de pegamento epóxico de 10 kilos de la marca Qtraffic, ideal para la instalación y fijación de tachones y boyas viales.", imagen: pegamentoEpoxico },
  { id: 48, codigo: "CV-048", nombre: "Tachón vialidad amarillo 16*25*3cm | con doble reflectivo | sin vástago", categoria: "tachon", descripcion: "Tachón vial amarillo con doble reflectivo, fabricado para una señalización clara y duradera en la vía.", imagen: tachonPequenoSinVastago },
  { id: 51, codigo: "CV-051", nombre: "Tachón vialidad amarillo 16*25*5cm | con doble reflectivo | sin vástago", categoria: "tachon", descripcion: "Tachón vial amarillo con doble reflectivo, de gran tamaño y resistencia, sin vástago para una señalización efectiva.", imagen: tachonGrandeSinVastago },
  { id: 52, codigo: "CV-052", nombre: "Baliza destellante solar LED", categoria: "lamparas viales", descripcion: "Baliza destellante solar con LEDs de alta potencia para una señalización clara y duradera.", imagen: balizaSolarLED },
  { id: 53, codigo: "CV-053", nombre: "Lámpara solar destellante | color ambar/amarilla", categoria: "lamparas viales", descripcion: "Lámpara solar con modo destellante en color ámbar/amarillo, ideal para cono de tránsito.", imagen: lamparaSolarDest },
  { id: 54, codigo: "CV-054", nombre: "Lámpara destellante para cono de tránsito | color ambar/blanco", categoria: "lamparas viales", descripcion: "Lámpara destellante para cono de tránsito, en color ámbar/blanco para señalización de seguridad.", imagen: lamparaParaCono },
  { id: 55, codigo: "CV-055", nombre: "Lámpara destellante | color amarilla | con batería", categoria: "lamparas viales", descripcion: "Lámpara destellante amarilla con batería incorporada, para uso inmediato en señalización.", imagen: lamparaConBateria },
  { id: 56, codigo: "CV-056", nombre: "Lámpara solar destellante con cono | color ambar", categoria: "lamparas viales", descripcion: "Lámpara solar destellante en forma de cono, color ámbar, para demarcación lateral en la vía.", imagen: lamparaSolarConeAmbar },
  { id: 57, codigo: "CV-057", nombre: "Captafaro abatible ojo de gato", categoria: "lamparas viales", descripcion: "Captafaro abatible de alta resistencia con diseño de ojo de gato, para una señalización eficaz.", imagen: captafaroOjoGato },
  { id: 58, codigo: "CV-058", nombre: "Lámpara solar destellante con cono | color blanca", categoria: "lamparas viales", descripcion: "Lámpara solar destellante en forma de cono, color blanco, con múltiples LEDs para alta visibilidad.", imagen: lamparaSolarConeBlanca },
  { id: 59, codigo: "CV-059", nombre: "Lámpara destellante amarilla sin batería", categoria: "lamparas viales", descripcion: "Lámpara destellante amarilla con base, lista para usar con fuente de alimentación externa.", imagen: lamparaSinBateria },
  { id: 60, codigo: "CV-060", nombre: "Espejo convexo para exterior 45cm", categoria: "espejos de estacionamiento", descripcion: "Espejo convexo de seguridad para exteriores, ideal para eliminar puntos ciegos en salidas de vehículos.", imagen: espejoExt45 },
  { id: 61, codigo: "CV-061", nombre: "Espejo convexo para exterior 60cm", categoria: "espejos de estacionamiento", descripcion: "Espejo de 60cm de diámetro diseñado para resistir la intemperie y mejorar la visibilidad vial.", imagen: espejoExt60 },
  { id: 62, codigo: "CV-062", nombre: "Espejo convexo para exterior 80cm", categoria: "espejos de estacionamiento", descripcion: "Espejo convexo amplio para control de tráfico en intersecciones y estacionamientos grandes.", imagen: espejoExt80 },
  { id: 63, codigo: "CV-063", nombre: "Espejo convexo para exterior 100cm", categoria: "espejos de estacionamiento", descripcion: "Espejo de gran formato (100cm) para máxima cobertura visual en zonas críticas de tráfico.", imagen: espejoExt100 },
  { id: 64, codigo: "CV-064", nombre: "Espejo convexo para interior 60cm", categoria: "espejos de estacionamiento", descripcion: "Espejo convexo para uso en interiores, ideal para pasillos de almacenes o estacionamientos techados.", imagen: espejoInt60 },
  { id: 65, codigo: "CV-065", nombre: "Conector Espejo 60cm", categoria: "espejos de estacionamiento", descripcion: "Soporte metálico reforzado para la instalación segura de espejos convexos de 60cm.", imagen: conector60 },
  { id: 66, codigo: "CV-066", nombre: "Conector Espejo 80cm/100cm", categoria: "espejos de estacionamiento", descripcion: "Conector de alta resistencia diseñado para espejos de gran diámetro (80cm a 100cm).", imagen: conector80_100 },
  { id: 90, codigo: "CV-090", nombre: "Contenedor de basura C 30lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor compacto de 30 litros con sistema de pedal reforzado, ideal para oficinas o espacios reducidos.", imagen: contenedorBasuraC30lts },
  { id: 91, codigo: "CV-091", nombre: "Contenedor de basura C 50lts con pedal metálico", categoria: "contenedores de basura", descripcion: "Contenedor de 50 litros con pedal metálico de alta durabilidad para uso frecuente.", imagen: contenedorBasuraC50lts },
  { id: 92, codigo: "CV-092", nombre: "Contenedor de basura 120lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor estándar de 120 litros con ruedas y pedal, perfecto para la gestión de residuos domiciliarios o comerciales.", imagen: contenedorBasura120lts },
  { id: 93, codigo: "CV-093", nombre: "Contenedor de basura 240lts con pedal", categoria: "contenedores de basura", descripcion: "Gran capacidad de 240 litros con ruedas de alto tráfico y pedal para apertura higiénica.", imagen: contenedorBasura240lts },
  { id: 94, codigo: "CV-094", nombre: "Contenedor de basura D 30lts con pedal", categoria: "contenedores de basura", descripcion: "Diseño ergonómico de 30 litros con pedal suave, acabado gris oscuro profesional.", imagen: contenedorBasuraD30lts },
  { id: 95, codigo: "CV-095", nombre: "Contenedor de basura 1100lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor industrial de 1100 litros con 4 ruedas giratorias y sistema de pedal integrado.", imagen: contenedorBasura1100lts },
  { id: 96, codigo: "CV-096", nombre: "Contenedor de basura 360lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor de capacidad media-alta (360 litros) ideal para comunidades y empresas.", imagen: contenedorBasura360lts },
  { id: 97, codigo: "CV-097", nombre: "Contenedor de basura 660lts con pedal", categoria: "contenedores de basura", descripcion: "Contenedor de gran volumen (660 litros) con tapa de cierre hermético y pedal de operación ruda.", imagen: contenedorBasura660lts },
  { id: 98, codigo: "CV-098", nombre: "Contenedor de basura 240lts", categoria: "contenedores de basura", descripcion: "Contenedor de basura estándar de 240 litros, fabricado en material resistente ideal para exteriores.", imagen: contenedorDeBasura240ltsSinPedal },
  { id: 99, codigo: "CV-099", nombre: "Contenedor de basura 120lts", categoria: "contenedores de basura", descripcion: "Contenedor de basura de 120 litros, compacto y fácil de movilizar para la gestión diaria de residuos.", imagen: contenedorDeBasura120ltsSinPedal },
  { id: 100, codigo: "CV-100", nombre: "Contenedor de basura 660lts", categoria: "contenedores de basura", descripcion: "Contenedor de gran capacidad (660 litros) con 4 ruedas, diseñado para el manejo de residuos a nivel industrial o comunitario.", imagen: contenedorDeBasura660ltsSinPedal },
  { id: 101, codigo: "CV-101", nombre: "Contenedor de basura 1100lts", categoria: "contenedores de basura", descripcion: "Contenedor industrial de 1100 litros, máxima capacidad y resistencia para la recolección de alto volumen.", imagen: contenedorDeBasura1100ltsSinPedal },
  { id: 102, codigo: "CV-102", nombre: "Contenedor de basura 360lts", categoria: "contenedores de basura", descripcion: "Contenedor de 360 litros, excelente equilibrio entre capacidad y maniobrabilidad para áreas de mediano tráfico.", imagen: contenedorDeBasura360ltsSinPedal },
  { id: 201, codigo: "CV-201", nombre: "Pintura Acrílica Citycril", categoria: "pintura", descripcion: "Base solvente para señalización", imagen: imgafin },
  { id: 202, codigo: "CV-202", nombre: "Plástico en Frío Doscril", categoria: "pintura", descripcion: "Dos componentes de alta duración", imagen: imgdoscril },
  { id: 203, codigo: "CV-203", nombre: "Pintura Acrílica Señacril", categoria: "pintura", descripcion: "Base solvente de secado rápido", imagen: imgralva },
  { id: 204, codigo: "CV-204", nombre: "Twincril Componente A", categoria: "pintura", descripcion: "Señalización vial sistema 1:1", imagen: imgtwinA },
  { id: 205, codigo: "CV-205", nombre: "Twincril Componente B", categoria: "pintura", descripcion: "Catalizador para sistema Twincril", imagen: imgtwinB },
  { id: 206, codigo: "CV-206", nombre: "Pegamento Epóxico", categoria: "pegamento", descripcion: "Para fijación de tachas viales", imagen: pegamento },
  { id: 207, codigo: "CV-207", nombre: "Doscril Rojo", categoria: "pintura", descripcion: "Plástico en frío antideslizante", imagen: doscrilrojo },
  { id: 208, codigo: "CV-208", nombre: "Microesferas de Vidrio", categoria: "pintura", descripcion: "Echostar 5 para retroreflectividad", imagen: microesfera },
  { id: 301, codigo: "CV-301", nombre: "Tacha Reflectiva Prismalux", categoria: "tachas viales", descripcion: "Tacha inyectada en resina plástica de alto impacto con lente prismático de policarbonato de alta retroreflectividad.", imagen: tachaReflectivaPrismalux },
  { id: 302, codigo: "CV-302", nombre: "Tacha Premium P-1090", categoria: "tachas viales", descripcion: "Cuerpo de plástico ABS de alta resistencia con base de diseño alveolar para máxima adherencia al pavimento.", imagen: tachaPremiumP1090 },
  { id: 303, codigo: "CV-303", nombre: "Tacha Eléctrica Led", categoria: "tachas viales", descripcion: "Tacha con sistema de iluminación LED interna para demarcación activa en zonas de baja visibilidad o neblina.", imagen: tachaElectricaLed },
  { id: 304, codigo: "CV-304", nombre: "Tacha Fotoluminiscente Redonda", categoria: "tachas viales", descripcion: "Dispositivo que almacena energía lumínica y la emite en la oscuridad, ideal para zonas peatonales o de emergencia.", imagen: tachaFotoluminiscenteRedonda },
  { id: 305, codigo: "CV-305", nombre: "Tacha Fotoluminiscente Rectangular", categoria: "tachas viales", descripcion: "Variante rectangular con propiedades fotoluminiscentes para señalización de seguridad sin consumo eléctrico.", imagen: tachaFotoluminiscenteRectangular },
  { id: 306, codigo: "CV-306", nombre: "Tacha Reflectiva Provisoria", categoria: "tachas viales", descripcion: "Diseñada para demarcación temporal en zonas de obra, fácil instalación y alta visibilidad nocturna.", imagen: tachaReflectivaProvisoria },
  { id: 307, codigo: "CV-307", nombre: "Tacha para Nieve Euroasfalt", categoria: "tachas viales", descripcion: "Cuerpo de fundición de hierro dúctil de alta resistencia con elementos reflectantes protegidos para zonas de despeje de nieve.", imagen: tachaNieveEuroasfalt },
  { id: 308, codigo: "CV-308", nombre: "Tacha para Nieve Euroasfalt S3 LED", categoria: "tachas viales", descripcion: "Tacha de alta resistencia con sistema de iluminación LED inteligente para visibilidad extrema en condiciones climáticas adversas.", imagen: tachaNieveS3Led },
  { id: 309, codigo: "CV-309", nombre: "Tacha para Nieve Euroasfalt S2 LP", categoria: "tachas viales", descripcion: "Modelo especializado con perfil bajo y alta reflectividad, diseñado para soportar el paso de maquinaria de limpieza de nieve.", imagen: tachaNieveS2Lp },
  { id: 310, codigo: "CV-310", nombre: "Tacha Solar con o sin Vástago", categoria: "tachas viales", descripcion: "Tacha autónoma con carga solar, disponible en versiones para anclaje con vástago o pegado superficial, ideal para delineación nocturna.", imagen: tachaSolarVastago },
  { id: 311, codigo: "CV-311", nombre: "Tacha para Nieve Euroasfalt S4 MAX", categoria: "tachas viales", descripcion: "Modelo de máxima resistencia diseñado para climas extremos, con cuerpo reforzado para soportar el impacto de cuchillas de quitanieves.", imagen: tachaNieveS4Max },
  { id: 312, codigo: "CV-312", nombre: "Tacha para Nieve Euroasfalt S4 KABEL", categoria: "tachas viales", descripcion: "Tacha técnica con canalización interna para cableado, permitiendo una alimentación constante en sistemas de demarcación inteligente.", imagen: tachaNieveS4Kabel },
  { id: 313, codigo: "CV-313", nombre: "Tacha para Valla Peatonal", categoria: "tachas viales", descripcion: "Elemento reflectivo diseñado específicamente para ser instalado en estructuras de vallas, mejorando la visibilidad de perímetros urbanos.", imagen: tachaVallaPeatonal },
  { id: 314, codigo: "CV-314", nombre: "Tachón LED Bidireccional", categoria: "tachon", descripcion: "Tachón de gran tamaño con tecnología LED en ambas caras para una señalización activa y potente en carreteras y zonas de riesgo.", imagen: tachonLedBidireccional },
  { id: 315, codigo: "CV-315", nombre: "Tachón Bidireccional sin Vástago", categoria: "tachon", descripcion: "Reductor de velocidad y delineador de alta resistencia con reflectancia en ambos sentidos, diseñado para instalación superficial.", imagen: tachonBidireccionalSinVastago },
  { id: 323, codigo: "CV-323", nombre: "Pintura Acrílica Base Agua", categoria: "pintura", descripcion: "Pintura ecológica de secado rápido diseñada para demarcación vial urbana y estacionamientos con bajo impacto ambiental.", imagen: pinturaAcrilicaAgua },
  { id: 324, codigo: "CV-324", nombre: "Pintura Acrílica Base Solvente", categoria: "pintura", descripcion: "Fórmula de alta durabilidad y adherencia, resistente a la abrasión vehicular y condiciones climáticas exigentes.", imagen: pinturaAcrilicaSolvente },
  { id: 325, codigo: "CV-325", nombre: "Pintura Termoplástica Kataline", categoria: "pintura", descripcion: "Compuesto sólido que se aplica en caliente para obtener capas de gran espesor y máxima vida útil en carreteras de alto tráfico.", imagen: pinturaKataline },
  { id: 326, codigo: "CV-326", nombre: "Pintura Semex", categoria: "pintura", descripcion: "Pintura técnica especializada para señalización horizontal de alto desempeño con excelentes propiedades de retrorreflexión.", imagen: pinturasemex },
  { id: 327, codigo: "CV-327", nombre: "Pintura Termoplástica Marcas Viales", categoria: "pintura", descripcion: "Solución termoplástica premium para la creación de símbolos, flechas y líneas continuas de larga duración en pavimentos.", imagen: pinturaTermoplasticaMarcas },
  { id: 328, codigo: "CV-328", nombre: "Kit Pintura Doble Componente A+B", categoria: "pintura", descripcion: "Sistema de señalización de alta resistencia que requiere la mezcla de dos componentes para un fraguado químico duradero.", imagen: kitDobleComponente },
  { id: 329, codigo: "CV-329", nombre: "Microesferas de Vidrio", categoria: "pintura", descripcion: "Agente reflectante que se aplica sobre la pintura fresca para otorgar propiedades de visibilidad nocturna y retrorreflexión.", imagen: microesferasVial },
  { id: 330, codigo: "CV-330", nombre: "Solvente Acrílico", categoria: "pintura", descripcion: "Diluyente especializado para ajustar la viscosidad de pinturas acrílicas y realizar la limpieza de equipos de aplicación.", imagen: solventeAcrilico },
  { id: 331, codigo: "CV-331", nombre: "Primer Termoplástico", categoria: "pintura", descripcion: "Imprimante diseñado para mejorar la adherencia de la pintura termoplástica sobre superficies de concreto o asfalto envejecido.", imagen: primerTermoplastico },
  { id: 332, codigo: "CV-332", nombre: "Primer Termoplástico Preformado y Solvente Epóxico", categoria: "pintura", descripcion: "Sellador de base para aplicaciones preformadas y solvente reactivo para sistemas epóxicos de alta fijación.", imagen: primerPreformadoEpoxico },
  { id: 347, codigo: "CV-347", nombre: "Pintura Acrílica Tecnoquim", categoria: "pintura", descripcion: "Pintura acrílica Tecnoquim para señalización y demarcación vial de alto desempeño.", imagen: pinturaAcrilicaTecnoquim },
  { id: 333, codigo: "CV-333", nombre: "Cono de Tráfico 12\"", categoria: "conos viales", descripcion: "Cono de 30 cm de altura fabricado en PVC de alta visibilidad, ideal para señalización en espacios reducidos o faenas menores.", imagen: cono12 },
  { id: 334, codigo: "CV-334", nombre: "Cono de Tráfico 18\"", categoria: "conos viales", descripcion: "Cono de 45 cm de altura, estándar para delimitación de áreas de trabajo y estacionamientos con excelente flexibilidad.", imagen: cono18 },
  { id: 335, codigo: "CV-335", nombre: "Cono de Tráfico 28\"", categoria: "conos viales", descripcion: "Cono de 70 cm de altura, tamaño reglamentario para uso en carreteras y vías urbanas de tráfico moderado.", imagen: cono28 },
  { id: 336, codigo: "CV-336", nombre: "Cono de Tráfico 36\"", categoria: "conos viales", descripcion: "Cono de 90 cm de altura para máxima visibilidad en autopistas y zonas de alta velocidad o peligro.", imagen: cono36 },
  { id: 337, codigo: "CV-337", nombre: "Cono de Tráfico 36\" Anti-Viento", categoria: "conos viales", descripcion: "Modelo de 90 cm con base reforzada y diseño aerodinámico para mantener la estabilidad en zonas con corrientes de aire fuertes.", imagen: cono36AntiViento },
  { id: 338, codigo: "CV-338", nombre: "Cono Retráctil 28\"", categoria: "conos viales", descripcion: "Cono colapsable de 70 cm con cintas reflectantes, ideal para vehículos de emergencia por su ahorro de espacio.", imagen: cono28Retractil },
  { id: 339, codigo: "CV-339", nombre: "Cono Retráctil 36\"", categoria: "conos viales", descripcion: "Versión retráctil de 90 cm que combina gran altura con facilidad de almacenamiento, incluye base pesada para estabilidad.", imagen: cono36Retractil },
  { id: 340, codigo: "CV-340", nombre: "Base para Conos", categoria: "conos viales", descripcion: "Base de caucho vulcanizado diseñada para aumentar el peso y la estabilidad de los conos en condiciones climáticas adversas.", imagen: baseConos },
  { id: 341, codigo: "CV-341", nombre: "Hito Tubular Abatible", categoria: "hitos viales", descripcion: "Hito diseñado para recuperar su posición vertical tras ser impactado por un vehículo, minimizando daños y manteniendo la canalización.", imagen: hitoTubularAbatible },
  { id: 342, codigo: "CV-342", nombre: "Hito Tubular Estático", categoria: "hitos viales", descripcion: "Poste de señalización rígido para delimitación fija de calzadas, zonas de no estacionar y segregación de flujos vehiculares.", imagen: hitoTubularEstatico },
  { id: 343, codigo: "CV-343", nombre: "Hito Tubular Flexible", categoria: "hitos viales", descripcion: "Cuerpo de polímero altamente flexible que soporta múltiples atropellos sin romperse, ideal para zonas de alta fricción vial.", imagen: hitoTubularFlexible },
  { id: 344, codigo: "CV-344", nombre: "Hito Roma", categoria: "hitos viales", descripcion: "Dispositivo de canalización de diseño robusto con franjas reflectantes, utilizado frecuentemente en bifurcaciones y zonas de riesgo.", imagen: hitoRoma },
  { id: 345, codigo: "CV-345", nombre: "Hito H75 Lacroix", categoria: "hitos viales", descripcion: "Hito de alta gama bajo estándares internacionales, con excelente visibilidad diurna y nocturna para seguridad vial avanzada.", imagen: hitoH75Lacroix },
  { id: 346, codigo: "CV-346", nombre: "Hito Paleta", categoria: "hitos viales", descripcion: "Delineador vertical plano con amplia superficie reflectante para guiar el tráfico en curvas peligrosas o cambios de pista.", imagen: hitoPaleta },
  { id: 407, codigo: "CV-407", nombre: "Hito Abatible LOR", categoria: "hitos viales", descripcion: "Hito de alta resistencia con sistema de retorno automático tras impactos, diseñado para la canalización de flujos vehiculares críticos.", imagen: hitoAbatibleLor },
  { id: 348, codigo: "CV-348", nombre: "Hito Pexco", categoria: "hitos viales", descripcion: "Delineador de alto desempeño fabricado bajo estándares internacionales, reconocido por su durabilidad extrema y visibilidad superior.", imagen: hitoPexco },
  { id: 349, codigo: "CV-349", nombre: "Hito de Faena", categoria: "hitos viales", descripcion: "Poste de señalización temporal diseñado para delimitar zonas de trabajo en construcción, fácil de instalar y altamente visible.", imagen: hitoFaena },
  { id: 350, codigo: "CV-350", nombre: "Hito Base Rellenable París", categoria: "hitos viales", descripcion: "Hito versátil con base que permite el llenado con agua o arena para otorgar mayor estabilidad sin necesidad de anclaje permanente.", imagen: hitoBaseParis },
  { id: 351, codigo: "CV-351", nombre: "Hito Abatible Desmontable A", categoria: "hitos viales", descripcion: "Sistema de canalización que permite retirar el poste de su base de forma rápida para facilitar labores de limpieza o cambios de vía.", imagen: hitoDesmontableA },
  { id: 352, codigo: "CV-352", nombre: "Hito Abatible Desmontable Premium", categoria: "hitos viales", descripcion: "Versión reforzada del sistema desmontable con materiales de grado ingeniería para mayor vida útil y resistencia en autopistas.", imagen: hitoDesmontablePremium },
  { id: 353, codigo: "CV-353", nombre: "Hito Abatible PU", categoria: "hitos viales", descripcion: "Hito fabricado en poliuretano de alta flexibilidad que permite múltiples atropellos recuperando su forma original sin romperse.", imagen: hitoAbatiblePu },
  { id: 354, codigo: "CV-354", nombre: "Hito Abatible Premium PU", categoria: "hitos viales", descripcion: "Versión de poliuretano reforzado con mayor resistencia al impacto y protección UV para una vida útil prolongada en exteriores.", imagen: hitoAbatiblePremiumPu },
  { id: 355, codigo: "CV-355", nombre: "Hito Abatible Desmontable B", categoria: "hitos viales", descripcion: "Sistema de canalización abatible con base de encaje rápido tipo B, ideal para zonas que requieren cambios de configuración frecuentes.", imagen: hitoDesmontableB },
  { id: 356, codigo: "CV-356", nombre: "Hito T-120", categoria: "hitos viales", descripcion: "Delineador vertical de gran altura (120 cm) diseñado para ofrecer máxima visibilidad en zonas de peligro o cambios de carril.", imagen: hitoT120 },
  { id: 357, codigo: "CV-357", nombre: "Hito de Arista", categoria: "hitos viales", descripcion: "Dispositivo de señalización lateral para carreteras, equipado con reflectantes para guiar el trazado de la vía en condiciones nocturnas.", imagen: hitoArista2 },
  { id: 358, codigo: "CV-358", nombre: "Bolardo Esfera PU", categoria: "hitos viales", descripcion: "Bolardo con cabezal redondeado fabricado en poliuretano, diseñado para proteger zonas peatonales con un acabado estético y seguro.", imagen: bolardoEsferaPu },
  { id: 359, codigo: "CV-359", nombre: "Hito T-130", categoria: "hitos viales", descripcion: "Delineador vertical de gran formato diseñado para canalizar flujos en zonas de alta velocidad, con bandas reflectantes de alta intensidad.", imagen: hitoT130 },
  { id: 360, codigo: "CV-360", nombre: "Hito Flexiboll", categoria: "hitos viales", descripcion: "Bolardo flexible de alta resistencia al impacto, ideal para proteger zonas peatonales y delimitar espacios urbanos con seguridad.", imagen: hitoFlexiboll },
  { id: 361, codigo: "CV-361", nombre: "Hito Flexible para Ciclovía", categoria: "hitos viales", descripcion: "Hito de perfil delgado y alta visibilidad diseñado específicamente para la segregación segura de carriles exclusivos de bicicletas.", imagen: hitoFlexibleCiclovia },
  { id: 362, codigo: "CV-362", nombre: "Panel Abatible Springback", categoria: "hitos viales", descripcion: "Panel de señalización con sistema de resorte interno que permite el abatimiento completo y retorno automático tras un impacto.", imagen: panelSpringback },
  { id: 363, codigo: "CV-363", nombre: "Canalizador Zebra", categoria: "ciclo vias", descripcion: "Separador vial de diseño robusto y redondeado para protección de ciclistas, con franjas reflectantes de alta visibilidad.", imagen: canalizadorZebra },
  { id: 364, codigo: "CV-364", nombre: "Canalizador Ciclovía Zebra Zero", categoria: "ciclo vias", descripcion: "Elemento de segregación fabricado en material reciclado con perfil bajo para minimizar riesgos de caídas en entornos urbanos.", imagen: canalizadorZebraZero },
  { id: 365, codigo: "CV-365", nombre: "Segregador París", categoria: "ciclo vias", descripcion: "Bloque de canalización de diseño europeo, ideal para delimitar carriles exclusivos y proteger zonas peatonales.", imagen: segregadorParis },
  { id: 366, codigo: "CV-366", nombre: "Segregador Vial con Reflectivo", categoria: "ciclo vias", descripcion: "Separador de calzada con bandas reflectantes integradas para una demarcación clara y segura en condiciones de poca luz.", imagen: segregadorReflectivo },
  { id: 367, codigo: "CV-367", nombre: "Canalizador Jaguar", categoria: "ciclo vias", descripcion: "Dispositivo de segregación de alta resistencia con diseño aerodinámico, optimizado para vías de tráfico mixto.", imagen: canalizadorJaguar },
  { id: 368, codigo: "CV-368", nombre: "Barrera New Jersey", categoria: "barreras", descripcion: "Barrera plástica rellenable de gran tamaño para canalización de flujos vehiculares y protección en zonas de obra.", imagen: barreraNewJersey },
  { id: 369, codigo: "CV-369", nombre: "Barrera New Jersey Apilable", categoria: "barreras", descripcion: "Diseño optimizado para almacenamiento y transporte eficiente, rellenable con agua o arena para mayor estabilidad.", imagen: barreraNewJerseyApilable },
  { id: 370, codigo: "CV-370", nombre: "Paleta Pare-Siga", categoria: "seguridad vial", descripcion: "Dispositivo manual de control de tránsito con doble cara reflectante para gestión de tráfico en faenas o emergencias.", imagen: paletaPareSiga },
  { id: 371, codigo: "CV-371", nombre: "Paleta Pare-Siga LED", categoria: "seguridad vial", descripcion: "Paleta con iluminación LED interna para maximizar la visibilidad del operador en trabajos nocturnos o con neblina.", imagen: paletaPareSigaLed },
  { id: 372, codigo: "CV-372", nombre: "Paleta Pare-Siga Plegable", categoria: "seguridad vial", descripcion: "Versión compacta y fácil de guardar, diseñada para transportarse en vehículos de emergencia o mantenimiento vial.", imagen: paletaPareSigaPlegable },
  { id: 373, codigo: "CV-373", nombre: "Lámpara Solar", categoria: "lamparas viales", descripcion: "Dispositivo de iluminación autónoma con carga solar, ideal para señalización permanente en zonas sin suministro eléctrico.", imagen: lamparaSolar },
  { id: 374, codigo: "CV-374", nombre: "Lámpara de Faena", categoria: "lamparas viales", descripcion: "Baliza destellante de alta resistencia diseñada para delimitar zonas de trabajo y advertir peligros en faenas viales.", imagen: lamparaFaena },
  { id: 375, codigo: "CV-375", nombre: "Kit de Balizas Destellantes", categoria: "lamparas viales", descripcion: "Conjunto de balizas de emergencia recargables, ideales para vehículos de asistencia y señalización rápida de accidentes.", imagen: kitBalizas },
  { id: 376, codigo: "CV-376", nombre: "Lámpara Bidireccional para Conos", categoria: "lamparas viales", descripcion: "Luz de advertencia con doble cara reflectante y destellante, diseñada para encajar perfectamente en la parte superior de conos.", imagen: lamparaBidireccionalConos },
  { id: 377, codigo: "CV-377", nombre: "Lámpara Destellante Portátil", categoria: "lamparas viales", descripcion: "Dispositivo ligero y manual con múltiples modos de destello para control de tráfico y seguridad personal del operador.", imagen: lamparaDestellantePortatil },
  { id: 378, codigo: "CV-378", nombre: "Lámpara Solar Doble Foco para Conos", categoria: "lamparas viales", descripcion: "Sistema solar avanzado con dos puntos de emisión de luz para una visibilidad de 360 grados en perímetros de obra.", imagen: lamparaSolarDobleFoco },
  { id: 379, codigo: "CV-379", nombre: "Sistema de Canalización Luminoso", categoria: "lamparas viales", descripcion: "Conjunto modular de lámparas sincronizadas para crear líneas de guía luminosas en desvíos o zonas críticas.", imagen: sistemaCanalizacion },
  { id: 380, codigo: "CV-380", nombre: "Lámpara Solar de Advertencia para Conos", categoria: "lamparas viales", descripcion: "Lámpara compacta con sensor de oscuridad automático para señalización preventiva nocturna en conos de tránsito.", imagen: lamparaSolarAdvertencia },
  { id: 381, codigo: "CV-381", nombre: "Lámpara Solar de Alto Brillo", categoria: "lamparas viales", descripcion: "Baliza solar con tecnología LED de alta intensidad para penetrar condiciones de neblina o lluvia intensa.", imagen: lamparaSolarAltoBrillo },
  { id: 382, codigo: "CV-382", nombre: "Lámpara Redonda para Conos", categoria: "lamparas viales", descripcion: "Luz de advertencia circular de gran superficie, compatible con la mayoría de los conos del mercado para seguridad vial.", imagen: lamparaRedondaConos },
  { id: 383, codigo: "CV-383", nombre: "Baliza Solar para Conos", categoria: "Balizas", descripcion: "Dispositivo de advertencia con carga solar diseñado para insertarse de forma segura en la parte superior de conos de tráfico.", imagen: balizaSolarConos },
  { id: 384, codigo: "CV-384", nombre: "Baliza Solar para Hitos", categoria: "Balizas", descripcion: "Luz destellante autónoma compatible con hitos tubulares, ideal para canalización vial nocturna de larga duración.", imagen: balizaSolarHitos },
  { id: 385, codigo: "CV-385", nombre: "Baliza LED para Acceso Vehicular", categoria: "Balizas", descripcion: "Lámpara de señalización de alta intensidad para portones, barreras y accesos industriales con tecnología LED de bajo consumo.", imagen: balizaLedAcceso },
  { id: 386, codigo: "CV-386", nombre: "Baliza Magnética para Vehículos", categoria: "Balizas", descripcion: "Baliza destellante con base imantada de gran sujeción, diseñada para señalizar vehículos de servicio o emergencia en movimiento.", imagen: balizaMagneticaVehiculos },
  { id: 387, codigo: "CV-387", nombre: "Baliza Solar de Clip", categoria: "Balizas", descripcion: "Luz preventiva con sistema de fijación rápida mediante clip, versátil para instalar en mallas de faena o ropa de seguridad.", imagen: balizaSolarClip },
  { id: 388, codigo: "CV-388", nombre: "Baliza de Emergencia", categoria: "Balizas", descripcion: "Equipo de iluminación crítica con múltiples patrones de destello, esencial para la señalización de accidentes y desvíos temporales.", imagen: balizaEmergencia },
  { id: 389, codigo: "CV-389", nombre: "Defensa Caminera", categoria: "defensas metalicas", descripcion: "Barrera de acero galvanizado diseñada para contener y redireccionar vehículos, minimizando daños en caso de salidas de calzada.", imagen: defensaCaminera },
  { id: 390, codigo: "CV-390", nombre: "Poste Costanera", categoria: "defensas metalicas", descripcion: "Soporte vertical de acero para defensas camineras, diseñado para anclaje directo en suelo o mediante placa base a hormigón.", imagen: posteCostanera },
  { id: 391, codigo: "CV-391", nombre: "Separador de Defensa", categoria: "defensas metalicas", descripcion: "Elemento distanciador que mantiene la viga de la defensa separada del poste, optimizando la absorción de energía en impactos.", imagen: separadorDefensa },
  { id: 392, codigo: "CV-392", nombre: "Pernos para Defensas", categoria: "defensas metalicas", descripcion: "Set de pernos de alta resistencia galvanizados en caliente, específicos para el ensamblaje seguro de sistemas de contención vial.", imagen: pernosDefensas },
  { id: 393, codigo: "CV-393", nombre: "Terminal Simple Galvanizado", categoria: "defensas metalicas", descripcion: "Pieza final de defensa caminera con terminación redondeada para evitar aristas cortantes en el extremo de la barrera.", imagen: terminalSimple },
  { id: 394, codigo: "CV-394", nombre: "Terminal Michigan", categoria: "defensas metalicas", descripcion: "Terminal de diseño ensanchado que proporciona una transición segura y estética al inicio o final de las defensas metálicas.", imagen: terminalMichigan },
  { id: 395, codigo: "CV-395", nombre: "Terminal SKT", categoria: "defensas metalicas", descripcion: "Sistema terminal de absorción de energía diseñado para comprimirse tras un impacto frontal, reduciendo la desaceleración del vehículo.", imagen: terminalSkt },
  { id: 396, codigo: "CV-396", nombre: "Poste Zebra", categoria: "sistemas inteligentes", descripcion: "Poste delineador con bandas reflectantes de alta intensidad, utilizado para canalizar flujos y resaltar zonas de peligro o ciclovías.", imagen: posteZebra },
  { id: 397, codigo: "CV-397", nombre: "Ojo de Gato Tipo A", categoria: "defensas metalicas", descripcion: "Captafaro de alta reflectividad diseñado para fijación directa en el valle de la defensa caminera, mejorando la visibilidad del trazado vial.", imagen: ojoGatoTipoA },
  { id: 398, codigo: "CV-398", nombre: "Ojo de Gato Tipo B", categoria: "defensas metalicas", descripcion: "Dispositivo reflectante con soporte angular para una mayor exposición lumínica en curvas y zonas críticas de la carretera.", imagen: ojoGatoTipoB },
  { id: 399, codigo: "CV-399", nombre: "Ojo de Gato Abatible", categoria: "defensas metalicas", descripcion: "Elemento reflectante con base flexible que permite el abatimiento en caso de roce, recuperando su posición original sin dañarse.", imagen: ojoGatoAbatible },
  { id: 400, codigo: "CV-400", nombre: "Ojo de Gato Abatible Triangular", categoria: "defensas metalicas", descripcion: "Variante de diseño triangular con tecnología de retorno elástico, optimizado para señalización lateral en barreras de contención.", imagen: ojoGatoAbatibleTriangular },
  { id: 401, codigo: "CV-401", nombre: "Ojo de Gato Reflectante Triangular", categoria: "defensas metalicas", descripcion: "Captafaro de forma prismática triangular con lentes de policarbonato para una excelente retrorreflexión en ángulos amplios.", imagen: ojoGatoReflectanteTriangular },
  { id: 402, codigo: "CV-402", nombre: "Captafaro Angular", categoria: "defensas metalicas", descripcion: "Delineador angular para defensas metálicas, diseñado para resaltar obstáculos y cambios de dirección en condiciones nocturnas.", imagen: captafaroAngular },
  { id: 403, codigo: "CV-403", nombre: "Kit Pegamento Epóxico", categoria: "pegamento", descripcion: "Adhesivo bicomponente de alta resistencia diseñado para la fijación permanente de tachas y tachones sobre asfalto o concreto.", imagen: kitEpoxico },
  { id: 404, codigo: "CV-404", nombre: "Pegamento Plastigum", categoria: "pegamento", descripcion: "Pegamento especializado para dispositivos plásticos viales, ofreciendo una excelente adherencia y flexibilidad ante cambios térmicos.", imagen: pegamentoPlastigum },
  { id: 405, codigo: "CV-405", nombre: "Pegamento Bituminoso", categoria: "pegamento", descripcion: "Adhesivo termoplástico a base de asfalto modificado, ideal para aplicaciones rápidas de tachas reflectantes en grandes extensiones.", imagen: pegamentoBituminoso },
  { id: 406, codigo: "CV-406", nombre: "Señales de Tránsito", categoria: "señales de transito", descripcion: "Fabricación de señales reglamentarias, preventivas e informativas con láminas reflectantes de alta intensidad según normativa vigente.", imagen: señalesTransito },
  { id: 408, codigo: "CV-408", nombre: "Poste Omega Galvanizado 1.5m - Espesor 2.5mm", categoria: "postes omegas", descripcion: "Soporte de acero con perfil tipo Omega de 1.5 metros, galvanizado para prevenir la corrosión en ambientes exteriores. Espesor 2.5mm.", imagen: posteOmega },
  { id: 409, codigo: "CV-409", nombre: "Poste Omega Galvanizado 2m - Espesor 2.5mm", categoria: "postes omegas", descripcion: "Soporte de acero con perfil tipo Omega de 2 metros, galvanizado para prevenir la corrosión en ambientes exteriores. Espesor 2.5mm.", imagen: posteOmega },
  { id: 410, codigo: "CV-410", nombre: "Poste Omega Galvanizado 3m - Espesor 2.5mm", categoria: "postes omegas", descripcion: "Soporte de acero con perfil tipo Omega de 3 metros, galvanizado para prevenir la corrosión en ambientes exteriores. Espesor 2.5mm.", imagen: posteOmega },
  { id: 411, codigo: "CV-411", nombre: "Poste Omega Galvanizado 3.5m - Espesor 2.5mm", categoria: "postes omegas", descripcion: "Soporte de acero con perfil tipo Omega de 3.5 metros, galvanizado para prevenir la corrosión en ambientes exteriores. Espesor 2.5mm.", imagen: posteOmega },
];

export default function Productos() {
  // Estado para controlar qué categoría está activa
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  // Estado para el término de búsqueda
  const [busqueda, setBusqueda] = useState('');

  // Extraemos las categorías únicas dinámicamente de la lista de productos
  const categorias = ['Todos', ...new Set(listaProductos.map(producto => producto.categoria))];

  // Filtramos los productos según la categoría activa
  let productosFiltrados = categoriaActiva === 'Todos'
    ? listaProductos
    : listaProductos.filter(producto => producto.categoria === categoriaActiva);

  // Filtramos también por búsqueda (nombre o código)
  if (busqueda.trim()) {
    const terminoBusqueda = busqueda.toLowerCase();
    productosFiltrados = productosFiltrados.filter(producto =>
      producto.nombre.toLowerCase().includes(terminoBusqueda) ||
      producto.codigo.toLowerCase().includes(terminoBusqueda)
    );
  }

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

        {/* Barra de Búsqueda */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nombre o código de producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-full border-2 border-gray-200 focus:border-cvial-secondary focus:outline-none transition-colors placeholder-gray-400"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
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
                  className={`w-full h-full object-contain transition-transform duration-500 image-rendering-auto ${producto.id === 207 // ID del Doscril Rojo
                      ? 'scale-[1.6] group-hover:scale-[1.75]' // Escala aumentada al 160% y 175% en hover
                      : 'group-hover:scale-105' // Resto de productos normal
                    }`}
                  style={{
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.05) brightness(1.02)',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                />
                {/* Etiqueta de Código exclusivo - Lado izquierdo */}
                <div className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm text-center bg-cvial-primary text-white">
                  {producto.codigo}
                </div>
                {/* Etiqueta de Categoría flotante dinámica - Lado derecho */}
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