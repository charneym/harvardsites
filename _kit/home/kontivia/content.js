var FONTS=['400 1em "Literata"','italic 400 1em "Literata"','500 1em "Literata"','600 1em "Literata"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var WEB="https://www.kontivia.com/";
var MAIL="info@kontivia.com";
var TEL="+41 44 215 11 90";
var TELH="tel:+41442151190";
var MAP="https://www.google.com/maps/search/?api=1&query=Uraniastrasse+40+8001+Z%C3%BCrich";
/* Suchprofil, wörtlich nach kontivia.com/suchprofil */
var CRIT=[["Beteiligungsanlässe","Nachfolgeregelungen, Auskäufe einzelner Aktionäre oder Finanzierungen des weiteren Wachstums."],
 ["Unternehmensprofil","Profitable, etablierte mittelständische Unternehmen mit bestehendem Management."],
 ["Hauptsitz","In der Schweiz."],
 ["Umsatzgrösse","Ca. CHF 5–30 Mio."],
 ["Geschäftsmodell","Solide, bewährte Geschäftsmodelle mit intaktem Wachstumspotenzial."],
 ["Branchen","Kein Branchenfokus, jedoch keine Investitionen in Biotechnologie, stark technologiegeprägte Unternehmen und Immobilienfirmen. Keine Turnarounds oder Frühfinanzierungen."]];
/* Lösungen, nach kontivia.com/loesungen */
var SOL=[["Individuelle Lösungen","Beteiligungslösungen für die Unternehmensnachfolge, die Neuordnung der Aktionärsstruktur oder die Bereitstellung von Wachstumskapital."],
 ["Familienkapital mit Werten","Bodenhaftung, Verlässlichkeit, Fairness, Respekt und Anstand."],
 ["Direkte Verantwortung","Kein externer Verwalter, sondern Familieninvestoren als Ansprechpartner und Entscheidungsträger."],
 ["Langfristiger Horizont","Konservativer Einsatz von Fremdkapital, langfristiger Investitionshorizont, keine Exitorientierung."],
 ["Strukturelle Flexibilität","Mehrheits- oder Minderheitsbeteiligungen, Management-Beteiligungen sowie Rückbeteiligungen des bisherigen Unternehmers."],
 ["Aktive Unterstützung","Begleitung des Managements bei der Weiterentwicklung des Unternehmens und der Steigerung seiner Leistungsfähigkeit."]];
/* Bisherige Kontivia-Beteiligungen (kontivia.com/beteiligungen), Beschreibungen aus Presse und Firmenangaben */
var PF=[
 ["Hipp Technology Group","Auftragsfertiger und Entwicklungspartner mit Fokus Medizintechnik: Implantate, chirurgische Instrumente und robotergestützte Systeme. 2026 Mehrheit an die DBAG übertragen.","Plattform"],
 ["Hipp Medical","Medizintechnik-Fertigung innerhalb der Hipp Technology Group.","Hipp Technology Group"],
 ["mk medical","Orthopädische Implantate, darunter Kirschnerdrähte und Steinmann-Pins; 2024 zur Gruppe gekommen.","Hipp Technology Group"],
 ["Wymed","Präzisionsmechanik.","Hipp Technology Group"],
 ["Inovu","Schweizer Industriegruppe mit Fokus Medizintechnik, mehrheitlich im Besitz von Schweizer Unternehmerfamilien unter der Führung von Kontivia.","Plattform"],
 ["Brütsch Technology","Uhwiesen ZH: Software, Elektronik und Mechatronik für Medizintechnik und industrielle Automation.","Inovu"],
 ["Jossi Systembau","Islikon TG: Mechanik, Antriebs- und Kühltechnik; als Nachfolgelösung der Familie Jossi zu Inovu.","Inovu"],
 ["Katadyn Group","Schweizer Gruppe für Wasseraufbereitung und Outdoor-Ausrüstung.","Plattform"]];
/* Beteiligungen aus früherer Tätigkeit (kontivia.com/beteiligungen) */
var PAST=["Komax","Kiener + Wittlin","Tobler","ACP","Lista","Polytec Group","Sia Abrasives","Dovida / Home Instead","Swiss Smile","Stadler","Phonak / Sonova","SFC Koenig","Ticketcorner","Saia-Burgess","SF Chem","Soudronic"];
var TEAM=[
 {name:"Alexander Krebs",title:"Gründer und Präsident des Verwaltungsrats",mail:"alexander.krebs@kontivia.com",
  bio:["Betriebswirtschaftsstudium Universität St. Gallen; Dissertation «Management Buyout in der Schweiz» (Universität Basel).","1999–2010 Gründungspartner und langjähriger VR-Präsident der Beteiligungsgesellschaft Capvis; zuvor Partner SBC Equity Partners.","Seit 2010 Gründer der Valincor Management; seit 2016 Gründer und VR-Präsident der Kontivia.","VR-Mandate u. a. bei Phonak/Sonova, Komax, Stadler, Gebr. Tobler, Soudronic, Lista, Inovu Group und Hipp Technology Group."]},
 {name:"Esther Tschumi",title:"Office Management",mail:"esther.tschumi@kontivia.com",
  bio:["Langjährige Berufserfahrung als CEO-Assistentin in verschiedensten Dienstleistungsunternehmen.","Betriebsökonomin MBSZ; kaufmännische Grundausbildung in einer Bank."]}];
var NEWS=[
 ["24. März 2026","Kellerhals Carrard","Verkauf einer Mehrheitsbeteiligung an der Hipp Technology Group an die DBAG","https://kellerhals-carrard.ch/de/deals/kellerhals-carrard-hipp-technology-group"],
 ["17. März 2026","NKP M&A Insights","DBAG übernimmt die Hipp Technology Group von Schweizer Investoren, darunter Kontivia","https://www.mainsights.io/ma-news/dbag-acquires-german-swiss-medtech-group-hipp-technology-reportedly-valued-between-eur-200-300m"],
 ["Profil","DBAG","Hipp Technology Group, Kolbingen: Portfolioprofil der Deutschen Beteiligungs AG","https://www.dbag.com/portfolio/current-portfolio-companies/hipp-technology-group/"]];
var SHEETS=[];
