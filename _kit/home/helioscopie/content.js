var FONTS=['300 1em "Barlow Semi Condensed"','italic 300 1em "Barlow Semi Condensed"','400 1em "Barlow Semi Condensed"','italic 400 1em "Barlow Semi Condensed"','400 1em "Barlow"','500 1em "Barlow"','600 1em "Barlow"'];
var MAIL="commercial@helioscopie.fr";
var TW="https://www.helioscopie.fr";
/* produits : chaque ligne vient de helioscopie.fr (/heliosphere, /copie-de-heliosphere = Heliogast, /copie-de-dynamesh-1 = Heliosond,
   /copie-de-heliosphere-1 = DynaMesh, /copie-de-dynamesh = Bulkamid). [domaine, produit, description, statut, détail] */
var PIPE=[
 ["Obésité","HELIOSPHERE","Ballon intragastrique à air","Conçu et fabriqué par Helioscopie","Un ballon entièrement gonflé à l’air, de moins de 15 g, pour le traitement non chirurgical de l’obésité. Newtech 600 (environ 105 mm, 600 cm³) et Newtech 720 (environ 110 mm, 720 cm³), avec son kit d’extraction dédié."],
 ["Obésité","HELIOGAST","Anneau gastrique ajustable","Produit à 100 % à Vienne","Implanté autour de la partie haute de l’estomac et relié à un site implantable. Deux anneaux, HAGA (10 cm³, membrane « double appui ») et HAGE (7 cm³), et trois sites implantables brevetés, dont le site cylindrique EV3, accessible à 360°."],
 ["Obésité","HELIOSOND","Sonde de calibration gastrique","Fabriquée en France · classe Is","Un tube de silicone biocompatible pour calibrer l’estomac pendant une sleeve, un by-pass ou la pose d’un anneau. 36 ou 39 Fr, 850 mm, avec ou sans ballonnet asymétrique gonflé à l’air jusqu’à 40 cm³."],
 ["Renfort de paroi","DYNAMESH®","Implants de renfort de paroi","Distributeur exclusif pour la France","Le seul renfort de paroi fabriqué en polyvinylidène fluoride (PVDF), pour les hernies inguinales, ombilicales, péristomiales et hiatales, et les éventrations les plus complexes."],
 ["Incontinence urinaire","BULKAMID®","Agent de comblement urétral","Distributeur exclusif pour la France","Un gel composé à 97,5 % d’eau et 2,5 % de polyacrylamide, injecté dans la paroi de l’urètre : un traitement de l’incontinence urinaire d’effort féminine, sans incision."]];
/* certifications (helioscopie.fr, accueil et pages produits) */
var EVID=[
 ["Qualité","Système de management de la qualité certifié EN ISO 13485"],
 ["Marquage CE","Gammes Helioscopie certifiées selon le règlement (UE) 2017/745 (RDM), organisme notifié KIWA 0476"],
 ["Heliogast","Plus de 9 000 cas analysés ; complications de type slippage ou dilatation de poche rares (< 3 %)"],
 ["Diffusion","Auprès des praticiens par le réseau commercial en France, et par des distributeurs à l’international"]];
var TEAM=[];
/* actualités : uniquement des éléments qui renvoient vers une page. [date, titre, lieu, url] */
var NEWS=[
 ["16–19 nov. 2026","MEDICA 2026 : Helioscopie au hall 7A, stand 7AE04","Düsseldorf","https://www.helioscopie.fr/nov-26-medica-2026"],
 ["18–21 nov. 2026","120e Congrès Français d’Urologie, avec Bulkamid","Paris","https://www.helioscopie.fr/nov-26-cfu-2026"],
 ["13–15 oct. 2026","36es Journées Euro-Pharmat","Rennes","https://www.helioscopie.fr/oct-26-journées-europharmat-2026"],
 ["9–11 sept. 2026","Medical Fair Asia 2026","Singapour","https://www.helioscopie.fr/sept-26-medical-fair-asia-2026"],
 ["3 juil. 2026","Congrès HERNIA-France 2026, avec DynaMesh","Paris","https://www.helioscopie.fr/juil-26-hernia-france-2026"]];
var SHEETS=[];
