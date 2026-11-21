var FONTS=['300 1em "Newsreader"','italic 300 1em "Newsreader"','400 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "Instrument Sans"','500 1em "Instrument Sans"','600 1em "Instrument Sans"','italic 500 1em "Instrument Sans"'];
var WEB="https://cytocybernetics.com/";
var MAIL="web25@cytocybernetics.com";
var TEL="1-855-351-6285",TEL2="716-322-4222";
var MAP="https://www.google.com/maps/search/?api=1&query=North+Tonawanda+NY+14120";
var YT="https://www.youtube.com/@cytocybernetics";
var RP26="https://reporter.nih.gov/project-details/11404831";
var RP25="https://reporter.nih.gov/project-details/11184896";
var PM_CH="https://pubmed.ncbi.nlm.nih.gov/42248312/";
var PM_WX="https://pubmed.ncbi.nlm.nih.gov/42961300/";
var UB18="https://www.buffalo.edu/news/releases/2018/10/040.html";
/* products: from cytocybernetics.com (cybercyte.html, dynamicclamp.html, voltage-sensitive-dyes.html, cybersolver.html, fda-qnet.html, custom-services.html).
   [tag, name, kind, detail, link, link label] */
var PROD=[
 ["Hardware + software","The Cybercyte System","Plug and play dynamic clamp","Connects up to eight patch-clamped cells with in silico channels, synapses and cells, with over 100 validated ion channel models pre-installed. Icon driven, with no programming, and compatible with all major amplifiers.",WEB+"cybercyte.html","Cybercyte System"],
 ["Reagents + kit","Cytovolt1 and Cytovolt2","Far-red voltage-sensitive dyes","Cytovolt1 (Di-4-ANBDQBS) lasts up to four hours without damaging the cell. A matched single-cell kit adds the Cytovolt Excite source, Cube filter set and Detector.",WEB+"voltage-sensitive-dyes.html","Voltage-sensitive dyes"],
 ["Software","CyberSolver","Markov and Hodgkin-Huxley model builder","A drag-and-drop package for building stochastic Markov models of ion channel kinetics. Import voltage clamp data to compare, then export Channel Definition Files straight to the Cybercyte.",WEB+"cybersolver.html","CyberSolver"],
 ["Software","CyberQ","qNet analysis for drug safety","Computes the qNet metric and Torsade Metric Score from an in silico reconstruction of cardiac electrophysiology, in line with the CiPA initiative. Reads ABF and IFW files.",WEB+"fda-qnet.html","CyberQ"],
 ["Services","Custom services","Assays, analysis and models","Voltage clamp assays for drug safety screening and development, custom data analysis and quality control, and Markov and Hodgkin-Huxley models built and validated for you.",WEB+"custom-services.html","Custom services"]];
/* named on cytocybernetics.com (type only, BW/CJ) */
var PARTNERS=["HEKA","Sophion","National Institutes of Health (NIMH, NHLBI)","University at Buffalo"];
/* people: as named in University at Buffalo releases (2018); no portraits are published */
var TEAM=[
 ["Glenna C. L. Bett, Ph.D.","Co-founder and Chief Executive Officer","Faculty member at the University at Buffalo Jacobs School of Medicine and Biomedical Sciences, where she has served as vice chair for research in Obstetrics and Gynecology."],
 ["Randall L. Rasmusson, Ph.D.","Co-founder and President","Professor of Physiology and Biophysics at the University at Buffalo Jacobs School of Medicine and Biomedical Sciences."],
 ["Mark W. Nowak, Ph.D.","Lead Scientist","Joined Cytocybernetics in 2015 to lead its neuronal research, and is principal investigator on the NIMH Real Time NEURON Simulation award."]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["August 24, 2026","NIMH continues the $1.01 million SBIR Phase II award for Real Time NEURON Simulation for Experimental Applications","NIH RePORTER",RP26],
 ["January 2027 issue","Cybercyte users in the Waxman lab: combined Nav1.7–Nav1.8 abrogation suppresses excitability in a subpopulation of sensory neurons","J Gen Physiol",PM_WX],
 ["October 2026","Cybercyte users in the Chahine lab: antisense therapy targeting DMPK restores cardiac ion channel function in myotonic dystrophy type 1","Heart Rhythm",PM_CH],
 ["September 3, 2025","NIMH awards a $1.01 million SBIR Phase II grant to bring NEURON models into live dynamic clamp experiments","NIH RePORTER",RP25]];
var SHEETS=[];
