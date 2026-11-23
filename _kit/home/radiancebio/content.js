var FONTS=['300 1em "Spectral"','italic 300 1em "Spectral"','400 1em "Spectral"','italic 400 1em "Spectral"','300 1em "Montserrat"','400 1em "Montserrat"','500 1em "Montserrat"','600 1em "Montserrat"','700 1em "Montserrat"'];
var WEB="https://radiancebio.com/";
var MAIL="info@radiancebiopharma.com";
var IRMAIL="Investorrelations@radiancebiopharma.com";
var TEL="(617) 621-7143";
var ADDR="One Boston Place, Suite 2600, Boston, MA 02108";
var MAP="https://www.google.com/maps/search/?api=1&query=One+Boston+Place+Boston+MA+02108";
var PR_164="https://natlawreview.com/press-releases/radiance-announces-first-patient-dosing-phase-1-clinical-trial-its-next";
var PR_601="https://natlawreview.com/press-releases/radiance-biopharma-signs-exclusive-license-first-class-c-metegfr-targeted";
var PR_BIO="https://www.einpresswire.com/article/784090661/radiance-biopharma-to-participate-in-2025-bio-ceo-investor-conference";
var PR_MIA="https://www.einpresswire.com/article/901465113/radiance-biopharma-speaking-at-miami-global-family-office-investment-summit";
var PR_GFO="https://ushealthcarejournal.com/article/889279583-radiance-biopharma-invited-speaker-at-global-family-office-investment-summit";
var RB203="https://radiancebio.com/rb203-membrane-hsp70-monoclonal-antibody/";
/* pipeline: radiancebio.com (RB-203 page) and the company's press releases of 2025-02-10 (RB-164, RB-201), 2025-04-15 (RB-164 Phase 1)
   and 2025-09-03 (RB-601 licence). [programme, modality / target, stage label, detail, link, link label] */
var PROG=[
 ["RB-164","Anti-ROR-1 antibody-drug conjugate · lymphoma and advanced solid tumors","Phase 1","First patient dosed in April 2025 in a Phase 1 open-label study run in China by development partner CSPC Pharmaceutical Group. The IND is cleared by China’s NMPA and the U.S. FDA; Radiance will run the study in the U.S., Australia and Europe.",PR_164,"Phase 1 release"],
 ["RB-601","c-MET / EGFR bispecific nanobody ADC · advanced solid tumors","Phase 1 (licensor)","Licensed exclusively from Novatim Immune Therapeutics in September 2025 for the world outside Greater China. Novatim is running a Phase 1 trial in China; the FDA has also cleared an IND.",PR_601,"Licence release"],
 ["RB-201","Anti-HER2 / TROP2 bispecific ADC · solid tumors","In development","A bispecific antibody-drug conjugate built on next-generation tandem linker-payload technology.",PR_BIO,"Company release"],
 ["RB-203","Membrane Hsp70 monoclonal antibody · liquid and solid tumors","Antibody + diagnostic","A proprietary antibody that recognizes membrane Hsp70 and selectively accumulates in tumors that express it, but not in healthy cells. Paired with a patented blood test as its companion diagnostic.",RB203,"RB-203 page"]];
/* people, as listed on radiancebio.com (Management, Board of Directors, Advisors). Published portraits are inconsistent snapshots; text-only rows. */
var TEAM=[
 ["Robert K. Brooks, JD","Chief Executive Officer","Over 30 years in biotechnology, finance and law. Founded Aurora Biopharma and Medvax Technologies, and leads Alphageneron Pharmaceuticals."],
 ["A. Graham Pockley, PhD","Chief Scientific Officer","CEO of multimmune GmbH in Munich, Emeritus Professor of Immunobiology, and former Director of the John van Geest Cancer Research Centre."],
 ["Ola Soderquist, CPA","Chief Financial Officer","More than 30 years as CFO and finance lead at companies including Electrolux, Ericsson, SKF and Belden."]];
var BOARD=["Marc E. Lippman, MD, Chairman","Robert Clarke, PhD, Co-founder","Gabriele Multhoff, PhD, Advisor"];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["March 24, 2026","Radiance Biopharma speaking at the Miami Global Family Office Investment Summit","EIN Presswire",PR_MIA],
 ["February 4, 2026","Radiance Biopharma invited speaker at the Global Family Office Investment Summit","US Healthcare Journal",PR_GFO],
 ["September 3, 2025","Radiance signs an exclusive license for RB-601, a first-in-class c-Met/EGFR targeted nano antibody ADC","National Law Review",PR_601],
 ["April 15, 2025","First patient dosed in the Phase 1 trial of RB-164, a next-generation ROR-1 targeted ADC","National Law Review",PR_164]];
var SHEETS=[];
