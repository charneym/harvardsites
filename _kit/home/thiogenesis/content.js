var FONTS=['500 1em "Archivo"','600 1em "Archivo"','400 1em "Lato"','400 1em "IBM Plex Mono"','500 1em "IBM Plex Mono"'];
var MAIL="mailto:info@thiogenesis.com";
var NR="https://cdn.prod.website-files.com/6324f3c1cd40a857e0ea27a4/";
/* Programmes, from thiogenesis.com (Science, Pipeline, Investors) and the company's news releases (22 Oct 2026, 13 Jul 2026,
   2 Feb 2026). Stage words only as the company states them. [indication, area, title, stage, detail, dim, tag] */
var PIPE=[
 ["Nephropathic cystinosis","Lysosomal","TTI-0102 in cystinosis","IND cleared · investigator-initiated study","The FDA cleared the IND in October 2026. A single-site, open-label pilot at Emory University and Children&#8217;s Healthcare of Atlanta, under Dr. Larry Greenbaum, will switch adults from standard cysteamine to once-daily TTI-0102, ahead of a planned pivotal trial.",0,"Lead programme"],
 ["Leigh syndrome spectrum","Mitochondrial","TTI-0102 in Leigh syndrome","Phase 2a · IND cleared","A rare, severe pediatric mitochondrial disorder with no approved therapy. Phase 2a with a leading U.S. children&#8217;s hospital is planned; the FDA granted Rare Pediatric Disease designation in July 2026.",0,"Rare Pediatric Disease designation"],
 ["MELAS","Mitochondrial","TTI-0102 in MELAS","Phase 2 complete","The exploratory Phase 2 in the EU, begun in May 2025, characterised exposure and tolerability and showed biomarker changes consistent with reduced oxidative stress.",0,"Complete"],
 ["Pediatric MASH","Liver","TTI-0102 in pediatric MASH","Phase 2a planned (EU)","A serious, escalating liver disease in children with no approved treatment. The company has received EMA guidance supporting an IMPD submission for a Phase 2a trial in Europe.",1,"EMA guidance received"]];
/* Phase 1 dose-escalation in healthy volunteers, as the company reports it (thiogenesis.com, Science). */
var EVID=[
 ["Up to 2,400 mg","Cysteamine equivalent reached, four times the standard 600 mg dose"],
 ["No spike","Cmax never surpassed that of 600 mg generic cysteamine"],
 ["Over 24 hours","Therapeutic levels lasted more than a day, the basis for once-daily dosing"],
 ["No GI side effects","Only mild body odour, and only at the highest dose"]];
/* thiogenesis.com (About). Text-only masthead; summaries state only what the site states. */
var TEAM=[
 {g:"Leadership and board",name:"Patrice P. Rioux, MD, PhD",title:"Co-Founder, Director & CEO",sum:"Two decades developing rare-disease drugs. As CMO of Raptor Pharmaceuticals he secured U.S. and EU approval of PROCYSBI for cystinosis; formerly at ArmaGen, Edison, Repligen and Biogen."},
 {g:"Leadership and board",name:"Brook Riggins, CFA",title:"Director & CFO",sum:"25 years in small-cap public markets across biotechnology and medtech; founder of Beruscha Capital in Prague, formerly CIO of Limetree Capital."},
 {g:"Leadership and board",name:"Christopher M. Starr, PhD",title:"Chairman",sum:"Has helped bring six orphan drugs to market. Co-founded BioMarin and, as CEO of Raptor, oversaw the approval and launch of Procysbi; Executive Chairman of Monopar Therapeutics."},
 {g:"Leadership and board",name:"Kim R. Tsuchimoto",title:"Director, Chair of the Audit Committee",sum:"CFO of Monopar Therapeutics through its Nasdaq IPO; CFO of Raptor from inception, and eight years at BioMarin and Glyko."},
 {g:"Leadership and board",name:"W. Hogan Mullally",title:"Director",sum:"20 years in life sciences, from pharmaceutical sales to investor relations; founder of SectorSpeak, a capital-markets consultancy for small-cap life science companies."},
 {g:"Leadership and board",name:"Gilad Aharon, PhD",title:"Director",sum:"Co-founder and portfolio manager of Rosalind Advisors, a Toronto life sciences investment firm; director of Delcath Systems and NeurAxis."},
 {g:"Scientific advisory board",name:"Gregory Enns, MD",title:"Stanford University",sum:"Professor of Pediatrics, Medical Genetics; Director of the Biochemical Genetics Program since 1998, caring for patients with mitochondrial and lysosomal storage disorders."},
 {g:"Scientific advisory board",name:"David Housman, PhD",title:"MIT",sum:"Professor of Biology, known for his part in discovering the HTT gene behind Huntington’s disease; member of the National Academy of Sciences."},
 {g:"Scientific advisory board",name:"Miriam Vos, MD",title:"Michigan State University",sum:"Professor of Pediatrics and director of research at Helen DeVos Children’s Hospital; NIH-funded expert in pediatric liver disease and obesity."}];
/* news releases (thiogenesis.com, Investors), each linking to the company's own PDF */
var NEWS=[
 ["22 Oct 2026","FDA clears the IND for TTI-0102 in nephropathic cystinosis","6ae4c83388eb625d1f0c2a8e_NR%20261022%20Thio%20Announces%20CYS%20IND%20Cleared.pdf"],
 ["13 Jul 2026","FDA grants Rare Pediatric Disease designation for Leigh syndrome","6a62500633c3be7864c87e56_NR%20260713-%20Thio%20Announces%20RPD%20(F)%20copy.pdf"],
 ["3 Jun 2026","Closing of an oversubscribed $9.0m private placement","6a21babdb8a68d60bd80c912_NR%20260603%20(F)%20-%20Closes%20Oversubscribed%20Private%20Placement.pdf"],
 ["2 Feb 2026","Investigator-initiated study in cystinosis announced","6980ef6f54d79879d35e8e2f_TTI%20NR%20260202%20Cystinosis%20Investigator%20Study.pdf"],
 ["23 Jan 2026","Interim Phase 2 MELAS data presented at Mitocon 2026","69780ca6e83119ff5fad40f1_TTI%20NR%20260123%20Thio%20-%20MELAS%20Mitocon%20Prst%20.pdf"]];
var SHEETS=[];
