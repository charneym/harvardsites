var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Hanken Grotesk"','500 1em "Hanken Grotesk"','700 1em "Hanken Grotesk"'];
var WEB="https://www.breizh-invest-pme.bzh/";
var TEL="02 99 31 73 26",TELH="tel:+33299317326";
var FORM="https://www.breizh-invest-pme.bzh/nous-trouver/";
var MAP="https://www.google.com/maps/search/?api=1&query=3+avenue+Germaine+Tillion+35136+Saint-Jacques-de-la-Lande";
/* positionnement, from the firm's "Métiers et positionnement", "Nos actionnaires" and home pages */
var CRIT=[["Ticket","De 100 K€ à 500 K€ par opération, un montant d’investissement adapté aux PME."],
 ["Instruments","Une participation au capital (fonds propres) et la souscription d’obligations convertibles (quasi-fonds propres)."],
 ["Position","Exclusivement minoritaire et non dilutive : accompagner le projet, pas prendre le contrôle."],
 ["Transmission","Transmissions familiales, reprise par une personne physique majoritaire, recomposition du capital."],
 ["Développement","Croissance interne (BFR, nouveaux produits, nouveaux marchés) et croissance externe par acquisitions."],
 ["Co-investissement","Seul ou aux côtés de fonds d’investissement, de business angels ou de family offices."]];
/* latest participations, as described in the firm's own deal announcements */
var PF=[
 ["SMAP","Peinture, ravalement, sols souples, carrelage et résine, pour les marchés publics et les donneurs d’ordre privés. Reprise par Gautier Sinniger, aux côtés du fonds Crédit Agricole Ille-et-Vilaine Expansion.","Transmission · 2026","Cesson-Sévigné (35)","https://www.breizh-invest-pme.bzh/2026/07/01/smap/"],
 ["Scierie Marcadé","Conception, fabrication et distribution d’emballages bois : palettes, palox, caisses industrielles. Une levée de fonds pour structurer la croissance.","Développement · 2025","Evriguet (56)","https://www.breizh-invest-pme.bzh/2025/12/19/5173/"],
 ["MOG","Leader régional de la location sèche de matériel audiovisuel pour les professionnels de l’événementiel, qui développe son propre atelier de flight-cases.","Développement · 2025","Janzé (35)","https://www.breizh-invest-pme.bzh/2025/12/19/mog/"],
 ["Ma Kibell","Cosmétiques artisanaux fabriqués à la main à Trémuson, vendus dans près de 30 boutiques. Reprise de Ker Kibell par Solenne et Vincent Surget.","Transmission · 2025","Trémuson (22)","https://www.breizh-invest-pme.bzh/2025/04/14/5050/"],
 ["La Dilettante","Brasserie dont la levée de fonds augmente les capacités de production, pour la restauration, l’hôtellerie et la grande distribution.","Développement · 2024","Bretagne","https://www.breizh-invest-pme.bzh/2024/09/30/la-dilettante/"],
 ["Véloc’Ouest","Location de vélos et mobilité douce, qui se développe par l’acquisition de boutiques et de nouvelles implantations, avec le Crédit Agricole du Morbihan.","Développement · 2024","Vannes (56)","https://www.breizh-invest-pme.bzh/2024/09/26/4931/"]];
/* other companies listed on the firm's participations pages and testimonials */
var PRIOR=["727 Sailbags","Aladom","Alti-Loc Échafaudages","Atelier des Loisirs","BSM","Claripharm","Foil and Co","Groupe Glémot","Icônes","LTB","N2C","Plisson","Rozen","SBE Groupe","Sodalec"];
var TEAM=[
 {g:"L’équipe",name:"Pierre-Etienne Petoin",title:"Directeur Exécutif",sum:"Plus de 15 ans d’expertise en analyse financière et en financement de transmissions, LBO et développement. Chargé d’investissements en 2019, Directeur Exécutif depuis février 2024."},
 {g:"L’équipe",name:"Maud Beaussier",title:"Chargée d’Investissements",sum:"Près de 20 ans dans le financement et l’accompagnement des entreprises, en banque et en conseil en levée de fonds. A rejoint Breizh Invest PME en février 2024."},
 {g:"L’équipe",name:"Antoine Guillaume",title:"Chargé d’Investissements",sum:"Près de 10 ans auprès des PME et ETI régionales (services, négoce, industrie, transport), en LBO, acquisitions et développement. A rejoint l’équipe en septembre 2024."}];
/* news: only items with a working link */
var NEWS=[
 ["1 juillet 2026","SMAP : Gautier Sinniger reprend les rênes de la PME cessonnaise, avec Breizh Invest PME","Breizh Invest PME","https://www.breizh-invest-pme.bzh/2026/07/01/smap/"],
 ["19 décembre 2025","La scierie Marcadé ouvre son capital à Breizh Invest PME pour accélérer sa croissance","Breizh Invest PME","https://www.breizh-invest-pme.bzh/2025/12/19/5173/"],
 ["19 décembre 2025","MOG, leader régional de la location sèche événementielle, ouvre son capital à Breizh Invest PME","Breizh Invest PME","https://www.breizh-invest-pme.bzh/2025/12/19/mog/"],
 ["13 octobre 2025","Multiplast est engagée dans la production de flotteurs de bombardiers d’eau","Le Journal des Entreprises","https://www.lejournaldesentreprises.com/breve/multiplast-est-engagee-dans-la-production-de-flotteurs-de-bombardiers-deau-2127731"],
 ["23 juillet 2025","Rebond industriel : l’imprimerie Icônes investit pour produire et réduire son impact","Bretagne Économique","https://www.bretagne-economique.com/actualites/rebond-industriel-limprimerie-icones-investit-pour-produire-et-reduire-son-impact/"],
 ["14 avril 2025","Breizh Invest PME accompagne Solenne et Vincent Surget dans la reprise de Ker Kibell (Ma Kibell)","Breizh Invest PME","https://www.breizh-invest-pme.bzh/2025/04/14/5050/"]];
var SHEETS=[];
