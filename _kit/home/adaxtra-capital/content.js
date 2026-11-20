var FONTS=['300 1em "Cormorant Garamond"','400 1em "Cormorant Garamond"','italic 400 1em "Cormorant Garamond"','500 1em "Cormorant Garamond"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
var WEB="https://adaxtra.com/";
var MAIL="presse@adaxtra.com";
var MAP="https://www.google.com/maps/search/?api=1&query=18+quai+de+la+Rap%C3%A9e+75012+Paris";
/* two strategies, from the firm's 2025 Adaxtra Sélection V presentation and its Article 29 LEC report (June 2026) */
var CRIT=[["Cible","PME françaises non cotées, réalisant de 5 à 80 M€ de chiffre d’affaires (Adaxtra France PME 2)."],
 ["Ticket","De 2 à 8 M€ par opération, avec l’objectif d’accompagner 12 à 15 PME par fonds."],
 ["Accompagnement","Dialogue régulier avec les dirigeants et, lorsque Adaxtra siège au comité stratégique, un suivi au plus près des décisions."],
 ["Fonds de fonds","La gamme Adaxtra Sélection : fonds primaires, transactions secondaires et co-investissements aux côtés de gérants européens de premier plan."],
 ["Exclusions","Armement controversé, pornographie, énergies fossiles, alcool et tabac."]];
/* direct holdings, each described from the press release that named Adaxtra */
var PF=[
 ["Groupe Virgo · Microsteel","Fonderie à cire perdue et par centrifugation pour l’aéronautique, la défense et le médical. En mai 2026, cession de Besnard et recentrage du groupe sur Microsteel.","Industrie","https://newsroom.bred.fr/assets/communique-de-presse-adaxtra-capital-bpifrance-et-ouest-croissance-annoncent-la-cession-de-la-societe-besnard-et-le-recentrage-strategique-du-groupe-virgo-sur-l-aeronautique-pdf-0a1d6-9c1c2.html?dl=1"],
 ["Groupe ELBA ORA","Aménagement de points de vente pour les grandes Maisons du luxe, près de 300 collaborateurs. Adaxtra, partenaire historique, est resté au capital lors de la réorganisation de 2024.","Agencement","https://www.siparex.com/wp-content/uploads/2024/10/CP-Siparex-Elba-vf-24.10.24.pdf"],
 ["Le Berceau des Rois","Réseau de micro-crèches qui, avec l’acquisition des P’tits Babadins, forme un groupe de plus de 180 établissements. 5e investissement d’Adaxtra France PME 2.","Petite enfance","https://newsroom.bred.fr/download-pdf/65ae97a2933de634700ff9f4"],
 ["Teolia","Conseil en transformation digitale et Product Management, à Lille, Lyon et Paris. Participation minoritaire d’Adaxtra France PME 2 depuis 2023.","Conseil","https://newsroom.bred.fr/actualites/teolia-specialiste-de-la-transformation-digitale-et-expert-de-la-methode-agile-diversifie-son-actionnariat-et-accueille-adaxtra-capital-pour-laccompagner-dans-son-fort-developpement-64ad-9c1c2.html"]];
/* team, as presented in the firm's 2025 fund presentation */
var TEAM=[
 {g:"Équipe d’investissement",name:"François Parmentier",title:"Directeur Général",sum:"Auparavant chez Amundi Private Equity Funds, Aviva France et huit ans chez Ardian ; diplômé d’Aix-Marseille III et de Paris-Dauphine."},
 {g:"Équipe d’investissement",name:"Xavier Goblot",title:"Directeur d’Investissement",sum:"Ancien Directeur des Investissements Stratégiques du groupe BRED ; six années chez Mazars ; ESC Toulouse."},
 {g:"Équipe d’investissement",name:"Thibaut Penhoat",title:"Directeur d’Investissement",sum:"Sept ans chez Bee UP Capital, plusieurs LBO de PME françaises ; Montpellier Business School."},
 {g:"Équipe d’investissement",name:"Grégory Lecomte",title:"Directeur d’Investissement",sum:"Quatre ans chez Bpifrance (LBO Mid & Large Cap), puis fusions-acquisitions à la Société Générale et chez Lazard Frères ; ESSEC."},
 {g:"Équipe d’investissement",name:"Matthieu Reggio-Paquet",title:"Analyste",sum:""},
 {g:"Équipe d’investissement",name:"Nans Bourgeois",title:"Analyste",sum:""},
 {g:"Équipe d’investissement",name:"Enola Polo",title:"Analyste",sum:""},
 {g:"Relations investisseurs",name:"Pierre-Marie Le Bihan",title:"Directeur Relations Investisseurs",sum:""},
 {g:"Relations investisseurs",name:"Athénaïs Baiguini",title:"Relations Investisseurs",sum:""},
 {g:"Finance et conformité",name:"Nianja Rahanitrafeno",title:"Directrice Administrative et Financière",sum:""},
 {g:"Finance et conformité",name:"Benoit Leclerc",title:"Responsable Conformité et Contrôle Interne",sum:""},
 {g:"Finance et conformité",name:"Margaux Germanese",title:"Analyste Middle Office",sum:""}];
/* news: only items with a working link */
var NEWS=[
 ["18 mai 2026","Adaxtra Capital, Bpifrance et Ouest Croissance annoncent la cession de Besnard et le recentrage du groupe Virgo sur l’aéronautique","BRED Newsroom","https://newsroom.bred.fr/assets/communique-de-presse-adaxtra-capital-bpifrance-et-ouest-croissance-annoncent-la-cession-de-la-societe-besnard-et-le-recentrage-strategique-du-groupe-virgo-sur-l-aeronautique-pdf-0a1d6-9c1c2.html?dl=1"],
 ["24 octobre 2024","Le Groupe ELBA ORA réorganise son capital avec Siparex ; Adaxtra Capital et Bpifrance restent actionnaires","Siparex","https://www.siparex.com/wp-content/uploads/2024/10/CP-Siparex-Elba-vf-24.10.24.pdf"],
 ["23 janvier 2024","Avec le soutien d’Adaxtra Capital, Berceau des Rois acquiert Les P’tits Babadins","BRED Newsroom","https://newsroom.bred.fr/download-pdf/65ae97a2933de634700ff9f4"],
 ["5 juin 2023","Adaxtra Capital lève 128 millions d’euros pour son fonds Adaxtra Sélection III","BRED Newsroom","https://newsroom.bred.fr/download-pdf/6479f687fa37accad4011f7e"],
 ["20 janvier 2023","Teolia accueille Adaxtra Capital pour accompagner son développement","BRED Newsroom","https://newsroom.bred.fr/actualites/teolia-specialiste-de-la-transformation-digitale-et-expert-de-la-methode-agile-diversifie-son-actionnariat-et-accueille-adaxtra-capital-pour-laccompagner-dans-son-fort-developpement-64ad-9c1c2.html"]];
var SHEETS=[];
