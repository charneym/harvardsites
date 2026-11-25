var FONTS=['300 1em "Source Serif 4"','italic 300 1em "Source Serif 4"','400 1em "Source Serif 4"','italic 400 1em "Source Serif 4"','400 1em "Source Sans 3"','500 1em "Source Sans 3"','600 1em "Source Sans 3"','700 1em "Source Sans 3"'];
var MAIL="info@biogenera.com";
var TW="https://www.biogenera.com";
/* programmes: every line from biogenera.com/pipeline-dei-prodotti, /ricerca-e-innovazione and Biogenera's news of 2025–2026.
   [candidate, gene target, indication, stage, status, detail, link, link label] */
var PIPE=[
 ["BGA002","MYCN","Neuroblastoma ad alto rischio e altri tumori MYCN positivi","Domanda di sperimentazione clinica","Fase I prevista nel Q1 2027","Il candidato più avanzato: studi preclinici completati, lotto clinico prodotto secondo gli standard GMP, dossier sottomesso tramite CTIS a novembre 2026. Farmaco orfano EMA e FDA.",TW+"/bga002-biogenera-sottomette-il-dossier-clinico-per-lavvio-della-fase-i/","Notizia"],
 ["BGA003","MYC","Tumori MYC positivi","Ricerca","Studi preclinici","Un anti-gene contro MYC, il capostipite della famiglia di oncogeni a cui appartiene anche MYCN.",TW+"/pipeline-dei-prodotti/","Pipeline"],
 ["BGA005","Survivina","Tumori Survivina positivi","Ricerca","Studi preclinici","Oncologia: un anti-gene diretto contro il gene della survivina.",TW+"/pipeline-dei-prodotti/","Pipeline"],
 ["BGA006","ALK","Tumori ALK positivi","Ricerca","Studi preclinici","Oncologia: un anti-gene diretto contro il gene ALK.",TW+"/pipeline-dei-prodotti/","Pipeline"],
 ["BGA007","PLK4","Tumori PLK4 positivi","Ricerca","Studi preclinici","Oncologia: un anti-gene diretto contro il gene PLK4.",TW+"/pipeline-dei-prodotti/","Pipeline"],
 ["BGA008","BCL2","Tumori BCL2 positivi","Ricerca","Studi preclinici","Oncologia: un anti-gene diretto contro il gene BCL2.",TW+"/pipeline-dei-prodotti/","Pipeline"],
 ["BGA011","Confidenziale","Dermatologia","Ricerca","Studi preclinici","Oltre l’oncologia: un bersaglio terapeutico confidenziale in dermatologia.",TW+"/pipeline-dei-prodotti/","Pipeline"],
 ["BGA012","Confidenziale","Disordine metabolico","Ricerca","Studi preclinici","Oltre l’oncologia: un bersaglio terapeutico confidenziale in un disordine metabolico.",TW+"/pipeline-dei-prodotti/","Pipeline"]];
/* BGA002 milestones: every line from Biogenera's news (23/12/2025, 20/04/2026, 29/10/2026, 16/11/2026) and /ricerca-e-innovazione */
var EVID=[
 ["Farmaco orfano","Designazione EMA e FDA per il neuroblastoma e i sarcomi dei tessuti molli; FDA anche per il tumore del polmone a piccole cellule"],
 ["Produzione GMP","Nel 2025 la prima produzione industriale su larga scala al mondo, secondo gli standard GMP, di un oligonucleotide PNA anti-gene per uso umano"],
 ["Brevetti","Concesso in Cina dalla CNIPA il brevetto per BGA002 (ottobre 2026), in un portafoglio di 48 brevetti in 46 Paesi"],
 ["Clinica","Dossier sottomesso via CTIS a novembre 2026; lo studio di Fase I è atteso nel Q1 2027 all’Università di Padova, con la Prof.ssa Alessandra Biffi"]];
/* biogenera.com/chi-siamo (board, advisors) and /partnership (founder, clinical partners). Text-only masthead (CI/CL). */
var TEAM=[
 {g:"Consiglio di amministrazione",name:"Massimiliano Cesarini",title:"Chairman of the Board & CEO",sum:""},
 {g:"Consiglio di amministrazione",name:"Valentina Bertuccioli",title:"Vice-Chairman & Executive Board Member",sum:""},
 {g:"Consiglio di amministrazione",name:"Gabriele Lattanzio",title:"Board Member & Chief Financial Officer",sum:""},
 {g:"Consiglio di amministrazione",name:"Francesca Natali",title:"Board Member",sum:""},
 {g:"Consiglio di amministrazione",name:"Alberto Pullini",title:"Board Member",sum:""},
 {g:"Consiglio di amministrazione",name:"Oliver Manzi",title:"Board Member",sum:""},
 {g:"Advisor e partnership cliniche",name:"Thomas Rupp",title:"Scientific Strategy Advisor",sum:""},
 {g:"Advisor e partnership cliniche",name:"Anna Lisa Scardovi",title:"Clinical Partnerships, US Operations",sum:""},
 {g:"Fondatore e partner scientifici",name:"Prof. Roberto Tonelli",title:"Fondatore",sum:"Farmacologo, Assistant Professor all’Università di Bologna."},
 {g:"Fondatore e partner scientifici",name:"Prof.ssa Alessandra Biffi",title:"Principal Investigator di BGA002",sum:"Professoressa ordinaria di Pediatria all’Università di Padova e direttrice dell’Oncoematologia pediatrica; guida gli studi clinici pediatrici di BGA002."},
 {g:"Fondatore e partner scientifici",name:"Susan L. Cohn, MD",title:"Professor of Pediatrics",sum:"Director, Clinical Sciences, Pediatric Hematology & Oncology."},
 {g:"Fondatore e partner scientifici",name:"Ami V. Desai, MD, MSCE",title:"Associate Professor of Pediatrics",sum:"Pediatric Hematology & Oncology."}];
/* news: only items with a working link (biogenera.com/news-media). [date, headline, category, url] */
var NEWS=[
 ["16 novembre 2026","BGA002: Biogenera sottomette il dossier clinico per l’avvio della Fase I","Aggiornamento societario",TW+"/bga002-biogenera-sottomette-il-dossier-clinico-per-lavvio-della-fase-i/"],
 ["9 novembre 2026","Perché MYCN è stato finora un target così difficile: il contributo della Dott.ssa Susan Cohn","News",TW+"/perche-mycn-e-stato-finora-un-target-cosi-difficile-il-contributo-della-dott-ssa-susan-cohn/"],
 ["29 ottobre 2026","Biogenera ottiene in Cina il brevetto per BGA002","Aggiornamento societario",TW+"/biogenera-ottiene-in-cina-il-brevetto-per-bga002/"],
 ["20 aprile 2026","Pediatric Investigation Plan (PIP): un passaggio chiave nello sviluppo di BGA002","News",TW+"/pediatric-investigation-plan-pip-un-passaggio-chiave-nello-sviluppo-di-bga002/"],
 ["25 febbraio 2026","Collaborazioni scientifiche globali e sviluppo internazionale: il network che sostiene la crescita di Biogenera","News",TW+"/collaborazioni-scientifiche-globali-e-sviluppo-internazionale-il-network-che-sostiene-la-crescita-di-biogenera/"],
 ["23 dicembre 2025","Aggiornamento di fine anno e importanti traguardi 2025","Aggiornamento societario",TW+"/aggiornamento-di-fine-anno-e-importanti-traguardi-2025/"]];
var SHEETS=[];
