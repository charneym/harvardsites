/* Gelscom: facts from gelscom.com (accueil, La société, Équipe fondatrice, Recherche & développement, Partenariats,
   Dispositifs médicaux, Gamme de produits, Historique, Mentions légales), discogel.com (Produits / Soin, Hernie discale,
   L’intervention, Vos questions) and ClinicalTrials.gov NCT03415828 and NCT05969392. Real characters only, never HTML entities (DU).
   Product rows: [name, stage, title, sub, detail, dim, tag, link, linklabel] */
var PIPE=[
 ["DiscoGel®","Classe III · marquage CE 2007","Hernie discale","Rachis lombaire et sacro-lombaire","Gel radio-opaque injecté par voie percutanée dans le disque intervertébral, sous contrôle radioscopique. L’intervention dure le plus souvent une demi-journée en hôpital de jour, sans anesthésie générale. Certifié selon le règlement européen 2017/745 (MDR) depuis janvier 2023.",0,"","https://www.discogel.com","discogel.com"],
 ["ScleroGel kit®","Classe III · marquage CE 2012","Malformations vasculaires","Vaisseaux à bas débit sanguin","Le deuxième dispositif médical de classe III de Gelscom, indiqué dans des maladies génétiques rares (orphelines) qui affectent les vaisseaux à bas débit sanguin, utilisé par des spécialistes des maladies vasculaires.",0,"","https://www.sclerogel.com","sclerogel.com"],
 ["Kystogel","À l’étude","Kystes osseux","Reconstruction osseuse","Un dispositif médical en développement, destiné à résorber des kystes osseux et à faciliter la reconstruction osseuse.",1,"En développement","",""]];
/* Two post-market studies of DiscoGel®, recruiting (discogel.com; ClinicalTrials.gov) */
var EVID=[
 ["Étude lombaire","Gel d’éthanol contre corticoïde dans la douleur discogénique lombaire réfractaire",CT1,"NCT03415828"],
 ["Étude cervicale","Efficacité et sécurité du gel d’éthanol intradiscal dans la douleur discogénique cervicale réfractaire",CT2,"NCT05969392"]];
var TEAM=[
 {g:"Équipe fondatrice",name:"Michaël Le Bail",title:"Président",sum:"Près de 20 ans d’expérience dans l’industrie pharmaceutique et biotechnologique."},
 {g:"Équipe fondatrice",name:"J. David Grausz, Ph.D.",title:"Directeur du développement des affaires et de la propriété intellectuelle",sum:"Biologiste moléculaire de formation, Ph.D. de l’université de Chicago (1972)."},
 {g:"Équipe fondatrice",name:"Philippe Clousier",title:"Directeur administratif et financier",sum:"Diplômé de l’ESSEC, titulaire d’une maîtrise d’économie."}];
/* gelscom.com, Historique (timeline on the home page) */
var HIST=[
 ["31 janv. 2023","DiscoGel® certifié selon le règlement (UE) 2017/745 (MDR)"],
 ["4 janv. 2016","Gelscom certifié ISO 13485:2016"],
 ["20 nov. 2012","Gelscom ouvre son propre laboratoire de R&D"],
 ["2 janv. 2012","Marquage CE pour ScleroGel kit®"],
 ["1er sept. 2011","Gelscom s’installe à Hérouville-Saint-Clair, près de Caen"],
 ["5 oct. 2007","Marquage CE pour DiscoGel®"],
 ["Oct. 2007","Première publication sur DiscoGel®, Journal of Spinal Disorders & Techniques"],
 ["Sept. 2005","Lauréat du concours PolePharma, prix de l’innovation ProcessPharma"]];
var SHEETS=[];
