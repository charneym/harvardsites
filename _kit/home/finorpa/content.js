var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','600 1em "Hanken Grotesk"'];
var WEB="https://www.finorpa.fr/";
var TEL="03 20 31 59 54",TELH="tel:+33320315954";
var MAIL="finorpa@finorpa.fr";
var MAP="https://www.google.com/maps/search/?api=1&query=4+square+Dutilleul+59800+Lille";
/* the three métiers, from the firm's Capital risque / développement / transmission pages and Crescendo PME page */
var CRIT=[["Capital risque","Jeunes entreprises à potentiel, en création ou en phase de démarrage. Tickets de 150 k€ à 500 k€, avec possibilité de réintervention."],
 ["Capital développement","Entreprises qui ont déjà une histoire et veulent accélérer\u00a0: croissance organique et/ou croissance externe. Tickets de 300 k€ à 1 M€."],
 ["Capital transmission","Reprise d’une PME ou transmission de votre entreprise\u00a0: plus de 50 opérations réalisées ces dernières années."],
 ["Instruments","Apports en fonds propres et en quasi-fonds propres. Crescendo PME\u00a0: obligations simples de 150 k€ à 400 k€, sans dilution du capital."],
 ["Territoire","Les entreprises et les entrepreneurs des Hauts-de-France, depuis Lille, Saint-Omer et Amiens."],
 ["Dominantes","Fonds généraliste, avec trois dominantes\u00a0: industrie et fabrication, services à l’industrie, numérique."]];
/* recent investments, described as in the firm's own press releases */
var PF=[
 ["Resilians (BDM Associés)","Reprise de DSC SOFRA Boutiques et SOFRATEL DSC à Cambrai\u00a0: 65 cafétérias «\u00a0Le Kiosque\u00a0» dans 80 établissements hospitaliers, 178 collaborateurs.","Transmission · 2026","https://www.finorpa.fr/deux-entreprises-cambraisiennes-gerant-65-kiosques-en-hopitaux-reprises-par-un-trio-de-repreneurs/"],
 ["Naturel Kid","Groupe de micro-crèches écoresponsables, engagé dans l’économie sociale et solidaire\u00a0; lève 400 k€ auprès de Finorpa SCR et Sopromec Participations.","Capital risque · 2026","https://www.finorpa.fr/naturel-kid-renforce-son-developpement-en-hauts-de-france-et-normandie-avec-finorpa-et-sopromec-participations/"],
 ["Réempro","Réemploi des matériaux et du mobilier issus de la rénovation et de la déconstruction sélective, basé à Sequedin\u00a0; levée de 1,6 M€.","Développement · 2026","https://www.finorpa.fr/reempro-structure-un-modele-industriel-du-reemploi/"],
 ["France Cake Tradition","Cakes, mini-cakes et pains d’épices à Tourcoing\u00a0; près de 50 % de la production en bio. Finorpa investit 350 k€.","Développement · 2026","https://www.finorpa.fr/france-cake-tradition-mise-sur-le-snacking-pour-accelerer/"],
 ["NOKO Kombucha","La marque de kombucha de la Brasserie du Pays Flamand\u00a0; près de 4 M€ mobilisés, dont 400 k€ de Finorpa.","Développement · 2026","https://www.finorpa.fr/noko-kombucha-se-structureet-accelere-sa-croissance/"],
 ["Donuts & Donuts","Enseigne lilloise de snacking sucré, 25 magasins dont 15 en franchise\u00a0; première augmentation de capital avec Finorpa SCR.","Développement · 2026","https://www.finorpa.fr/nouvelle-enseigne-star-du-snacking-sucree-lenseigne-donuts-donuts-fait-appel-a-finorpa-scr-pour-accelerer-son-developpement-national/"],
 ["Decade","Conditionnement de parfums à Annezin, export vers plus de 80 pays\u00a0; reprise par Vincent Dufaux avec Finorpa SCR et IRD Invest.","Transmission · 2026","https://www.finorpa.fr/vincent-dufaux-reprend-decade-avec-le-soutien-dird-invest-et-de-finorpa/"],
 ["Delecroix Harvesting","Matériels agricoles sur mesure conçus et fabriqués à Bailleul\u00a0; Finorpa SCR et Hauts-de-France Avenir entrent au capital.","Développement · 2026","https://www.finorpa.fr/delecroix-harvesting-renforce-son-ambition-industrielle/"],
 ["Fizzy Distribution","PME familiale de confiserie ludique fondée en 1978 à Sars-et-Rosières, reprise par Christian Autié avec Finorpa SCR et Bpifrance.","Transmission · 2025","https://www.finorpa.fr/fizzy-distribution-une-transmission-qui-ouvre-une-nouvelle-ere-gourmande/"],
 ["Mariloo","Éditeur lillois d’une plateforme SaaS de planification pour les collectivités\u00a0; lève 500 k€ via Finorpa SCR et Finovam 2.","Capital risque · 2025","https://www.finorpa.fr/mariloo-leve-500-ke-pour-devenir-le-reflexe-planning-des-collectivites/"]];
