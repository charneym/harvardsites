var FONTS=['300 1em "Archivo"','400 1em "Archivo"','italic 300 1em "Newsreader"','italic 400 1em "Newsreader"','400 1em "IBM Plex Sans"','500 1em "IBM Plex Sans"','600 1em "IBM Plex Sans"'];
var WEB="https://mabswitch.com/";
var MAIL="info@mabswitch.com";
var LI="https://ie.linkedin.com/company/mabswitch-inc";
var N_PCCAR="https://mabswitch.com/mabswitch-receives-second-nci-sbir-phase-i-award-to-advance-programmable-therapeutics/";
var N_ADC="https://mabswitch.com/mabswitch-receives-nci-sbir-award-to-advance-next-generation-smart-adc-platform/";
var N_SAEF="https://mabswitch.com/mabswitch-receives-prestigious-sbir-phase-1-award-from-national-cancer-institute-for-innovative-saefcar-immunotherapy-project/";
var N_LENTI="https://mabswitch.com/mabswitch-receives-prestigious-sbir-award-from-national-institute-of-health-for-lentisafe-affinity-purification-ligands/";
var N_AMGEN="https://mabswitch.com/mabswitch-wins-golden-ticket-supported-by-amgen/";
var N_BIOEU="https://mabswitch.com/mabswitch-wins-bio-europe-startup-spotlight-2024/";
var N_BEST="https://mabswitch.com/mabswitch-wins-best-breakthrough-award/";
var R_PCCAR="https://reporter.nih.gov/project-details/11313251";
var R_ADC="https://reporter.nih.gov/project-details/11405623";
var TECH="https://mabswitch.com/technology-2/";
/* programmes: mabswitch.com (Pipeline, News) and NIH RePORTER (1R43CA310118-01, 1R43CA314526-01, 1R43CA281387-01A1, 1R43TR004551-01A1).
   [programme, indication / use, stage label, detail, link, link label] */
var PROG=[
 ["Remote-controlled PC-CAR","Hard-to-treat solid tumors","NCI SBIR Phase I · 2026","Peptide-Centric CARs recognise peptide-HLA complexes derived from intracellular proteins, opening a far wider set of targets. Mabswitch adds a pharmacologic control layer to regulate the cells once they are in the patient. With Dr. Mark Yarmarkovich and his group at New York University.",N_PCCAR,"Read the release"],
 ["SMART-ADC™","High-grade serous ovarian cancer","NCI SBIR Phase I · 2026","Selective Modulation of ADC Tumor Targeting: the conjugate starts in a lower-affinity OFF state intended to favor distribution, then a ligand trigger moves it to a higher-avidity ON state for engagement, internalization and payload delivery.",N_ADC,"Read the release"],
 ["SaefCAR™","A clinically validated cancer target","NCI SBIR Phase I · 2023","A switchable-affinity antibody formatted as a chimeric antigen receptor, to test whether CAR T-cell activity can be regulated in the body and matched to the tumor.",N_SAEF,"Read the release"],
 ["LentiSAFE™","Lentiviral vector purification","NCATS SBIR Phase I · 2024","Switchable Affinity Mild-Elution ligands that release fragile lentiviral vectors from an immunoaffinity matrix under mild, physiological conditions, instead of the harsh elution that degrades them.",N_LENTI,"Read the release"]];
var PARTNERS=["National Cancer Institute · SBIR","NCATS · SBIR","BioLabs LA at The Lundquist Institute","BioLabs@NYU Langone","MBC BioLabs"];
/* people: mabswitch.com/company (About Us) and the Amgen Golden Ticket release */
var TEAM=[
 ["Dr. Yemi Onakunle","Founding Director and CEO","More than 25 years in the biopharmaceutical industry, in research and executive business development roles at Lonza, Diosynth Biotechnologies and Merck. Most recently Chief Business Officer at Selexis SA in Geneva, where he orchestrated over 70 partnership and licensing deals and was instrumental to the company’s acquisition in 2017. Ph.D. in microbiology, University of Kent at Canterbury; MBA, Imperial College Management School."],
 ["Prof. Dr. Stefan Dübel","Chief Technology Officer","One of the inventors of antibody phage display, a pioneer of antibody engineering and the inventor of the antibody switch. Professor of Biotechnology at Braunschweig University and editor of the Handbook of Therapeutic Antibodies. Co-founder of five biotech companies, including the human antibody provider Yumab. Ph.D. in molecular biology, University of Heidelberg."]];
var ADVISORS=["Kai-Thomas Schneider, Head of Protein Engineering"];
var AWARDS=[["Golden Ticket, supported by Amgen","2024",N_AMGEN],["BIO-Europe Spring StartUp Spotlight winner","2024",N_BIOEU],["Best Breakthrough Award, GeneOnline US and TiBIA","2024",N_BEST]];
/* news: only items with a working link. [date, headline, source, url] */
var NEWS=[
 ["September 22, 2026","Mabswitch receives a second NCI SBIR award to advance programmable therapeutics","Mabswitch",N_PCCAR],
 ["September 10, 2026","Mabswitch receives an NCI SBIR award to advance the next-generation SMART-ADC™ platform","Mabswitch",N_ADC],
 ["April 30, 2024","Mabswitch wins the Golden Ticket supported by Amgen: a year of lab space at BioLabs LA","Mabswitch",N_AMGEN],
 ["March 20, 2024","Mabswitch wins the StartUp Spotlight at BIO-Europe Spring in Barcelona","Mabswitch",N_BIOEU]];
var SHEETS=[];
