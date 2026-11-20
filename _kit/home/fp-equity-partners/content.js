/* criteri: dalle pagine "Le attività" e "Modello Club Deal" del sito della società */
var CRIT=[["Dimensione","Aziende industriali e di servizi con un fatturato fino a 100 milioni di euro."],
 ["Partecipazioni","Quote di maggioranza e di minoranza nel capitale di rischio di imprese non quotate."],
 ["Tipologie di intervento","Expansion capital (crescita), replacement capital (riassetto societario) e buy out (cessione)."],
 ["Strategia","Sottoscrizione di aumenti di capitale e acquisto diretto di quote e/o di azioni, anche in coinvestimento con primari fondi di private equity."],
 ["Selezione","Potenzialità di crescita, sia organica che per acquisizioni, qualità del capitale umano e prospettive di valorizzazione."]];
/* portafoglio: come descritto nella pagina "Portafoglio Investimenti" e nei comunicati stampa */
var PF=[
 ["Nachmann","Gruppo internazionale con sede a Milano e stabilimenti nel Lodigiano e in Tailandia, specializzato in prodotti chimici speciali per plastica, automotive, eolico, compositi, lubrificanti e batterie. Fatturato consolidato 2024 di oltre 40 milioni di euro.","Specialità chimiche · 2025","https://www.fp-equity-partners.com/wp-content/uploads/2025/11/fp-nachmann-121125i.pdf","Comunicato stampa"],
 ["Righi Elettroservizi","Leader nell’automazione industriale e nelle energie rinnovabili, con sede a Cesena. Nel 2024 ha acquisito Viganelli e SEI Sistemi.","Automazione ed energia · 2023","https://www.righisolutions.com/","righisolutions.com"],
 ["Panzeri","Fondata nel 1947 a Biassono, progetta e produce illuminazione di alta gamma ed esporta in oltre 60 paesi. Nel 2024 ha acquisito negli Stati Uniti Luxxbox.","Illuminazione · 2023","https://panzeri.it","panzeri.it"],
 ["Test Industry","Banchi prova per il testing di produzione e di laboratorio, dai cerchi e pneumatici all’aerospaziale, nata dall’integrazione di Bimal e Leonardo.","Testing industriale · 2019, F&P4BIZ","https://www.test-industry.com/","test-industry.com"]];
/* operazioni realizzate */
var PRIOR=[["BluVet","Cliniche veterinarie · ceduta a CaZampa, 2025"],["FARMA","Sistemi di rifornimento per veicoli industriali · ceduta a Interpump Group, 2025"]];
var TEAM=[
 {g:"Managing Partner",name:"Guglielmo Fiocchi",title:"Fondatore e Managing Partner",sum:"Ingegnere aerospaziale (Politecnico di Milano), per oltre vent’anni CEO e DG in grandi gruppi industriali internazionali: BTR, Pirelli, Sogefi, Sinterama."},
 {g:"Managing Partner",name:"Maurizio Perroni",title:"Fondatore e Managing Partner",sum:"Oltre 25 anni nel private equity con Chase Gemina Italia, CVC Capital Partners, Quadrivio, Siparex e Cape; membro della Commissione M&A di AIFI."},
 {g:"Managing Partner",name:"Andrea Lovato",title:"Fondatore e Managing Partner",sum:"Ingegnere (Politecnico di Milano); tra i fondatori di Jakala, poi CEO di Tenova e di Takraf GmbH nel Gruppo Techint."},
 {g:"Team",name:"Gino Amadi",title:"Operating Partner",sum:"Per oltre 30 anni azionista di riferimento e CEO di ISA; ha creato il Gruppo Altanova, ceduto nel 2021 a ESCO Technologies."},
 {g:"Team",name:"Eugenio Rocco",title:"Investment Manager",sum:"Ingegnere gestionale (Politecnico di Milano), già in PwC ed EY; in F&P dal settembre 2022."},
 {g:"Board",name:"Lorenzo Rutigliano",title:"Board Member",sum:"Socio fondatore di RTZ, dottore commercialista e revisore legale; da oltre vent’anni in operazioni di M&A e private equity."}];
/* notizie: solo comunicati con link funzionante */
var U="https://www.fp-equity-partners.com/wp-content/uploads/";
var NEWS=[
 ["1 gennaio 2026","F&P4BIZ cede F.A.R.M.A. a Interpump Group","Comunicato stampa",U+"2026/01/cs-fp-exit-farma-.pdf"],
 ["13 novembre 2025","F&P Equity Partners investe in Nachmann, azienda leader nelle specialty chemicals","Comunicato stampa",U+"2025/11/fp-nachmann-121125i.pdf"],
 ["26 febbraio 2025","Ceduta la partecipazione in BluVet: la prima exit","Comunicato stampa",U+"2025/02/250224-nb-aurora-closing-bluvet-ita.pdf"],
 ["27 giugno 2024","Righi acquisisce il 100% di SEI Sistemi","Comunicato stampa",U+"2024/06/cs-fp-equity-partners-righi-sei-27-06-24.pdf"],
 ["19 giugno 2024","Primo add-on internazionale per Panzeri: Luxxbox","Comunicato stampa",U+"2024/06/cs-fp-equity-partners-luxxbox-panzeri-19-1.pdf"]];
var SHEETS=[];