/* earlier interventions, as listed on the firm's pages */
var PRIOR=["Groupe Audice","Emballages SFE","Focus Industrie · LBCC-Fermaut","Maison Serge Lesage","Imagreen","Femia Industrie","JC David","Cartonnages du Nord","Leroy TP","Sophie Lebreuilly","Debevre","Alkior Groupe","Maxxing","Lait Prairies du Boulonnais","Brasserie du Pays Flamand","Horse Pilot","Le Relais","Hiolle Industries","Extensee","Beyond Green","Niryo","Genfit","Mama Shelter","Kinomap"];
var TEAM=[
 {g:"Direction",name:"Jean-Louis Guérin",title:"Président",sum:""},
 {g:"Direction",name:"Françoise Depoorter",title:"Directrice Générale Adjointe",sum:""},
 {g:"Investisseurs Finorpa SCR",name:"Elodie Jollois",title:"Investisseuse",sum:""},
 {g:"Investisseurs Finorpa SCR",name:"Isabelle Spender",title:"Investisseuse",sum:""},
 {g:"Investisseurs Finorpa SCR",name:"Jean-Yves Bacon",title:"Investisseur",sum:"Référent Valenciennois"},
 {g:"Investisseurs Finorpa SCR",name:"Noémie Tramon",title:"Investisseuse",sum:"Correspondante ESG"},
 {g:"Investisseurs Finorpa SCR",name:"Olivier Nuns",title:"Investisseur",sum:"Référent Littoral"},
 {g:"Investisseurs Finorpa SCR",name:"Vincent Delefosse",title:"Investisseur",sum:"Référent Artois\u00a0; également investisseur Hauts-de-France Avenir TPE PME"},
 {g:"Captech Santé",name:"Eric Bernos",title:"Directeur de participations",sum:""},
 {g:"Captech Santé",name:"Alexandre Demailly",title:"Investisseur",sum:""},
 {g:"Hauts-de-France Avenir TPE PME",name:"Jean-Michel De Groote",title:"Investisseur",sum:""},
 {g:"Hauts-de-France Avenir TPE PME",name:"Florian Hass",title:"Investisseur",sum:""},
 {g:"Équipe support",name:"Olivier Sallez",title:"Directeur administratif et financier, RCCI",sum:""},
 {g:"Équipe support",name:"Séverine Joseph",title:"Assistante de Direction",sum:""},
 {g:"Équipe support",name:"Delphine Caron",title:"Chargée de communication",sum:""},
 {g:"Équipe support",name:"Stéphanie Dumont",title:"Assistante",sum:""},
 {g:"Équipe support",name:"Céline Frutier",title:"Comptable",sum:""}];
var NEWS=[
 ["22 juillet 2026","Deux entreprises cambraisiennes, gérant 65 kiosques en hôpitaux, reprises par un trio de repreneurs","Finorpa","https://www.finorpa.fr/deux-entreprises-cambraisiennes-gerant-65-kiosques-en-hopitaux-reprises-par-un-trio-de-repreneurs/"],
 ["3 juin 2026","Naturel Kid renforce son développement en Hauts-de-France et Normandie avec Finorpa et Sopromec Participations","Finorpa","https://www.finorpa.fr/naturel-kid-renforce-son-developpement-en-hauts-de-france-et-normandie-avec-finorpa-et-sopromec-participations/"],
 ["3 juin 2026","Réempro structure un modèle industriel du réemploi","Finorpa","https://www.finorpa.fr/reempro-structure-un-modele-industriel-du-reemploi/"],
 ["1er juin 2026","France Cake Tradition mise sur le snacking pour accélérer","Finorpa","https://www.finorpa.fr/france-cake-tradition-mise-sur-le-snacking-pour-accelerer/"],
 ["10 mars 2026","Captech Santé accompagne la Série A de 38 M€ de Verley","Finorpa","https://www.finorpa.fr/captech-sante-accompagne-la-serie-a-de-38-me-de-verley-aux-cotes-dalven-lead-blast-club-bpifrance-et-des-investisseurs-historiques-sofinnova-partners-sparkfood-et-founders-future/"],
 ["20 janvier 2026","Vincent Dufaux reprend Decade avec le soutien de Finorpa SCR et d’IRD Invest","Finorpa","https://www.finorpa.fr/vincent-dufaux-reprend-decade-avec-le-soutien-dird-invest-et-de-finorpa/"]];
var SHEETS=[];
