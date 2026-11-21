var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','300 1em "Jost"','400 1em "Jost"','500 1em "Jost"'];
var WEB="https://www.ambiotis.com/";
var MAIL="contact@ambiotis.com";
var NEWSPG=WEB+"informations-resolution-inflammation.html";
var HARP="https://cordis.europa.eu/project/id/101311747";
/* services: the five sectors on ambiotis.com. [name, promise, tag, detail, link, label] */
var SERV=[
 ["Biotech & Pharma","Réaliser une preuve de concept","Préclinique","Des approches dédiées à chaque aire thérapeutique : arthrite, BPCO, allergies, maladie de Crohn, colite, obésité et diabète, péritonite. Preuve de concept et mécanismes d’action de vos molécules.",WEB+"biotech-pharma-inflammation-resolution.html","Biotech & Pharma"],
 ["Dermatologie & cosmétique","Valider l’efficacité de nouveaux actifs","Peau","Des modèles cellulaires et de peau pour un positionnement adapté au marché : protection cutanée, anti-pollution, anti-âge, défense, acné et autres maladies de la peau.",WEB+"dermo-cosmetique-protection-peau.html","Dermo-cosmétique"],
 ["Nutraceutique","Amener des preuves d’efficacité","Ingrédients santé","Des évaluations biologiques d’ingrédients et d’aliments santé pour valoriser leur potentiel immuno-modulateur, la prévention de pathologies et le maintien de l’équilibre.",WEB+"nutraceutique-benefices-sante.html","Nutraceutique"],
 ["Essais cliniques","Valider les mécanismes d’action chez l’homme","Clinique","Un suivi précis et quantitatif des médiateurs d’intérêt dans divers échantillons biologiques humains, par spectrométrie de masse.",WEB+"essais-cliniques-spm-spectrometrie-masse.html","Essais cliniques"],
 ["Santé animale","Valoriser aliments de santé et produits vétérinaires","Vétérinaire","Des évaluations biologiques sur mesure de produits destinés au bien-être et à la santé de l’animal.",WEB+"sante-animale.html","Santé animale"]];
/* technology platform: ambiotis.com/plateforme-de-technologies.html. [name, what, tag, detail] */
var TECH=[
 ["Modèles cellulaires et animaux","Cellules humaines primaires, rats, souris","Modèles","Inflammation, résolution, protection tissulaire et cutanée, immuno-modulation, immuno-toxicité, sénescence, cytotoxicité, fonctions cellulaires (phagocytose, burst oxydatif), biodisponibilité."],
 ["Lipidomique","LC-MS/MS (QTrap 6500+) et GC-FID","Lipides","Eicosanoïdes, médiateurs inflammatoires et SPMs, endocannabinoïdes, acides gras saturés, mono- et poly-insaturés (oméga-3, oméga-6, lipides spécifiques de la peau), cholestérol, stérols, triglycérides, squalène."],
 ["Cytométrie","Populations cellulaires et récepteurs","Cellules","Identification et caractérisation de populations cellulaires ou de récepteurs, quantification des radicaux libres oxygénés, cytokines et chimiokines intracellulaires."],
 ["Fluorimétrie, luminométrie, multiplexage","Phagocytose, ELISA/EIA, cytokines","Dosages","Capacités de phagocytose des macrophages, radicaux libres oxygénés, quantification de cytokines, chimiokines et lipides, en simplex ou en multiplex."],
 ["Real-Time PCR et histologie","Expression génique, intégrité tissulaire","Tissus","Profils d’expression génique et puces dynamiques en nanofluidique ; infiltration de cellules inflammatoires, intégrité tissulaire et score pathologique."]];
/* research: CORDIS and ambiotis.com news. [title, funder, status, detail, link, label] */
var RES=[
 ["HARPNET : la pharmacologie de la résolution","Horizon Europe · MSCA Doctoral Network · 101311747","2026–2030","Un réseau doctoral coordonné par Queen Mary University of London : 14 bénéficiaires, 11 partenaires associés et quinze doctorants formés à la pharmacologie de la résolution, sur la polyarthrite rhumatoïde et ses complications cardiovasculaires.",HARP,"CORDIS"],
 ["ImmunAID : maladies auto-inflammatoires","Horizon 2020 · convention n° 779295","Projet européen","Optimiser le diagnostic, la classification et la prise en charge des patients atteints de maladies auto-inflammatoires rares. Ambiotis y évalue les marqueurs de résolution par métabololipidomique.",WEB+"informations-resolution-inflammation/56-immunaid.html","Actualité Ambiotis"],
 ["L’Atlas de la résolution de l’inflammation","Publication collaborative internationale","2020","Une ressource en libre accès, construite avec des laboratoires du monde entier, pour la recherche et l’enseignement sur l’inflammation aiguë et sa résolution.",WEB+"informations-resolution-inflammation/60-atlas-inflammation-resolution.html","Actualité Ambiotis"]];
/* people: ambiotis.com/societe-cro-inflammation-resolution.html; no portraits are published */
var TEAM=[
 ["Marc Dubourdeau","Président et Directeur Scientifique","Docteur en immunologie de l’Université Paul Sabatier (Toulouse) et titulaire d’un mastère en management de l’École Supérieure de Commerce de Toulouse. Avant de créer Ambiotis, il a débuté sa carrière à l’Institut Pasteur, sur les mécanismes inflammatoires."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["14 juillet 2026","Ambiotis rejoint HARPNET, réseau doctoral Marie Skłodowska-Curie sur la pharmacologie de la résolution (contribution UE de 314 669 €)","CORDIS",HARP],
 ["4 novembre 2024","Ambiotis co-organise la seconde édition du colloque « La MucO par les Sciences », consacré aux médiateurs de la résolution dans la mucoviscidose","Ambiotis",WEB+"informations-resolution-inflammation/79-muco-par-les-sciences.html"],
 ["20 septembre 2021","Ambiotis à Vitafoods Europe, Genève, pour l’évaluation d’ingrédients nutraceutiques","Ambiotis",WEB+"informations-resolution-inflammation/78-vitafood.html"],
 ["22 décembre 2020","Publication de « The Atlas of Inflammation Resolution », avec des laboratoires du monde entier","Ambiotis",WEB+"informations-resolution-inflammation/60-atlas-inflammation-resolution.html"]];
var SHEETS=[];
